$(document).ready(function() {

  $("form#number").submit(function(event) {
    event.preventDefault();

    var inputNum = parseInt($('input#number').val());

    console.log(inputNum);
    console.log(typeof inputNum);
  });
});
