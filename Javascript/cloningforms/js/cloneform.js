var counter = 1;
var MAX = 5;
function createForm() {
    counter += 1;
	var form = $("#form_1");

    if (counter <= MAX) {
        var newForm = form.clone();

        // set id attribute of the new user and set as the current user
        newForm.attr("id", ("form_" + counter));

            if (counter === 5) {
                $('#btnAddUser').fadeOut(500);
            }
        //append
        newForm.appendTo($("#forms"));
    }
}