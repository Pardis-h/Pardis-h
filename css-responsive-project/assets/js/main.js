function myNav(){
    var x = document.getElementById("mynav");
    if(x.className === "nav-section"){
        x.className += " responsive";
    }
    else{
        x.className = "nav-section";
    }
}