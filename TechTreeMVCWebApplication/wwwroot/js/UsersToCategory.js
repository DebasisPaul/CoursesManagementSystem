$(function () {

    var errorText = "An error has occurred. An administrator has been notified. Please try again later";

    $("button[name='SaveSelectedUsers']").prop('disabled', true);

    $('select').on('change', function () {
        var url = "/Admin/UsersToCategory/GetUsersForCategory?categoryId=" + this.value;

        if (this.value != 0) {
            $.ajax(
                {
                    type: "GET",
                    url: url,
                    success: function (data) {
                        $("#UserCheckList").html(data);
                        $("button[name='SaveSelectedUsers']").prop('disabled', true);
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        PresentClosableBoostrapAlert("#alert_placeholder", "danger", "An error occurred!", errorText);
                        console.error("An error has occurred: " + thrownError + "Status: " + xhr.status + "\r\n" + xhr.responseText);
                    }
                }
            );
        }
        else {
            $("button[name='SaveSelectedUsers']").prop('disabled', true);
            $("input[type=checkbox]").prop("checked", false);
            $("input[type=checkbox]").prop("disabled", false);

        }
    });

    $('#SaveSelectedUser').click(function () {
        var url = "Admin/UsersToCategory/SaveSelectedUsers";

        var categoryId = $("#CategoryId").val();

        var antiForgeryToken = $("input[name='__RequestVerificationToken']").val();

        var usersSelected = [];

        DisableControls(true);

        $('input[type=checkbox]').prop('disabled', true);
        $(this).prop('disabled', true);
        $('select').prop('disabled', true);

        $(".progress").show("fade");

        $('input[type=checkbox]:checked').each(function(){
            var userModel = {
                Id: $(this).attr("value")
            };
            usersSelected.push(userModel);
        });

        var usersSelectedForCategory = {
            __RequestVerificationToken: antiForgeryToken,
            CategoryId: categoryId,
            UserSelected: usersSelected
        };

        $.ajax(
            {
                type: "POST",
                url: url,
                data: usersSelectedForCategory,
                success: function (data) {
                    $("#UserCheckList").html(data);
                    $("button[name='SaveSelectedUsers']").prop('disabled', true);

                    $(".progress").hide("fade", function () {
                        $(".alert-success").fadeTo(2000, 500).slideUp(500, function () {
                            DisableControls(false);
                        });
                    });
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    $(".progress").hide("fade", function () {
                        PresentClosableBoostrapAlert("#alert_placeholder", "danger", "An error occurred!", errorText);
                        console.error("An error has occurred: " + thrownError + "Status: " + xhr.status + "\r\n" + xhr.responseText);
                        DisableControls(false);
                    });

                    }
            }
        );

        function DisableControls(disable) {
            $('input[type=checkbox]').prop("disabled", disable);
            $("#SaveSelectedUsers").prop('disabled', disable);
            $('select').prop('disabled', disable);
        }

    });
});