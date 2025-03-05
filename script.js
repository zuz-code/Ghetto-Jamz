
    function openMenu(e) {
        var menuList = document.querySelector(".nav .list");
        if (e.innerHTML == "Menu") {
            e.innerHTML = "Close";
            menuList.style.display = "block";
        } else {
            e.innerHTML = "Menu";
            menuList.style.display = "none";
        }
    };

const button =
document.getElementById('download-btn');
const clickCountElement =
document.getElementById('tikakamize-clickcount');
let clickCount = 0;

button.addEventListener('click', (clickCount) =>
{
    clickCount++;
    clickCountElement.textContent = 'Clicks: ${clickCount}';
});



const search = ()=>{
    const searchbox = document.getElementById("searchitem").value.toUpperCase();
    const storeitems = document.getElementById("music-cont")
    const product = querySelectorAll("a")
    const pname = storeitems.getElementsByTagName("#musicitem")
    
    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('a')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}

     

function tikakamizeClickCount(){
    if(localStorage.clickCount)
    {
        localStorage.clickCount=parseFloat(localStorage.clickCount)+1;
    }
    else
    {
        localStorage.clickCount=1;
    }
    var a=document.getElementById("tikakamize-clickcount");
    a.value=localStorage.clickCount;

}





function khomfiClickCount(){
    if(localStorage.clickCount)
    {
        localStorage.clickCount=parseInt(localStorage.clickCount)+1;
    }
    else
    {
        localStorage.clickCount=1;
    }
    var a=document.getElementById("khomfi-clickcount");
    a.value=localStorage.clickCount;

}




function chumaClickCount(){
    if(localStorage.clickCount)
    {
        localStorage.clickCount=parseInt(localStorage.clickCount)+1;
    }
    else
    {
        localStorage.clickCount=1;
    }
    var a=document.getElementById("chuma-clickcount");
    a.value=localStorage.clickCount;

}
