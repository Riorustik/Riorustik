document.getElementById("firstFormThirdInputId").onclick = function() {
    if(document.getElementById('firstFormThirdInputId').onclick){ 
        let s1 = document.getElementById('firstFormFirstInputId').value
        let s2 = document.getElementById('firstFormSecondInputId').value
        let s = 1/2*s1*s2;
        var num = document.getElementById('firstFormFirstPId');       
        num.innerHTML=s; 
    }
}
document.getElementById("secondFormThirdInputId").onclick = function() {
    if(document.getElementById('secondFormThirdInputId').onclick){ 
        let d1 = document.getElementById('secondFormFirstInputId').value
        let d2 = document.getElementById('secondFormSecondInputId').value
        let d  = d1.length == d2.length;
        var num = document.getElementById('secondFormFirstPId');       
        num.innerHTML= d; 
    }
}
document.getElementById("thirdFormFirstInputId").onclick = function() {
    if(document.getElementById('thirdFormFirstInputId').onclick){ 
        var arr = []; 
        for(var i=0; i < 5; i++) {
            let r=i+1
            arr[i] = prompt('Введите любое число '+r);      
            if(arr[i] === null) {                           
                alert('Отмена');
                return;
            }
            if(arr[i] === '') {                             
                alert('Вы не указали число');
                arr[i] = prompt('Введите любое число'+i); 
            }
        }
        let mre = arr.sort((a, b) => a - b).pop();
        let mr = arr.sort((a, b) => a - b).shift();
        let num = document.getElementById('thirdFormFirstSpanId');  
        let num1 = document.getElementById('thirdFormSecondSpanId');        
        num.innerHTML= mre;
        num1.innerHTML= mr;
    }
}
       // <script type="text/javascript">
    
        /* функция добавления ведущих нулей */
        /* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(value)  {
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}
function date_time(){
    var current_datetime = new Date();
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth()+1);
    var year = current_datetime.getFullYear();
    var hours = zero_first_format(current_datetime.getHours());
    var minutes = zero_first_format(current_datetime.getMinutes());
    var seconds = zero_first_format(current_datetime.getSeconds());

    return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
}
setInterval(function (){document.getElementById('current').innerHTML = date_time()}, 1000);

document.getElementById("time").onclick = function(){
        Timer.countDown()
}
document.getElementById("time1").onclick = function(){
    Timer.stopDown()
}
document.getElementById("time2").onclick = function(){
    Timer.startOver()
}
let sec = 0;
let min = 0; 
let hour = 0;
let timer;
let time = document.getElementById('clock');

let Timer = {
    countDown() {   
        ++sec;
            if(sec == 60) {sec = 0; min++;}
            
            if(min == 60) {min = 0; hour++;}
            
            let h, m, s;
            
            if(sec < 10) s = '0' + sec;
            else s = sec;
            
            if(min < 10) m = '0' + min;
            else m = min;
            
            if(hour < 10) h = '0' + hour;
            else h = hour;
        time.innerHTML = h + ':' + m + ':' + s;
        timer = setTimeout("Timer.countDown()", 1000);
    },
    startDown() {
    if(!timer)
        this.countDown();
    },
    stopDown() {
        if(timer) {
            clearTimeout(timer);
            timer=null;
        }
    },
    startOver(){
        sec = 0;
        min = 0; 
        hour = 0;
        if(timer || !timer) {
            clearInterval(timer);
            timer = null;
            let h, m, s;
            s = '0' + sec;
            m = '0' + min;
            h = '0' + hour;
            time.innerHTML = h + ':' + m + ':' + s;
        }
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
document.getElementById("r1").onclick = function () {
    if(document.getElementById('r1').onclick){
        document.getElementById("test1").classList.add("testStart"); 
        document.getElementById("test1").classList.remove("test");  
        document.getElementById("test2").classList.add("test");   
        console.log(go)
        console.log(no)       
    }  
}
document.getElementById("r2").onclick = function () {
    if(document.getElementById('r2').onclick){
        document.getElementById("test2").classList.add("testStart"); 
        document.getElementById("test2").classList.remove("test");  
        document.getElementById("test3").classList.add("test");  
        console.log(go)
        console.log(no)        
    }  
}
document.getElementById("r3").onclick = function () {
    if(document.getElementById('r3').onclick){
        document.getElementById("test3").classList.add("testStart"); 
        document.getElementById("test3").classList.remove("test");  
        document.getElementById("test4").classList.add("test"); 
        console.log(go)
        console.log(no)         
    }  
}
document.getElementById("r4").onclick = function () {
    if(document.getElementById('r4').onclick){
        document.getElementById("test4").classList.add("testStart"); 
        document.getElementById("test4").classList.remove("test");  
        document.getElementById("test5").classList.add("test");          
        console.log(go)
        console.log(no)
    }  
}
document.getElementById("r5").onclick = function () {
    if(document.getElementById('r5').onclick){
        document.getElementById("test5").classList.add("testStart"); 
        document.getElementById("test5").classList.remove("test");  
        document.getElementById("test6").classList.add("test"); 
        console.log(go)
        console.log(no)         
    }  
}
document.getElementById("r6").onclick = function () {
    if(document.getElementById('r6').onclick){
        document.getElementById("test6").classList.add("testStart"); 
        document.getElementById("test6").classList.remove("test");  
        document.getElementById("test7").classList.add("test"); 
        console.log(go)
        console.log(no)         
    }  
}
document.getElementById("r7").onclick = function () {
    if(document.getElementById('r7').onclick){
        document.getElementById("test7").classList.add("testStart"); 
        document.getElementById("test7").classList.remove("test");  
        document.getElementById("test8").classList.add("test");    
        console.log(go)
        console.log(no)      
    }  
}
document.getElementById("r8").onclick = function () {
    if(document.getElementById('r8').onclick){
        document.getElementById("test8").classList.add("testStart"); 
        document.getElementById("test8").classList.remove("test");  
        document.getElementById("test9").classList.add("test");  
        console.log(go)
        console.log(no)        
    }  
}
document.getElementById("r9").onclick = function () {
    if(document.getElementById('r9').onclick){
        document.getElementById("test9").classList.add("testStart"); 
        document.getElementById("test9").classList.remove("test");  
        document.getElementById("test10").classList.add("test"); 
        console.log(go)
        console.log(no)         
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
        var numeric = document.getElementById('ert1231')
        if(go==10){
            numeric.innerHTML = "Гуру JS"
        }        
        if(go>=8 && go!=10){
            numeric.innerHTML = "Отличный результат"
        }
        if(go>=5 && go<8){
            numeric.innerHTML = "Ты справился"
        }
        if(go<5 && go>3){
            numeric.innerHTML = "Не олень, но надо подучить"
        }
        if(go<=3){
            numeric.innerHTML = "Наверное JS не твое"
        }

    }  
}
document.getElementById("r11").onclick = function () {
    if(document.getElementById('r11').onclick){
        document.getElementById("test10").classList.add("testStart"); 
        document.getElementById("test10").classList.remove("test");  
        document.getElementById("test1").classList.add("test");   
        go = 0;
        no = 0;
        console.log(go)
        console.log(no)       
    }  
}



      
