function validatePass(p1, p2){
  var p1val = document.getElementById("password1").value
  var p2val = document.getElementById("password2").value

  var p1 = document.getElementById("password1")
  var p2 = document.getElementById("password2")

  if (p1.value == p2.value) {
    // p2.style.backgroundColor = "green";
    p2.style.backgroundColor = "green";
    p1.style.backgroundColor = "green";
  }
  else if (p1.value != p2.value) {
    p2.style.backgroundColor = "red";
  }
}
