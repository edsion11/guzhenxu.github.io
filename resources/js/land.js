var b1=true;
var b2=true;
function user()
{
	var user = document.getElementById("input_user").value;
	if(user.length>18||user.length<3)
		{
            document.getElementById('tipsone').style.display='block';
        	b1=false;
		}
	else 
	{
        document.getElementById('tipsone').style.display='none';
		b1=true;
	}
}
function password()
{
	var password = document.getElementById("input_password").value;
	if(password.length==0)
		{
            document.getElementById('tipstwo').style.display='block';
			b2=false;
		}
	else 
	{
        document.getElementById('tipstwo').style.display='none';
		b2=true;
	}
}
var zhuce=document.getElementsByClassName("LandButton")[0];
zhuce.addEventListener("click",function(){
		if(b1==true&&b2==true)
		{
			alert("登录成功");
		}
})