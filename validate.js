function validate(form) {


var unArray = ["admin", "George", "Sarah", "Michael"];  // as many as you like - no comma after final entry
var pwArray = ["111", "Password2", "Password3", "Password4"];  // the corresponding passwords;

for (var i=0; i <unArray.length; i++) {
if ((form.un.value == unArray[i]) && (form.pw.value == pwArray[i])) {
window.open("http://www.google.com");
}

else
{
alert("Incorrect Username or Password");
}


}
