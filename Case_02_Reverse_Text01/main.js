function reverseText(par) {

  var par = document.getElementById("formValue").input1.value;
  var words =[];
  words = par.match(/\S+/g);
  var result ="";
  for (var i = 0; i < words.length; i++){
    result += words[i].split("").reverse().join("")+" ";
  }
  return document.getElementById("container").innerHTML = result; 

}
