<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Style.css">
    <title>Document</title>
    <style>
button {
    margin:0 auto;
    display: flex;
    background: #c0c0c098;
    border: none;
    border-radius: 6px;
    padding: 10px 25px;
    min-width: 20px;
    text-align: center;
    font-size: 1.1em;
    cursor: none;
}
.aa{
    display:  flex;
    background-color: aqua;
}
.vv{
    display:  none;
}
.bb, .ff{
    display: none;  
}
.cc{
    display: flex;
    background-color: rebeccapurple;
}
.ee{
    display:  flex;
    background-color: rgb(69, 119, 41);
}</style>
</head>
<body>
    <div class="aa">
        <p>HEllo</p>
        <button type='submit' id="key" onclick="" >ddd</button>
    </div>  
    <div class="bb">
        <p>rrrrr</p>
        <button type='submit' id="key1" onclick="" >rrr</button>
    </div>   
    <div class="ff">
        <p>QQQQQQQQQQQ</p>
    </div>
    
    <!-- <header>

    </header>
    <main>

    </main>
    <footer>

    </footer>     -->
</body>
<script>
  window.onload = function(){
        if(sessionStorage.getItem("most1")!==null || sessionStorage.getItem("most2")!==null){
            let text = sessionStorage.getItem("most1");
            document.getElementsByClassName("bb")[0].classList.remove(text);
        }
        if(sessionStorage.getItem("most2")!==null){
            let text1 = sessionStorage.getItem("most2");
            document.getElementsByClassName("ff")[0].classList.add(text1);
        }
        if(sessionStorage.getItem("most2")!==null){
            let text3 = sessionStorage.getItem("most4");
            document.getElementsByClassName("aa")[0].classList.add(text3);
        }
    }
    document.getElementById("key").onclick = function() {
        if(document.getElementById('key').onclick) {
            document.getElementsByClassName("bb")[0].classList.add("cc");
            document.getElementsByClassName("aa")[0].classList.add("vv");
            sessionStorage.setItem('most4', "vv"); 
        }   
    }
    document.getElementById("key1").onclick = function() {
        if(document.getElementById('key1').onclick){
            document.getElementsByClassName("bb")[0].classList.remove("cc");
            sessionStorage.setItem('most1', "cc"); 
            document.getElementsByClassName("ff")[0].classList.add("ee");          
            sessionStorage.setItem('most2', "ee"); 
        }  
    }
</script>
</html>
