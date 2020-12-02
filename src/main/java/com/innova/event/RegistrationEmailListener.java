package com.innova.event;

import com.innova.model.User;
import com.innova.security.jwt.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class RegistrationEmailListener implements ApplicationListener<OnRegistrationSuccessEvent> {

    @Autowired
    EmailSender emailSender;

    @Autowired
    JwtProvider jwtProvider;

    @Autowired
    private SpringTemplateEngine templateEngine;

    @Override
    public void onApplicationEvent(OnRegistrationSuccessEvent event){
        try {
            this.confirmRegistration(event);
        } catch (MessagingException | IOException e) {
            e.printStackTrace();
        }

    }

    private void confirmRegistration(OnRegistrationSuccessEvent event) throws MessagingException, IOException {
        User user = event.getUser();
        String token = jwtProvider.generateJwtTokenForVerification(user);

        String recipient = user.getEmail();
        String url = "https://tatli-sozluk.herokuapp.com" + event.getAppUrl() + "/confirmRegistration?token=" + token;

        Map model = new HashMap();
        model.put("name", user.getUsername());
        model.put("url", url);
        model.put("signature", "https://www.innova.com.tr/tr");

        Context context = new Context();
        context.setVariables(model);
        String content = templateEngine.process("db-verification_email", context);

        emailSender.sendSimpleMessage(content ,recipient, "Registration Confirmation");
    }
}