function register()
{
	//alert ("hi");
	var fname = document.getElementById("fname");
	var email=document.getElementById('email');
	var mobile=document.getElementById("mobile");
	var comment=document.getElementById("comment");
	var fnameError = document.getElementById('fnameError');
	var emailError=document.getElementById('emailError');
	var mobileError=document.getElementById('mobileError');
	var commentError=document.getElementById("commentError");
	
	fnameError.innerHTML="";
	emailError.innerHTML="";
	mobileError.innerHTML="";
	commentError.innerHTML="";
	

	var flag=true;


     if(!regis(fname,2,20,fnameError))
	 {
	   fnameError.innerHTML="Please Enter Valid Name";	
	   flag=false;
	 }
	 /*if(/[^a-zA-Z ]/.test(fname.value))
	{
	fnameError.innerHTML="name should not contain number and special characters";
	flag=false;
	}*/

	/* if(!regis(lname,2,20,lnameError))
	 {
		 flag=false;
		lnameError.innerHTML="please enter valid last name";
      }*/
	  
     if(!regis(comment,6,30,commentError))
	 { 
		 flag=false;
		commentError.innerHTML="Please Enter Minimum 6 Characters ";
		 
     }
	  
	 
	 if(!regis(mobile,10,10,mobileError))
	 {
		 flag=false;
		 mobileError.innerHTML="Please Enter 10 Digit Mobile Number";		 
	 }
	 
	 if(isNaN(mobile.value))
		 
	 {
		 flag=false;
		 mobileError.innerHTML="Please Enter Only Numbers";		 
	 }
	
	 if(email.value == ""){
		 flag=false;
	 	 emailError.innerHTML="Please Enter Valid Emailid";	 
	 }
	 
		 
	 
	/* if(!etxt.value.match(mailformat.value)){
		  flag=false;
		 eiderror.innerHTML="Please Check Email Id";
		 
	 }*/
	return flag;
}

      function regis(ftxt,min,max,nameerror)
     {
	   var ftxt1=ftxt.value;
	  // ftxt1 =  (/[^a-zA-Z ]/.test(ftxt1.value));
	   if(ftxt1.length>=min && ftxt1.length<=max)
	   {
		   
		   return true;
		    //window.open("http://localhost/realesatate/newloginnnn.php");

	   }
	   if((/[^a-zA-Z ]/.test(ftxt1)))
		{
			//fnameError.innerHTML="name should not contain number and special characters";
			 return true;
		}
		return false;
	 }	


/*function displaytxtbox()

{
	
	var emailtxt=document.getElementById('emailtxt');
	var btn=document.getElementById('btn');
	btn.style.display="block";
	emailtxt.style.display="block";
	emailtxt.style.borderColor="black";
	emailtxt.style.width="250px";
	emailtxt.style.height="30px";
	
	emailtxt.style.borderStyle="groove";
	var errordiv=document.getElementById('errordiv');
	errordiv.innerHTML="Enter Your Register Email Id";
}

function show(var tab)
{
	var flag = false;
	var tab = document.getElementById('tab');
	tab.style.display="block";
	tab.style.visibility="visible";
	return falg;
}*/
