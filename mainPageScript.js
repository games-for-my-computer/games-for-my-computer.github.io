styleLinks()

var centerX=0.75
var centerY=0.5


function styleLinks(){
    var mainLogo=document.getElementById("mainLogo");
    var logoRect=mainLogo.getBoundingClientRect();
    var logoY=logoRect.top+(logoRect.bottom-logoRect.top);
    var logoX=logoRect.left+(logoRect.right-logoRect.left);

    var links=document.getElementById("homePageLinks").getElementsByTagName("div")
    var rotationAmount=7
    for(var i=0;i<links.length;i++){
        var angle=(links.length*rotationAmount/2-i*rotationAmount);
        var rect=links[i].getBoundingClientRect();
        var x=logoX-rect.left-(rect.right-rect.left)/2
        var y=window.innerHeight*centerY-rect.top-(rect.bottom-rect.top)/2
        angle=Math.round(Math.atan2(y,x)*180/Math.PI);
        // links[i].getElementsByTagName("a")[0].style.transform="rotate("+angle+"deg)";
        console.log(angle)
        //var n=Math.round((links.length-Math.abs(links.length/2-i))/2)*2
        var n=Math.abs(Math.cos(angle*Math.PI/180))
        links[i].getElementsByTagName("a")[0].style.transform="translate("+(-n*20+18)+"em"+",0)"+" rotate("+angle+"deg)";
        links[i].getElementsByTagName("a")[0].style.position="relative";
    }
}

document.addEventListener("mouseover", function (e) {
  styleLinks()
})
document.addEventListener("mouseout", function (e) {
  styleLinks()
})

document.getElementById("centerPiece").addEventListener("click",function(e){
    styleLinks();
})