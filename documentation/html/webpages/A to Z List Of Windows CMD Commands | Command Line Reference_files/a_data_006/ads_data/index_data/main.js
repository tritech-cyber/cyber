function init(a){initAnim(),setTimeout(function(){playAnim(),console.log("Total time: "+anim.timeline/1e3+"s"),document.getElementById("banner-holder").style.left="0px"},100)}function initAnim(){anim=new Bannermator,anim.set(txt_where,{x:-txt_where.offsetWidth,y:txt_where.offsetWidth}).set(txt1,{x:-txt1.offsetWidth,y:txt1.offsetWidth}).set(txt2,{x:-txt2.offsetWidth,y:txt2.offsetWidth,scaleX:.25}).set(txt3,{x:-txt3.offsetWidth,y:txt3.offsetWidth}).set(txt4,{x:-txt4.offsetWidth,y:txt4.offsetWidth}).set(txt_happens,{x:-txt_happens.offsetWidth,y:txt_happens.offsetWidth}).set(cta,{opacity:0})}function playAnim(){anim.to(txt_where,.75,{x:0,y:0,ease:"Quad.easeIn"}).to(txt1,.75,{x:0,y:0,ease:"Quad.easeIn",delay:-.5}).to(txt_happens,.75,{x:0,y:0,ease:"Quad.easeIn",delay:-.5}).to(cta,.75,{opacity:1}).to(txt1,.5,{x:-txt1.offsetWidth,y:txt1.offsetWidth,scaleX:.25,delay:1}).to(txt2,.75,{x:0,y:0,scaleX:1,ease:"Quad.easeIn",delay:-.4}).to(txt2,.5,{x:-txt2.offsetWidth,y:txt2.offsetWidth,scaleX:.25,delay:2}).to(txt3,.75,{x:0,y:0,ease:"Quad.easeIn",delay:-.4}).to(txt3,.5,{x:-txt3.offsetWidth,y:txt3.offsetWidth,delay:2}).to(txt4,.75,{x:0,y:0,ease:"Quad.easeIn",delay:-.4}).to(cta,.25,{scale:1.1,ease:"Quad.easeInOut",delay:.5}).to(cta,.5,{scale:1,ease:"Quad.easeOut"}).endAnim()}var anim,txt_where=document.getElementById("txt-where"),txt1=document.getElementById("txt1"),txt2=document.getElementById("txt2"),txt3=document.getElementById("txt3"),txt4=document.getElementById("txt4"),txt_happens=document.getElementById("txt-happens"),cta=document.getElementById("cta");window.addEventListener("load",init,!1);