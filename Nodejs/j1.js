function call(){
    var a='{"dob":"2005-08-27"}';
    var obj = JSON.parse(a);
    document.getElementById("v1").innerHTML = new Date(obj.dob);
}