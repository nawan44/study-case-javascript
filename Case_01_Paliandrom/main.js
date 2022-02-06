function palindrom(value1) {
  var value1 = document.getElementById("formValue").input1.value;
  var output1 = document.getElementById("container");
  var value2 = value1.split('').reverse().join('');
  if (value1 === value2) {
    output1.innerHTML = "<span class='paliandrom'>Paliandrom</span>";
  }
  else {
    output1.innerHTML = "<span class='not-paliandrom'>Not Paliandrom</span>";
  }
}