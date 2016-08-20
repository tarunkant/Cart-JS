




function load(form) {
 
var myData = JSON.parse(text);
var test = 0;

for(var i=0;i<myData.length;i++){
    if(form.usern.value == myData[i].name && form.pwd.value == myData[i].age){
    window.open("file:///home/testexam/log.html");
    test++;
    }
   
}
if (test == 0){
    alert("Incorrect Username or Password");
    }
}   
