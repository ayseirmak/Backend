insert into email_templates (template_name, content)
VALUES ('db-verification_email',
'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns:th="https://thymeleaf.org">
<head>
    <title>Sending Email with Thymeleaf HTML Template Example</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href=''http://fonts.googleapis.com/css?family=Roboto'' rel=''stylesheet'' type=''text/css''>
    <style>
        body {
            font-family: ''Roboto'', sans-serif;
            font-size: 24px;
        }
    </style>
</head>
<body style="margin: 0; padding: 0;">

<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
    <tr>
        <td bgcolor="#eaeaea" style="padding: 40px 30px 40px 30px;">
            <p >Dear <span th:text="${name}"></span>,</p>
            <p>Thank you for registering our service. Please click the link below to activate your account.</b></p>
            <a th:href="${url}">Activate my account</a>
        </td>
    </tr>
    <tr>
        <td bgcolor="#777777" style="padding: 30px 30px 30px 30px;">
            <p th:text="${signature}">${signature}</p>
            <p></p>
        </td>
    </tr>
</table>
</body>
</html>');

insert into email_templates (template_name, content)
VALUES ('db-forgotpassword_email',
'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns:th="https://thymeleaf.org">
<head>
    <title>Sending Email with Thymeleaf HTML Template Example</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href=''http://fonts.googleapis.com/css?family=Roboto'' rel=''stylesheet'' type=''text/css''>
    <style>
        body {
            font-family: ''Roboto'', sans-serif;
            font-size: 24px;
        }
    </style>
</head>
<body style="margin: 0; padding: 0;">

<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
    <tr>
        <td bgcolor="#eaeaea" style="padding: 40px 30px 40px 30px;">
            <p>Dear <span th:text="${name}"></span>,</p>
            <p>Seems like somebody forgot something but do not worry. We got this! Please click the link below to renew your password.</b></p>
            <a th:href="${url}">Renew my password</a>
        </td>
    </tr>
    <tr>
        <td bgcolor="#777777" style="padding: 30px 30px 30px 30px;">
            <p th:text="${signature}">${signature}</p>
            <p></p>
        </td>
    </tr>
</table>
</body>
</html>');