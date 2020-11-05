package com.innova.aspect;

import com.innova.exception.CaptchaExpectedException;
import com.innova.model.Attempt;
import com.innova.repository.AttemptRepository;
import com.innova.service.CaptchaValidator;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

@Aspect
@Component
public class CaptchaAspect {

    @Autowired
    private CaptchaValidator captchaValidator;

    private static final String CAPTCHA_HEADER_NAME = "captcha-response";

    @Autowired
    AttemptRepository attemptRepository;

    @Around("@annotation(RequiresCaptcha)")
    public Object validateCaptcha(ProceedingJoinPoint joinPoint) throws Throwable {

        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();

        if (attemptRepository.existsByIp(request.getRemoteAddr())) {
            Attempt attempt = attemptRepository.findById(request.getRemoteAddr()).get();
            if (attempt.getAttemptCounter() >= 3) {
                String captchaResponse = request.getHeader(CAPTCHA_HEADER_NAME);
                boolean isValidCaptcha = captchaValidator.validateCaptcha(captchaResponse);
                if (!isValidCaptcha) {
                    try {
                        throw new Exception("Captcha was expected");
                    } catch (Exception ex) {
                        throw new CaptchaExpectedException(ex.getMessage());
                    }
                }
            }
            return joinPoint.proceed();
        } else {
            return null;
        }
    }
}
