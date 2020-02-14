var b1=true;
var b2=true;
var b3=true;
var b4=true;
function user()
{
	var user = document.getElementById("input_user").value;
	if(user.length>18||user.length<3)
		{
			document.getElementById("erroruser").setAttribute("style","font-size: 10px;width: 10px;color: red;");
			b1=false;
		}
	else 
	{
		document.getElementById("erroruser").setAttribute("style","font-size: 10px;width: 10px;color: green;");
		 b1=true;
	}
}
function email()
{
	var email = document.getElementById("input_email").value;
	var pattern = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
	console.log(email);
	if(!pattern.test(email))
		{
			document.getElementById("erroremail").style.color="red";
			b2=false;
		}
	else
		{
			document.getElementById("erroremail").style.color="green";
			b2=true;
		}
}
function number()
{
	var number = document.getElementById("input_number").value;
	var pattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
    if(!pattern.test(number))
		{
			document.getElementById("errornumber").style.color="red";
			b3=false;
		}
	else
		{
			document.getElementById("errornumber").style.color="green";
			b3=true;
		}
}
function validate() {
    var pwd1 = document.getElementById("pwd").value;
    var pwd2 = document.getElementById("pwd1").value;
    if(pwd1 == pwd2)
     {
        document.getElementById("tishi").style.color="green";
		b4=true; 
	}
    else {
		document.getElementById("tishi").style.color="red";
		b4=false;
     }
}
var zhuce=document.getElementsByClassName("RegisterButton")[0];
zhuce.addEventListener("click",function(){
		if(b1==true&&b2==true&&b3==true&&b4==true)
		{
			alert("注册成功");
		}
})
