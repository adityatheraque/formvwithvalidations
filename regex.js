function firstName(){
    nameMassage=document.getElementById("nameMassage");
     Fname=document.getElementById("Fname");

     nameformat=/^([a-zA-z]{3,10})$/
  
     if(Fname.value==""){
           nameMassage.innerHTML="Fname can not be blank"
       }else if(nameformat.test(Fname.value)){
      
           nameMassage.innerHTML="correct"
         }else{
           nameMassage.innerHTML="allowed length 3 to 10 words"
         }
  
  }
  
  function lastName(){ lnamemassage=document.getElementById("lnameMassage");
       Lname=document.getElementById("Lname");
  
       lnameformat=/^([a-zA-z]{3,11})$/

       if(Lname.value==""){
           lnameMassage.innerHTML="Lname can not be blank"
          }else if(lnameformat.test(Lname.value)){
        
             lnameMassage.innerHTML="correct"
          }else{
            lnameMassage.innerHTML="allowed length 3 to 11 words"
          }
        
  }
  
  function passWord(){
    passmassage=document.getElementById("passwordMassage");
     password=document.getElementById("pass");
  
  
     if(pass.value==""){
           passwordMassage.innerHTML="pass can not be blank"
         }else if(pass.value.length<10){
      
           passwordMassage.innerHTML="Min 10"
         }else{
          passwordMassage.innerHTML="correct"
         }
  
  }
  
  
  function Email(){
    emailmassage=document.getElementById("emailMassage");
       email=document.getElementById("mail");
  
       if(mail.value==""){
             emailMassage.innerHTML="mail can not be blank"
           }else if(mail.value.length<10){
         email.Massage.innerHTML="min 10"
           }
           else if(mail.value.length>16)
             {
             emailMassage.innerHTML="max 16 "
           }else{
             emailMassage.innerHTML="correct"
           }
  }
  
  function mobileNumber(){
    numbermassage=document.getElementById("noMassage");
       number=document.getElementById("number");
  
       numberformat=/^([0-9]{10})$/

       if(number.value==""){
             noMassage.innerHTML="number can not be blank"
           }else if(numberformat.test(number.value)){
        
             noMassage.innerHTML="correct"
           }else{
             noMassage.innerHTML="Incorrect format value Enter only numbers value"
           }
        
  }
  