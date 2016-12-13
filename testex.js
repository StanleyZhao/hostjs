$(document).ready( function(){
console.log("test if get in");
function summary1() {
        $("#email_1_summary").text($("#email_1").val());
        // $("#loan_amount_1_summary").text($("#loan_amount_1").find("option:selected").text());
        $("#loan_amount_1_summary").text($("#loan_amount_1").val());
        $("#loan_purpose_summary").text($("#primary_radio_1 .radio_label_2.ischecked").find("span").text());
 console.log("test if override");
    }
});
