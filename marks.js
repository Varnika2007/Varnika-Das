function vote(){
    var name =document.getElementById("name").value;
    var pass=100*Math.random();
    var result=document.getElementById("result");
    result.innerText=name+",you havr scored:"
    +pass.to fixed (2)+"%";//display name and score with 2

}