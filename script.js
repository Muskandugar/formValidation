function validation(){
 if(document.Formfill.Username.value==""){
  document.getElementById("result").innerHTML="Enter Username*";
  return false;
}
else if(document.Formfill.Username.value.length<6){
    document.getElementById("result").innerHTML="Atleast six letter*";
    return false;
  }
  else if(document.Formfill.Email.value==""){
    document.getElementById("result").innerHTML="Enter your email";
    return false;
  }
  else if(document.Formfill.Password.value==""){
    document.getElementById("result").innerHTML="Enter your password";
    return false;
  }
  else if(document.Formfill.Password.value.length<6){
    document.getElementById("result").innerHTML="Password must be 6 digit";
    return false;
}
  
else if(document.Formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="Enter your confirm password";
        return false;
  }
  else if(document.Formfill.CPassword.value!==document.Formfill.Password.value){
    document.getElementById("result").innerHTML="Password does'n matched";
    return false;
  }
  else if(document.Formfill.Password.value==document.Formfill.CPassword.value){
    popup.classList.add("open-slide")
  }
}
var popup=document.getElementById('popup');