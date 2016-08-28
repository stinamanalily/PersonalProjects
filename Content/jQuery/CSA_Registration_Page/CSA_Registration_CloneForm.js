j$ = jQuery.noConflict();

j$(document).ready(function () {
    var counter = 1;
    var max_users = 5;
    j$('#user_1').find('#CSA').hide();
    j$('.btnAddUser').click(function () {
        AddUser(j$('#user_1'));
    });
    
    function AddUser(user) {
        counter += 1;
        if (counter <= max_users) {
            var newUser = user.clone();
            // set id attribute of the new user and set as the current user
            newUser.attr("id", ("user_" + counter));
            if (counter === 2) {
                user.find('#CSA').show();
                newUser.find('#CSA').text("2nd Customer Security Administrator Information");
		        newUser.find('#CSA').show();
            }
            else if (counter === 3) {
                newUser.find('#CSA').text(counter + "rd Customer Security Administrator Information");
            }
            else if (counter === 4 || counter === 5) {
                newUser.find('#CSA').text(counter + "th Customer Security Administrator Information");
                if (counter === 5) {
                   j$('.btnAddUser').hide(500);
                }
            }
            // find field in the current_user and then rename
			
            newUser.find('#firstname_1').attr("id", ("firstname_" + counter));
            newUser.find('#lastname_1').attr("id", ("lastname_" + counter));
            newUser.find('#companyAddress_1').attr("id", ("companyAddress_" + counter));
            newUser.find('#secondaryCompanyAddress_1').attr("id", ("secondaryCompanyAddress_" + counter));
            newUser.find('#city_1').attr("id", ("city_" + counter));
            newUser.find('#state_1').attr("id", ("state_" + counter));
            newUser.find('#zip_1').attr("id", ("zip_" + counter));
            newUser.find('#country_1').attr("id", ("country_" + counter));
            newUser.find('#jobtitle_1').attr("id", ("jobtitle_" + counter));
            newUser.find('#email_1').attr("id", ("email_" + counter));
            newUser.find('#phone_1').attr("id", ("phone_" + counter));
            newUser.find('#ext_1').attr("id", ("ext_" + counter));
			
            //append
            newUser.appendTo(j$('.users'));
        }
    }
});
