document.getElementById("r1").onclick = function () {
    if(document.getElementById('r1').onclick){
        document.getElementById("test1").classList.add("testStart"); 
        document.getElementById("test1").classList.remove("test");  
        document.getElementById("test2").classList.add("test");          
    }  
}
document.getElementById("r2").onclick = function () {
    if(document.getElementById('r2').onclick){
        document.getElementById("test2").classList.add("testStart"); 
        document.getElementById("test2").classList.remove("test");  
        document.getElementById("test3").classList.add("test");          
    }  
}
document.getElementById("r3").onclick = function () {
    if(document.getElementById('r3').onclick){
        document.getElementById("test3").classList.add("testStart"); 
        document.getElementById("test3").classList.remove("test");  
        document.getElementById("test4").classList.add("test");          
    }  
}
document.getElementById("r4").onclick = function () {
    if(document.getElementById('r4').onclick){
        document.getElementById("test4").classList.add("testStart"); 
        document.getElementById("test4").classList.remove("test");  
        document.getElementById("test5").classList.add("test");          
    }  
}
document.getElementById("r5").onclick = function () {
    if(document.getElementById('r5').onclick){
        document.getElementById("test5").classList.add("testStart"); 
        document.getElementById("test5").classList.remove("test");  
        document.getElementById("test6").classList.add("test");          
    }  
}
document.getElementById("r6").onclick = function () {
    if(document.getElementById('r6').onclick){
        document.getElementById("test6").classList.add("testStart"); 
        document.getElementById("test6").classList.remove("test");  
        document.getElementById("test7").classList.add("test");          
    }  
}
document.getElementById("r7").onclick = function () {
    if(document.getElementById('r7').onclick){
        document.getElementById("test7").classList.add("testStart"); 
        document.getElementById("test7").classList.remove("test");  
        document.getElementById("test8").classList.add("test");          
    }  
}
document.getElementById("r8").onclick = function () {
    if(document.getElementById('r8').onclick){
        document.getElementById("test8").classList.add("testStart"); 
        document.getElementById("test8").classList.remove("test");  
        document.getElementById("test9").classList.add("test");          
    }  
}
document.getElementById("r9").onclick = function () {
    if(document.getElementById('r9').onclick){
        document.getElementById("test9").classList.add("testStart"); 
        document.getElementById("test9").classList.remove("test");  
        document.getElementById("test10").classList.add("test");          
    }  
}
document.getElementById("r10").onclick = function () {
    if(document.getElementById('r10').onclick){
        document.getElementById("test10").classList.add("testStart"); 
        document.getElementById("test10").classList.remove("test");  
        document.getElementById("test11").classList.add("test");
        console.log(go);
        console.log(no); 
        var numGo = document.getElementById('ert2');       
        var numNo = document.getElementById('ert3');       
        numGo.innerHTML= go;        
        numNo.innerHTML= no;          
    }  
}

let go = 0;
let no = 0;
let Test = {
    countDown1() {   
        go++;
    },
    stopDown1() {
        no++;
    }

}
