!function(t,e,n,s){t.colorpickle=function(n,s){var i,a,l,r,o,c,d,u,g,h={clickToggle:!1,closeOnOk:!1,closeOnCancel:!1,draggable:!1,hex:null,hsl:null,hslSliders:!0,modal:!1,mode:"hex",onCancel:null,onChange:null,onInit:null,onOk:null,onTop:!1,rgb:[255,140,60],rgbSliders:!0,showCancel:!1,showHex:!0,showOk:!1,showSLGradient:!0,showSwatch:!0,textCancel:"Cancel",textOk:"Ok",theme:null,visible:!0,width:null},p="colorpickle"+(t("div.colorpickle").length+1),v=!1,b="#"+p+" .rWrapper",f="#"+p+" .gWrapper",k="#"+p+" .bWrapper",m="#"+p+" .hWrapper",w="#"+p+" .sWrapper",x="#"+p+" .lWrapper",y="#"+p+" .r",I="#"+p+" .g",W="#"+p+" .b",M="#"+p+" .h",C="#"+p+" .s",O="#"+p+" .l",B="#"+p+" .rWrapper .sliderBg",S="#"+p+" .gWrapper .sliderBg",H="#"+p+" .bWrapper .sliderBg",T="#"+p+" .sWrapper .sliderBg",P="#"+p+" .lWrapper .sliderBg",V="#"+p+" .rInput",z="#"+p+" .gInput",A="#"+p+" .bInput",L="#"+p+" .hInput",G="#"+p+" .sInput",X="#"+p+" .lInput",Y="#"+p+" .colorPickerWrapper",j="#"+p+" .colorPickerBg",F="#"+p+" .colorPickerIndicator",N="#"+p+"Icon",D="#"+p+" .swatch",Q=this;Q.settings={};var R=t(n),U=n;Q.init=function(){if(Q.settings=t.extend({},h,s),Q.rgb=null,Q.hsl=null,Q.hex=null,R.is("div")?t(U).append('<div id="'+p+'" class="colorpickle"></div>'):(1==Q.settings.modal?t("body").append('<div id="'+p+'" class="colorpickle"></div>'):t('<div id="'+p+'" class="colorpickle"></div>').insertAfter(R),t('<button type="button" id="'+p+'Icon" class="colorPickerIcon">&nbsp;</button>').insertAfter(R)),null!=Q.settings.theme&&t("#"+p).addClass("colorpickle-theme-"+Q.settings.theme),R.is("input")&&t(U).keypress((function(){return!1})),1==Q.settings.onTop&&t("#"+p).addClass("colorpickleOnTop"),null!=Q.settings.width&&t("#"+p).css("width",Q.settings.width),1==Q.settings.draggable&&(t("#"+p).append('<div class="dragHandle"></div>'),t("#"+p+" .dragHandle").mousedown((function(e){var n=t(this).parent().offset(),s=e.pageX-n.left,i=e.pageY-n.top;t("body").mousemove((function(e){t("#"+p).offset({top:e.pageY-i,left:e.pageX-s})})),t("body").css("cursor","move")})),t("body").mouseup((function(){t("body").off("mousemove"),t("body").css("cursor","default")}))),null!=Q.settings.hex){r=Q.settings.hex;var n=Z(Q.settings.hex);Q.settings.rgb[0]=n.r,Q.settings.rgb[1]=n.g,Q.settings.rgb[2]=n.b}$("r",0,255,Q.settings.rgb[0]),$("g",0,255,Q.settings.rgb[1]),$("b",0,255,Q.settings.rgb[2]),$("h",0,360,50),$("s",0,100,50),$("l",0,100,50),null!=Q.settings.hsl&&(t(M).val(Q.settings.hsl[0]),t(C).val(Q.settings.hsl[1]),t(O).val(Q.settings.hsl[2]),E()),t("#"+p).append('<div class="colorPickerWrapper"></div>'),t(Y).append('<div class="colorPickerBg"></div>'),t(Y).append('<div class="colorPicker"><div class="gradientTp2White"></div><div class="gradientTp2Black"></div></div>'),t(Y).append('<div class="colorPickerIndicator"></div>'),t("#"+p).append('<div class="clear"></div>'),t("#"+p).append('<div class="swatchHex"></div>'),t("#"+p+" .swatchHex").append('<div class="swatch"></div>'),t("#"+p+" .swatchHex").append('<input type="text" class="hexValue" name="hexValue" maxlength="7" />'),t("#"+p).append('<div class="buttonsWrapper"></div>'),Q.settings.showCancel&&t("#"+p+" .buttonsWrapper").append('<button type="button" class="cancelBtn">'+Q.settings.textCancel+"</button>"),Q.settings.showOk&&t("#"+p+" .buttonsWrapper").append('<button type="button" class="okBtn">'+Q.settings.textOk+"</button>"),t("#"+p).append('<div class="clear"></div>'),t(y+", "+I+", "+W).bind("touchstart mousedown",(function(){t(this).bind("touchmove mousemove",(function(){q()}))})),t(M+", "+C+", "+O).bind("touchstart mousedown",(function(){t(this).bind("touchmove mousemove",(function(){E()}))})),t(y+", "+I+", "+W).bind("touchend mouseup mouseout",(function(){t(this).unbind("touchmove mousemove")})),t(M+", "+C+", "+O).bind("touchend mouseup mouseout",(function(){t(this).unbind("touchmove mousemove")})),t(".colorValue").keyup((function(){var e=t(this).attr("data-sliderId");return isNaN(this.value)?(this.value=t("#"+p+" ."+e).val(),!1):(t("#"+p+" ."+e).val(this.value),"r"==e||"g"==e||"b"==e?q():"h"!=e&&"s"!=e&&"l"!=e||E(),!0)})),t("#"+p+" .hexValue").keyup((function(){if("#"!=this.value.charAt(0)&&(this.value="#"+this.value),7==this.value.length)if(Z(this.value)){r=this.value;var t=Z(this.value);i=t.r,a=t.g,l=t.b,nt(),q()}else this.value=r})),t(Y).mousedown((function(t){v=!0,it(t,this)})),t(Y).mousemove((function(t){1==v&&it(t,this)})),t(Y).bind("mouseup mouseleave",(function(t){v=!1})),t("#"+p+" .okBtn").click((function(){"rgb"==Q.settings.mode?R.val("rgb("+i+", "+a+", "+l+")"):"hex"==Q.settings.mode?R.val("#"+r):"hsl"==Q.settings.mode&&R.val("hsl("+c+", "+d+"%, "+u+"%)"),null!=Q.settings.onOk&&Q.settings.onOk(),1==Q.settings.closeOnOk&&lt(),t(N).css("background-color","#"+r)})),t("#"+p+" .cancelBtn").click((function(){null!=Q.settings.onCancel&&Q.settings.onCancel(),1==Q.settings.closeOnCancel&&lt()})),t(e).scroll((function(){1==Q.settings.modal&&0==Q.settings.draggable&&rt()})),t(e).resize((function(){q(),1==Q.settings.modal&&0==Q.settings.draggable&&rt()})),1==Q.settings.clickToggle&&(R.click((function(){lt()})),t(N).click((function(){lt()}))),1==Q.settings.modal&&(rt(),t("body").append('<div id="'+p+'overlay" class="colorpickleModalOverlay"></div>')),0==Q.settings.showSwatch&&t(D).hide(),Q.settings.showSLGradient||t(Y).hide(),0==Q.settings.rgbSliders&&(t(b).hide(),t(f).hide(),t(k).hide()),0==Q.settings.hslSliders&&(t(m).hide(),t(w).hide(),t(x).hide()),0==Q.settings.showHex&&t("#"+p+" .hexValue").hide(),(Q.settings.showCancel||Q.settings.showOk)&&t("#"+p).css("min-height",t("#"+p).height()+t("#"+p+" .buttonsWrapper").height()-parseInt(t("#"+p).css("padding-bottom"))+"px"),q(),t(N).css("background-color","#"+r),0==Q.settings.visible&&t("#"+p).hide(),t.isFunction(Q.settings.onInit)&&Q.settings.onInit()},Q.setRGB=function(e,n,s){t(y).val(e),t(I).val(n),t(W).val(s),q()},Q.setHSL=function(e,n,s){t(M).val(e),t(C).val(n),t(O).val(s),E()},Q.setHex=function(e){var n=Z(e);t(y).val(n.r),t(I).val(n.g),t(W).val(n.b),q()};var $=function(e,n,s,i){var a=e+"Wrapper",l="";"h"==e?l=" &deg;":"s"!=e&&"l"!=e||(l=" %"),t("#"+p).append('<div class="sliderWrapper '+a+'"></div>'),t("#"+p+" ."+a).append("<label>"+e.toUpperCase()+" "+l+"</label>"),t("#"+p+" ."+a).append('<div class="sliderBg"></div>'),t("#"+p+" ."+a).append('<div class="sliderDiv"><input type="range" class="slider '+e+'" min="'+n+'" max="'+s+'" step="1" value="'+i+'" /></div>'),t("#"+p+" ."+a).append('<input type="text" data-sliderId="'+e+'" class="'+e+'Input sliderValue colorValue" value="0" />')},q=function(){i=parseInt(t(y).val()),a=parseInt(t(I).val()),l=parseInt(t(W).val()),o=tt(i,a,l),c=Math.round(360*o[0]),d=Math.round(100*o[1]),u=Math.round(100*o[2]),J(),nt(),et(),st(),at()},E=function(){c=parseInt(t(M).val()),d=parseInt(t(C).val()),u=parseInt(t(O).val());var e=_(c/360,d/100,u/100);i=Math.round(e[0]),a=Math.round(e[1]),l=Math.round(e[2]),J(),nt(),et(),st(),at()},J=function(){r=K(i,a,l),t(D).css("background-color","#"+r);var e=_(c/360,1,.5),n=Math.round(e[0]),s=Math.round(e[1]),o=Math.round(e[2]),g=K(n,s,o);t(j).css("background-color","#"+g),null!=Q.settings.onChange&&null!=Q.rgb&&Q.hex!="#"+r&&Q.settings.onChange(),Q.rgb="rgb("+i+","+a+","+l+")",Q.hsl="hsl("+c+","+d+","+u+")",Q.hex="#"+r},K=function(e,n,s){var i=[e.toString(16),n.toString(16),s.toString(16)];return t.each(i,(function(t,e){1===e.length&&(i[t]="0"+e)})),i.join("")},Z=function(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return!!e&&{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}},_=function(t,e,n){var s,i,a;if(0==e)s=i=a=n;else{function l(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}var r=n<.5?n*(1+e):n+e-n*e,o=2*n-r;s=l(o,r,t+1/3),i=l(o,r,t),a=l(o,r,t-1/3)}return[255*s,255*i,255*a]},tt=function(t,e,n){t/=255,e/=255,n/=255;var s,i,a=Math.max(t,e,n),l=Math.min(t,e,n),r=(a+l)/2;if(a==l)s=i=0;else{var o=a-l;switch(i=r>.5?o/(2-a-l):o/(a+l),a){case t:s=(e-n)/o+(e<n?6:0);break;case e:s=(n-t)/o+2;break;case n:s=(t-e)/o+4}s/=6}return[s,i,r]},et=function(){t(V).val(i),t(z).val(a),t(A).val(l),t(L).val(c),t(G).val(d),t(X).val(u),t("#"+p+" .hexValue").val("#"+r)},nt=function(){t(y).val(i),t(I).val(a),t(W).val(l),t(M).val(c),t(C).val(d),t(O).val(u)},st=function(){var e="background: -moz-linear-gradient(left, rgb(0,"+a+","+l+") 0%, rgb(255,"+a+","+l+") 100%);";e+="background: -webkit-linear-gradient(left, rgb(0,"+a+","+l+") 0%, rgb(255,"+a+","+l+") 100%);",e+="background: linear-gradient(to right, rgb(0,"+a+","+l+") 0%, rgb(255,"+a+","+l+") 100%);";var n="background: -moz-linear-gradient(left, rgb("+i+",0,"+l+") 0%, rgb("+i+",255,"+l+") 100%);";n+="background: -webkit-linear-gradient(left, rgb("+i+",0,"+l+") 0%, rgb("+i+",255,"+l+") 100%);",n+="background: linear-gradient(to right, rgb("+i+",0,"+l+") 0%, rgb("+i+",255,"+l+") 100%);";var s="background: -moz-linear-gradient(left, rgb("+i+","+a+",0) 0%, rgb("+i+","+a+",255) 100%);";s+="background: -webkit-linear-gradient(left, rgb("+i+","+a+",0) 0%, rgb("+i+","+a+",255) 100%);",s+="background: linear-gradient(to right, rgb("+i+","+a+",0) 0%, rgb("+i+","+a+",255) 100%);";var r="background: -moz-linear-gradient(left, #000 0%, hsl("+c+","+d+"%,50%) 50%, #fff 100%);";r+="background: -webkit-linear-gradient(left, #000 0%, hsl("+c+","+d+"%,50%) 50%, #fff 100%);",r+="background: linear-gradient(to right, #000 0%, hsl("+c+","+d+"%,50%) 50%, #fff 100%);";var o="background: -moz-linear-gradient(left, hsl("+c+",0%,"+u+"%) 0%, hsl("+c+",100%,"+u+"%) 100%);";o+="background: -webkit-linear-gradient(left, hsl("+c+",0%,"+u+"%) 0%, hsl("+c+",100%,"+u+"%) 100%);",o+="background: linear-gradient(to right, hsl("+c+",0%,"+u+"%) 0%, hsl("+c+",100%,"+u+"%) 100%);",t(B).attr("style",e),t(S).attr("style",n),t(H).attr("style",s),t(P).attr("style",r),t(T).attr("style",o)},it=function(e,n){var s=function(t){var e=curtop=0;if(t.offsetParent)do{e+=t.offsetLeft,curtop+=t.offsetTop}while(t=t.offsetParent);return[e,curtop]}(n),i=e.pageX-s[0],a=e.pageY-s[1];t(F).css("left",Math.ceil(i-t(F).outerWidth()/2)),t(F).css("top",Math.ceil(a-t(F).outerHeight()/2)),d=i/(t(Y).width()/100),g=100-a/(t(Y).height()/100);var l=function(t,e,n){return[t,e*n/((t=(2-e)*n)<1?t:2-t),t/2]}(c,d/100,g/100);d=Math.round(100*l[1]),u=Math.round(100*l[2]),t(C).val(d),t(O).val(u),E()},at=function(){var e=function(t,e,n){return[t,2*(e*=n<.5?n:1-n)/(n+e),n+e]}(c,d/100,u/100);d=Math.round(100*e[1]),g=Math.round(100*e[2]);var n=t(Y).width()/100,s=t(Y).height()/100,i=Math.ceil(d*n-t(F).outerWidth()/2),a=Math.ceil(t(Y).height()-g*s-t(F).outerHeight()/2);t(F).css("left",i),t(F).css("top",a)},lt=function(){1==Q.settings.modal&&(t("#"+p).is(":visible")||rt(),t("#"+p+"overlay").fadeToggle()),t("#"+p).fadeToggle()},rt=function(){var n=t(e).width()/2-t("#"+p).width()/2,s=t(e).height()/2-t("#"+p).height()/2+t(e).scrollTop();t("#"+p).css("position","absolute"),t("#"+p).css("top",s+"px"),t("#"+p).css("left",n+"px")};Q.init()},t.fn.colorpickle=function(e){var n=arguments;return this.each((function(){var s=t(this).data("colorpickle");if(null==s){var i=new t.colorpickle(this,e);t(this).data("colorpickle",i)}else t.isFunction(s[e])&&s[e].apply(s,Array.prototype.slice.call(n,1))}))}}(jQuery,window,document);