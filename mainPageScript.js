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
        angle=Math.round(Math.atan2(y,x)*180/Math.PI)+(Math.random()*10-5);
        // links[i].getElementsByTagName("a")[0].style.transform="rotate("+angle+"deg)";
        //var n=Math.round((links.length-Math.abs(links.length/2-i))/2)*2
        var n=Math.abs(Math.cos(angle*Math.PI/180))+Math.random()*0.01
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

wobbleInterval=0

document.getElementById("mainLogo").onmouseover= function (e) {
  document.getElementById("mainLogo").style.transform="rotate(5deg)"
  wobbleInterval=setInterval(wobble, 1600,document.getElementById("mainLogo"));
}

document.getElementById("mainLogo").onmouseout= function (e) {
  document.getElementById("mainLogo").style.transform="rotate(0deg)"
  clearInterval(wobbleInterval);
}


const links=document.getElementById("homePageLinks").getElementsByTagName("div")

for(var i=0;i<links.length;i++){
  document.getElementById("homePageLinks").getElementsByTagName("div")[i].addEventListener("mouseover", function (e) {
    styleLinks()
  })
}

function wobble(element, direction){
  styleLinks();
  var angle=getCurrentRotation(element)%360
  if(angle>180){
    angle=angle-360
  }
  console.log(angle);
  element.style.transform="rotate("+(-angle)+"deg)"
}




// from https://stackoverflow.com/a/54492696

function getCurrentRotation(el){
  var st = window.getComputedStyle(el, null);
  var tm = st.getPropertyValue("-webkit-transform") ||
           st.getPropertyValue("-moz-transform") ||
           st.getPropertyValue("-ms-transform") ||
           st.getPropertyValue("-o-transform") ||
           st.getPropertyValue("transform") ||
           "none";
  if (tm != "none") {
    var values = tm.split('(')[1].split(')')[0].split(',');
    /*
    a = values[0];
    b = values[1];
    angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
    */
    //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
    var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
    return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
  }
  return 0;
}