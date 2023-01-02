
// alert(window.innerHeight);
document.getElementById("actualtoggle").click();
var keep = 0,state=0,buf; 
document.getElementById("actualtoggle").addEventListener("click", check);

function check() 
{
    if (keep == 0) 
    {
        var idtest = document.getElementById("dismissible");
        if (idtest) 
        {
            buf = document.getElementById("dismissible").innerHTML ; 
            document.getElementById("dismissible").innerHTML = "" ; 
            var x = document.getElementById("switcher").className;
            document.getElementById("switcher").className = document.getElementById("switcheron").className;
            document.getElementById("switcheron").className = x;
            k =1 ; 
            state=1;
            return;
        }
        var classtest = document.getElementsByClassName("style-scope ytd-rich-shelf-renderer");
        if (classtest.length > 0) 
        {
            buf  = document.getElementsByClassName("style-scope ytd-rich-shelf-renderer")[0].innerHTML
            document.getElementsByClassName("style-scope ytd-rich-shelf-renderer")[0].innerHTML = "";
            var x = document.getElementById("switcher").className;
            document.getElementById("switcher").className = document.getElementById("switcheron").className;
            document.getElementById("switcheron").className = x;
            k=1 ; 
            state=2;
            return;
        }
        var custom = document.getElementsByTagName("ytd-rich-shelf-renderer")
        if (custom.length > 0) 
        {
            buf  = document.getElementsByTagName("ytd-rich-shelf-renderer")[0].innerHTML;
            document.getElementsByTagName("ytd-rich-shelf-renderer")[0].innerHTML = "";
            var x = document.getElementById("switcher").className;
            document.getElementById("switcher").className = document.getElementById("switcheron").className;
            document.getElementById("switcheron").className = x;
            k=1 ;
            state=3; 
            return;
        }
        else{
            // document.getElementById("actualtoggle").click();
            // return;
            document.getElementById("actualtoggle").removeEventListener("click",check);
            setTimeout(() => {document.getElementById("actualtoggle").click();
            document.getElementById("actualtoggle").addEventListener("click", check);
            document.getElementById("switcher").innerHTML="<h1>Shorts on</h1>" ;             
        } , 450) ; 
           
            document.getElementById("switcher").innerHTML="<h1>Error , try reloading</h1>"            
            
            return ; 
        }
    }
    else
    {
        switch (state) {
            case 1:
                document.getElementsByTagName("ytd-rich-shelf-renderer")[0].innerHTML = buf ;  
                break;
            case 2:
                document.getElementsByClassName("style-scope ytd-rich-shelf-renderer")[0].innerHTML  = buf ;
                break ; 
            case 3:
                document.getElementById("dismissible").innerHTML = buf ;      
                break ; 
            default:
                break;
        }
       

        
    }
}   