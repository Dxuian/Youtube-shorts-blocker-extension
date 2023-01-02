
// alert(window.innerHeight);
document.getElementById("actualtoggle").click();
var keep = 0
document.getElementById("actualtoggle").addEventListener("click", check);
function check() {
    if (keep == 0) 
    {
        var idtest = document.getElementById("dismissible");
        if (idtest) 
        {
            document.getElementById("dismissible").innerHTML = "";
            var x = document.getElementById("switcher").className;
            document.getElementById("switcher").className = document.getElementById("switcheron").className;
            document.getElementById("switcheron").className = x;
            return;
        }
        var classtest = document.getElementsByClassName("style-scope ytd-rich-shelf-renderer");
        if (classtest.length > 0) 
        {
            document.getElementsByClassName("style-scope ytd-rich-shelf-renderer")[0].innerHTML = "";
            var x = document.getElementById("switcher").className;
            document.getElementById("switcher").className = document.getElementById("switcheron").className;
            document.getElementById("switcheron").className = x;
            return;
        }
        var custom = document.getElementsByTagName("ytd-rich-shelf-renderer")
        if (custom.length > 0) 
        {
            document.getElementsByTagName("ytd-rich-shelf-renderer")[0].innerHTML = "";
            var x = document.getElementById("switcher").className;
            document.getElementById("switcher").className = document.getElementById("switcheron").className;
            document.getElementById("switcheron").className = x;
            return;
        }
    }
    else
    {
        
    }
}   