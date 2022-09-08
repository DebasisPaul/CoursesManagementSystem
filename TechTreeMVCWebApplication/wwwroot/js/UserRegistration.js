$(function () {
    var registerUserButton = $("#UserRegistrationModal button[name = 'register']").click(onUserRegisterClick);

    function onUserRegisterClick() {
        var url = "/UserAuth/RegisterUser";

        var antiForgeryToken = $("#UserRegistrationModal input[name='__RequestVerificationToken']").val();
        var email = $("#UserRegistrationMdal input[name='Email']").val();
        var Password = $("#UserRegistrationMdal input[name='Password']").val();

        var ConfirmPassword = $("#UserRegistrationMdal input[name='ConfirmPassword']").val();

        var firstName = $("#UserRegistrationMdal input[name='FirstName']").val();

        var lastName = $("#UserRegistrationMdal input[name='LastName']").val();

        var address1 = $("#UserRegistrationMdal input[name='Address1']").val();

        var address2 = $("#UserRegistrationMdal input[name='address2']").val();

        var postCode = $("#UserRegistrationMdal input[name='PostCode']").val();

        var phoneNumber = $("#UserRegistrationMdal input[name='Phone Number']").val();

        var user = {
            __RequestAntiForgeryToken: antiForgeryToken,
            Email: email,
            Password: password,
            ConfirmPassword: confirmPassword,
            FirstName: firstName,
            LastName: latsName,
            Address1: address1,
            Address2: address2,
            PostCode: postCode,
            PhoneNumber: phoneNumber,
            AcceptUserAggrement: true
        };

        $.ajax({
            type: "POST",
            url: url,
            data: user,
            success: function (data) {

                var parsed = $.parseHTML(data);

                var hasErrors = $(parsed).find("input[name='RegistrationInValid']").val() == 'true';

                if (hasErrors) {

                    $("#UserRegistrationModel").html(data);

                    var registerUserButton = $("#UserRegistrationModal button[name = 'register']").click(onUserRegisterClick);

                    $("#UserRegistrationForm").removeData("validator");
                    $("#UserRegistrationForm").removeData("unobtrusiveValidation");
                    $.validator.unobtrusive.parse("#UserRegistrationForm");

                }

                else {
                    location.href = '/Home/Index';
                }
            },

            error: function (xhr, ajaxOptions, thrownError) {
                console.error(thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText);
            }
        });

    }
})