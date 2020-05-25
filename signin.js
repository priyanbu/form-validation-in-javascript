let x = document.getElementsByTagName("input");

function signup(){
  event.preventDefault();
    let firstname = document.getElementById("fname").value;
    let lastname = document.getElementById("Lname").value;
    let mail = document.getElementById("email").value;
    let pnum = document.getElementById("pnum").value;
    let password = document.getElementById("password").value;

    let data = {
      firstname,
      lastname,
      pnum,
      password,
      mail
      
    }
    console.log(" user data to signup",data);
    formClear();

    // ---------------validation--------------//

     alpha = /^[A-Za-z]+$/
     if(firstname==""){
       alert("please enter the name");
       return false;
     }
     if(!alpha.test(firstname)){
       alert("please enter only alphabets");
       return false;
     }
     if(lastname==""){
       alert("please enter the last name");
       return false;
     }
     email =/^([A-Za-z0-9._])+\@([a-z])+\.([a-z])+$/
     if(mail==""){
       alert("please enter the email");
       return false;
     }
     if(!email.test(mail)){
       alert("please enter email format");
       return false;
     }
     num = /^([0-9]{10})+$/
     if(pnum==""){
       alert("please enter mobile num");
       return false;
     }
     if(!num.test(pnum)){
       alert("please enter only 10 digit value");
       return false;
     }

     pw = /^(([A-Z])+([a-z])+([0-9])+([!@#$%^&*]))+$/
     if(password==""){
       alert("please enter password");
       return false;
     }
     if(!pw.test(password)){
       alert("use atleast one small,caps,num and special char ");
       return false;
     }

    
}
  
  

function formClear(){
  let firstname = document.getElementById("fname").value='';
  let lastname = document.getElementById("Lname").value='';
  let mail = document.getElementById("email").value='';
  let pnum = document.getElementById("pnum").value='';
  let password = document.getElementById("password").value='';
 
}





let isActive = true;

function ToggleContainer(){
  let logincontainer= document.querySelector('#logincontainer .login');
  let signupcontainer= document.querySelector('#signupcontainer .signup');
  if(isActive){
    signupcontainer.style.display="block";
    logincontainer.style.display="none";
  }else{
    signupcontainer.style.display="none";
    logincontainer.style.display="block";
  }
  console.log('sss',isActive);
  isActive = !isActive;
}
ToggleContainer();