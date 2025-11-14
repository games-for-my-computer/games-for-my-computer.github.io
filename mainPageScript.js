// styleLinks()


// function styleLinks(){
//     var mainLogo=document.getElementById("mainLogo");
//     var logoRect=mainLogo.getBoundingClientRect();
//     var logoY=logoRect.top+(logoRect.bottom-logoRect.top);
//     var logoX=logoRect.left+(logoRect.right-logoRect.left);

//     console.log("rect:")
//     console.log(logoX)
//     console.log(logoY)

//     var links=document.getElementById("homePageLinks").getElementsByTagName("a");
//     var rotationAmount=7
//     for(var i=0;i<links.length;i++){
//         var angle=(links.length*rotationAmount/2-i*rotationAmount);
//         var rect=links[i].getBoundingClientRect();
//         var x=logoX-rect.left-(rect.right-rect.left)
//         var y=logoY-rect.top-(rect.bottom-rect.top)
//         angle=Math.atan2(y,x)*180/Math.PI;
//         links[i].style.transform="rotate("+angle+"deg)";
//         links[i].style.marginRight=(10*i)+"px";
//     }
// }

// console.log("hii");

// document.addEventListener("click", function (e) {
//   console.log(e.clientX)
//   console.log(e.clientY)
//   var logoX=e.clientX
//   var logoY=e.clientY
//   var links=document.getElementById("homePageLinks").getElementsByTagName("a");
//     var rotationAmount=7
//   for(var i=0;i<links.length;i++){
//         var angle=(links.length*rotationAmount/2-i*rotationAmount);
//         var rect=links[i].getBoundingClientRect();
//         var x=logoX-rect.left-(rect.right-rect.left)
//         var y=logoY-rect.top-(rect.bottom-rect.top)
//         angle=Math.atan2(y,x)*180/Math.PI;
//         links[i].style.transform="rotate("+angle+"deg)";
//     }
// })