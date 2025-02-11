
    function openMenu(e) {
        var menuList = document.querySelector(".nav .list");
        if (e.innerHTML == "Menu") {
            e.innerHTML = "Close";
            menuList.style.display = "block";
        } else {
            e.innerHTML = "Menu";
            menuList.style.display = "none";
        }
    }
    

   function tikakamize()
   {
    if(localStorage.clickcout)
    {
      localStorage.clickcout=parseInt(localStorage.clickcout)+1;
    }
    else
    {
        localStorage.clickcout=1;
    }
    var tikakamize=document.getElementById("tikakamize");
    tikakamize.value=localStorage.clickcout;
     }

     function khomfi()
   {
    if(localStorage.clickcout)
    {
      localStorage.clickcout=parseInt(localStorage.clickcout)+1;
    }
    else
    {
        localStorage.clickcout=1;
    }
    var khomfi=document.getElementById("khomfi");
    khomfi.value=localStorage.clickcout;
     }



     function open(log) {
        var menuList = document.querySelector("login-form");
        if (e.innerHTML == "Menu") {
            e.innerHTML = "Close";
            menuList.style.display = "block";
        } else {
            e.innerHTML = "Menu";
            menuList.style.display = "none";
        }
    }