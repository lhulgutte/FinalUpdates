function test(){
var name=document.getElementById("name1").value;
var email=document.getElementById("email1").value;

//storing data
var userName=localStorage.setItem("username",name);
var userEmail=localStorage.setItem("useremail",email);

//retrieving data
var userName=localStorage.getItem("username",name);
var userEmail=localStorage.getItem("useremail",email);

/*var a,b;
a="xyz";
b="abc@gmail.com";

if(a==userName && b==userEmail){
    alert("Successful");
}
else{
    alert("Unsuccessful");
}*/

}
