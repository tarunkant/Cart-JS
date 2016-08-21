




function checking(form) {

var tarun = JSON.parse(data);

for (var i=0; i<tarun.length; i++) {
if ((form.Usern.value == tarun[i].Username)) && ((form.pwd.value == tarun[i].password)){
  
window.open("file:///home/testexam/E-cart/cartpage2.html");
}



else{

alert("Incorrect Username or Password");
}

}
