var fgImage = null;
var bgImage = null;
var fgCanvas;
var bgCanvas;

function loadForegroundImage() {
  var file = document.getElementById("fgfile");
  fgImage = new SimpleImage(file);
  fgCanvas = document.getElementById("fgcan");
  fgImage.drawTo(fgCanvas);

}
function loadBackgroundImage() {
  var file = document.getElementById("bgfile");
  bgImage = new SimpleImage(file);
  bgCanvas = document.getElementById("bgcan");
  bgImage.drawTo(bgCanvas);
}

function myf(){
var x;
x=document.getElementById("fgcan").className="c1";
document.getElementById("bgcan").className="c1";
}
function myf2(){
document.getElementById("fgcan").className="c2";
document.getElementById("bgcan").className="c2";
}
function myf0(){
  document.getElementById("fgcan").className="c0";
  document.getElementById("bgcan").className="c0";
}
function myf4(){
  document.getElementById("fgcan").className="c4";
  document.getElementById("bgcan").className="c4";
}function myf5(){
  document.getElementById("fgcan").className="c5";
  document.getElementById("bgcan").className="c5";
}function myf6(){
  document.getElementById("fgcan").className="c6";
  document.getElementById("bgcan").className="c6";
}function myf7(){
  document.getElementById("fgcan").className="c7";
  document.getElementById("bgcan").className="c7";
}function myf8(){
  document.getElementById("fgcan").className="c8";
  document.getElementById("bgcan").className="c8";
}
function myf9(){
  var file = document.getElementById("fgfile");
  fgImage = new SimpleImage(file);
  
  for (var pixel of fgImage.values()){
    if (pixel.getY()<=(fgImage.getHeight())/7){
        pixel.setRed(255);
    }
    else if(pixel.getY()<2*(fgImage.getHeight())/7){
        pixel.setGreen(255);
    }
    else if(pixel.getY()<3*(fgImage.getHeight())/7){
        pixel.setGreen(255);
    }
    else if(pixel.getY()<4*(fgImage.getHeight())/7){
        pixel.setGreen(255);
    }
    else if(pixel.getY()<5*(fgImage.getHeight())/7){
        pixel.setGreen(255);
    }
    else if(pixel.getY()<6*(fgImage.getHeight())/7){
        pixel.setGreen(255);
    }
    else{
        pixel.setBlue(255);
    }
}
fgCanvas = document.getElementById("fgcan");
fgImage.drawTo(fgCanvas);

}