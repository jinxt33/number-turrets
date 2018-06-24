$(document).ready(function() {

  var numArray = [];
  var arraySuper = [];

  $("form#number").submit(function(event) {
    event.preventDefault();

    var inputNum = $('input#number').val();
    var index;

    console.log(inputNum);
    console.log(typeof inputNum);

    for (index = 1; index <= parseInt(inputNum); index += 1) {

      if ( index % 8 === 0 ) {
        numArray.push(index);
        arraySuper.push("solucky!");
        result = "solucky!";
      } else if ( index % 4 === 0 ) {
        numArray.push(index);
        arraySuper.push("unlucky");
        result = "unlucky";
      } else {
        numArray.push(index);
        arraySuper.push(index);
        result = index;
      }

      $("ul#results").append("<li>" + result + "</li>");
    }

    console.log(numArray);
    console.log(arraySuper);

  });
});
