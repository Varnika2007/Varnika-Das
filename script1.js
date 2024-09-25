function vote(){
    var name = document.getElementById("name");
    //press enter
    var age = document.getElementById("age")
    //press enter
    if(age>18){
        alert(name+"You are eligible");
    }else{
        alert(name+"Yor are still a child");
    }
}