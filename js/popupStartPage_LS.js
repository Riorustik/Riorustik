let r=false;
const phoneField = document.querySelector('input[name="name"]')
const phoneField1 = document.querySelector('input[name="surname"]')
const button = document.getElementById('buttonFormInputDataStartPage');

function ert() {   
    if (phoneField.value.length > 1 && phoneField1.value.length > 1 && r==true) 
        button.removeAttribute('disabled');
    else
        button.setAttribute('disabled', 'disabled');
}

document.getElementById('rgt').onclick = function(){
    if(r)
        r=false;
    else
        r=true ;
    console.log(r);
    ert();
}

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
        let a = sessionStorage.getItem("name");
        let b = sessionStorage.getItem("surname"); 
        let num = document.getElementById('popupBlockHiStartPage');       
        num.innerHTML=a+" "+b;       
        let num1 = document.getElementById('blockUserName');       
        num1.innerHTML=a+" "+b; 
        let num12 = document.getElementById('blockUp12');       
        num12.innerHTML=a+" "+b; 
    }
}

document.getElementById("buttonFormInputDataStartPage").onclick = function() {
    if(document.getElementById('buttonFormInputDataStartPage').onclick){ 
        sessionStorage.setItem('name', document.getElementById('inputNameFormStartPage').value);
        sessionStorage.setItem('surname', document.getElementById('inputSurnameFormStartPage').value);
        let a = sessionStorage.getItem("name");
        let b = sessionStorage.getItem("surname");     
        let num = document.getElementById('popupBlockHiStartPage');       
        num.innerHTML=a+" "+b;       
        let num1 = document.getElementById('blockUserName');       
        num1.innerHTML=a+" "+b; 
        let num12 = document.getElementById('blockUp12');       
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