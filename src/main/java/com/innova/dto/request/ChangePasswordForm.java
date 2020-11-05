package com.innova.dto.request;

public class ChangePasswordForm {
    private String oldPassword;

    private String newPassword;

    private String newPasswordConfirmation;

    public String getOldPassword() {
        return oldPassword;
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }

    public String getNewPasswordConfirmation() {
        return newPasswordConfirmation;
    }

    public void setNewPasswordConfirmation(String newPasswordConfirmation) {
        this.newPasswordConfirmation = newPasswordConfirmation;
    }

    public boolean checkAllFieldsAreGiven(ChangePasswordForm changePasswordForm){
        if(changePasswordForm.getNewPassword() == null || changePasswordForm.getNewPasswordConfirmation() == null || changePasswordForm.getOldPassword() == null){
            return false;
        }
        return true;
    }
}
