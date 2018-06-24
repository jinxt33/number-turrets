$(document).ready(function() {

  var numArray = [];
  var arraySuper;

  $("form#number").submit(function(event) {
    event.preventDefault();

    var inputNum = parseInt($('input#number').val());

    console.log(inputNum);
    console.log(typeof inputNum);

    for (index = 1; index <= inputNum; index += 1) {
      numArray.push(index);
      $("ul#results").append("<li>" + index + "</li>");
    }


  });
});
