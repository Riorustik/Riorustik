document.getElementById("s3").onclick = function() {
    if(document.getElementById('s3').onclick){ 
        let s1 = document.getElementById('s1').value
        let s2 = document.getElementById('s2').value
        let s = 1/2*s1*s2;
        var num = document.getElementById('s4');       
        num.innerHTML=s; 
    }
}
document.getElementById("d3").onclick = function() {
    if(document.getElementById('d3').onclick){ 
        let d1 = document.getElementById('d1').value
        let d2 = document.getElementById('d2').value
        let d  = d1.length == d2.length;
        var num = document.getElementById('d4');       
        num.innerHTML= d; 
    }
}
document.getElementById("m3").onclick = function() {
    if(document.getElementById('m3').onclick){ 
        var arr = []; 
        for(var i=0; i < 5; i++) {
            
            arr[i] = prompt('Введите любое число '+i);      
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
        let num = document.getElementById('m4');  
        let num1 = document.getElementById('m5');        
        num.innerHTML= mre;
        num1.innerHTML= mr;
    }
}
       // <script type="text/javascript">
    
        /* функция добавления ведущих нулей */
        /* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(value)
        {
            if (value < 10)
            {
                value='0'+value;
            }
            return value;
        }
    
        /* функция получения текущей даты и времени */
        function date_time()
        {
            var current_datetime = new Date();
            var day = zero_first_format(current_datetime.getDate());
            var month = zero_first_format(current_datetime.getMonth()+1);
            var year = current_datetime.getFullYear();
            var hours = zero_first_format(current_datetime.getHours());
            var minutes = zero_first_format(current_datetime.getMinutes());
            var seconds = zero_first_format(current_datetime.getSeconds());
    
            return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
        }
        setInterval(function () {
        document.getElementById('current').innerHTML = date_time();
        }, 1000);
    
        /* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
        // document.getElementById('current').innerHTML = date_time();
    // </script>
    

