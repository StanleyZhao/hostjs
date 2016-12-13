$(document).ready( function(){
console.log("test if get in");
$("#continue_button_1").on("click", function(){
        $("#email_1_summary").text($("#email_1").val());
        // $("#loan_amount_1_summary").text($("#loan_amount_1").find("option:selected").text());
        $("#loan_amount_1_summary").text($("#loan_amount_1").val());
        $("#loan_purpose_summary").text($("#primary_radio_1 .radio_label_2.ischecked").find("span").text());
        console.log("test if overwrite");
        gaEvent_LoanDetails_Continue();

    });
});
