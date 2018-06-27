//BUSINESS LOGIC
var index;
var result;
var numArray = [];
var arraySuper = [];
var superLogic = function(inputNum) {
  for (index = 1; index <= inputNum; index += 1) {
    // index.includes('8');
    if ( index % 8 === 0 ) {
      numArray.push(index);
      arraySuper.push("solucky!");
      result = "solucky!";
    } else if ( index % 4 === 0 ) {
      numArray.push(index);
      arraySuper.push("unlucky");
      result = "unlucky";
    } else if ( index % 3 === 0 ) {
      numArray.push(index);
      arraySuper.push("crazyyy");
      result = "crazyyy";
    } else {
      numArray.push(index);
      arraySuper.push(index);
      result = index;
    }
    $("ul#results").append("<li>" + result + "</li>");
  }
}
//UI LOGIC
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var inputNum = parseInt($('input#number').val());
    //CALLBACK
    $("ul#results").empty();
    $("ul#results").show();
    superLogic(inputNum);
    //console.log(numArray);
    //console.log(arraySuper);
  });
});
