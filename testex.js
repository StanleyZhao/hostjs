$(document).ready( function(){
console.log("test if get in");
 var oldsummary1 = window.summary1;
    window.summary1 = function() {
    window.alert('hello overwritten');
    console.log("test for override");
    oldsummary1();
  };
});
