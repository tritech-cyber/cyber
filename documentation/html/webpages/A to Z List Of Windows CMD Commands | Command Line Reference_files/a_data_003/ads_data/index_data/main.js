

var _loadedImages=0,

_imageArray=new Array(
      "bg1.jpg",
      "bg2.jpg",
      "card.png",
      "cta_out.png",
      "cta_out2.png",
      "cta_out3.png",
      "cta_over.png",
      "logo.png",
      "logo2.png",
      "txt1.png",
      "txt2.png",
      "txt3.png",
      "txt4.png",
      "txt5.png",
      "replay.png"
    ),
_btnExit = document.getElementById('btn-exit');
_replay = document.getElementById('replay');

this.addEventListener('DOMContentLoaded', preloadImages);
 
function preloadImages() {
    for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load', trackProgress);
        _tempImage.src = _imageArray[i];
    }
}

function trackProgress(){
    _loadedImages++;             
    if(_loadedImages == _imageArray.length) init();
}

function init(){ 
    var css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', 'style.css' );
    document.getElementsByTagName('head')[0].appendChild(css);

    initAnimations();
      actionsButton();
   

}
var _tt = new TimelineMax();
function initAnimations(){
    
    _tt.to(["#txt1","#card","#ctaOut","#logo"],.5,{opacity:1})
       .to("#mask1",.5,{clip:'rect(0, 417, 480, 413)'},"+=2.3")
       .to("#mask2",.5,{clip:'rect(460, 400, 500, 0)'},"+=2.3")
       .to("#mask3",.5,{clip:'rect(0, 0, 500, 0)'},"+=2.3")
       .to("#mask4",.5,{clip:'rect(0, 400, 19, 0)'},"+=2.3")
       .to("#replay",.25,{display:"block", opacity:1, ease:Power2.easeOut})
 
    
    ;
}

function actionsButton(){
    _btnExit.addEventListener('mouseover', function(){
    var _Mo = new TimelineMax(); 
        _Mo.to('#ctaOver',.2,{ opacity:1 })
    });


    _btnExit.addEventListener('mouseout', function(){ 
        var _Mo = new TimelineMax(); 
        _Mo.to('#ctaOver',.2,{ opacity:0 })
    });

    _replay.addEventListener('click', function(){ 

        _tt.restart();


    });
}




