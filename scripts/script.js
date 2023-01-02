
// alert(window.innerHeight);
document.getElementById("actualtoggle").click();
// alert(window.innerWidth);
var keep = 0
document.getElementById("actualtoggle").addEventListener("click",check);
function check() {
    var idtest = document.getElementById("dismissible");
    if (idtest) {
        document.getElementById("dismissible").innerHTML = "" ; 
        document.getElementById("switcher").className="toggleoffnow" ;  
        document.getElementById("switcher").setTimeout(() => {
            document.getElementById("switcher").className="toggledisplay" ; 
        }, 1000); 
        keep = 1;
        return ; 
    }
    var classtest = document.getElementsByClassName("style-scope ytd-rich-shelf-renderer");
    if(classtest.length>0)
    {
        document.getElementsByClassName("style-scope ytd-rich-shelf-renderer")[0].innerHTML = "";
        document.getElementById("switcher").className="toggleoffnow" ;  
        document.getElementById("switcher").setTimeout(() => {
            document.getElementById("switcher").className="toggledisplay" ; 
        }, 1000); 
        keep = 1;
        return ; 
    }
    var custom = document.getElementsByTagName("ytd-rich-shelf-renderer")
    if (custom.length>0) {
        document.getElementsByTagName("ytd-rich-shelf-renderer")[0].innerHTML="" ; 
        document.getElementById("switcher").className="toggleoffnow" ;  
        document.getElementById("switcher").setTimeout(() => {
            document.getElementById("switcher").className="toggledisplay" ; 
        }, 1000); 
        keep = 1;
        return ; 
    }
    console.log("wohsitehaihini");
}

