var text = '{ "Login" : [' +
'{ "Username":"tarun" , "Password":"123" },' +
'{ "Username":"kant" , "Password":"456" },' +
'{ "Username":"gupta" , "Password":"789" } ]}';

var obj = JSON.parse(text);

function validateForm() {
    var x = text.login ["Username"]["Password"].value;
    if (x == null || x == "") {
        alert("Incorrect Username or Password");
        return false;
    }
}



