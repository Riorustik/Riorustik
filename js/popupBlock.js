const checkLength = function(evt) {
    if (phoneField.value.length > 1 && phoneField1.value.length > 1) {
        button.removeAttribute('disabled');
    }
  }
const phoneField = document.querySelector('input[name="name"]')
const phoneField1 = document.querySelector('input[name="surname"]')
const button = document.getElementById('buttonFormInputDataStartPage')
phoneField.addEventListener('keyup', checkLength);
phoneField1.addEventListener('keyup', checkLength);

function rf(){  
    if(sessionStorage.getItem("most1")!==null){
        let text1 = sessionStorage.getItem("most1");
        document.getElementsByClassName("hideFirstBlock")[0].classList.add(text1);
    }
    if(sessionStorage.getItem("most2")!==null){
        let text4 = sessionStorage.getItem("most2");
        document.getElementsByClassName("startPage")[0].classList.add(text4); 
    }
    if(sessionStorage.getItem("name")!==null || sessionStorage.getItem("surname")!==null){
        var a = sessionStorage.getItem("name");
        var b = sessionStorage.getItem("surname"); 
        var num = document.getElementById('popupBlockHiStartPage');       
        num.innerHTML=a+" "+b;       
        var num1 = document.getElementById('blockUp1');       
        num1.innerHTML=a+" "+b; 
        var num12 = document.getElementById('blockUp12');       
        num12.innerHTML=a+" "+b; 

    }
}
document.getElementById("buttonFormInputDataStartPage").onclick = function() {
    if(document.getElementById('buttonFormInputDataStartPage').onclick){ 
        sessionStorage.setItem('name', document.getElementById('inputNameFormStartPage').value);
        sessionStorage.setItem('surname', document.getElementById('inputSurnameFormStartPage').value);
        var a = sessionStorage.getItem("name");
        var b = sessionStorage.getItem("surname");     
        var num = document.getElementById('popupBlockHiStartPage');       
        num.innerHTML=a+" "+b;       
        var num1 = document.getElementById('blockUp1');       
        num1.innerHTML=a+" "+b; 
        var num12 = document.getElementById('blockUp12');       
        num12.innerHTML=a+" "+b;           
    }
}
document.getElementById("popupBlockButtonStartPage").onclick = function() {
    if(document.getElementById('popupBlockButtonStartPage').onclick){
        document.getElementsByClassName("hideFirstBlock")[0].classList.add("thirdPopupBlock");          
        sessionStorage.setItem('most1', "thirdPopupBlock"); 
        document.getElementsByClassName("startPage")[0].classList.add("hideFirstBlock");          
        sessionStorage.setItem('most2', "hideFirstBlock"); 
    }  
}
rf();