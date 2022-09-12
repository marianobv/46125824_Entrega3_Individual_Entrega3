
function setLoginID(id) {
  localStorage.setItem("LoginID", emailText.value);
  window.location = "index_2.html"
}

//setLoginID()


//1. Declaro campos vacíos

function empty_email(){
let email_valid = document.getElementById("ee")
if(email_valid.value===""){
return false
}
{
return true
}
}

function empty_password(){
  let password_valid= document.getElementById("pw")
  if(password_valid.value===""){
  return false
  }
  {
  return true
  }
}



//2. Declaro funciones de errores y éxitos
  
              function showAlertError1() {
                   document.getElementById("alert-danger1").classList.add("show");
                   }

                            function showAlertError2() {
                                    document.getElementById("alert-danger2").classList.add("show");
                                    }

                                    function showAlertError3() {
                                      document.getElementById("alert-danger3").classList.add("show");
                                      }

    //3.Muestro alertas
    const emailText = document.getElementById("ee");
    const emailText_value = emailText.value
    
    function validar_email (){
    if (emailText_value.includes('@')){
    return true
    }else{
    return false
    }


  }

    function general_valid () {
      if(empty_email() && empty_password () && validar_email){
        setLoginID ()
      }
      else if(empty_password()){
        showAlertError1();
      }
      else if(empty_email()){
        showAlertError2();
      }
      else{
        showAlertError3()
      }
      }


      
    


        
    //4.Agrego 1 listener 
          enter.addEventListener("click", () => {
          general_valid ()
          }
          )


//ENTREGA 2
//const emailText = document.getElementById("ee");
const enter_var = document.getElementById("enter");

enter_var.addEventListener("click", (evt) => {
  localStorage.setItem("text", emailText.value)

});






        