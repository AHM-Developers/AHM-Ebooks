function changeheader()
{
    var desktophdr = document.querySelector(".desktop-nav");
    desktophdr.style.display="none";

}
function checkscrn()
{
    var desktophdr = document.querySelector(".desktop-nav");
var mobilehdr = document.querySelector(".mobile-nav");
var screenwidth = window.innerWidth;

if(screenwidth >= 1024)
{
    desktophdr.style.display = "block";
}
else
{
    mobilehdr.style.display = "block";
}
}

window.onload = checkscrn();