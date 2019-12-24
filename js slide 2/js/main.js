var next=document.querySelector(".btnNext")
var pos=0;
next.onclick=function(){
    pos++;
    var prowidth=document.querySelector(".project").clientWidth
    var lft=-(prowidth*pos)+"px"
    document.querySelector(".mainSlide").style.left=lft
    
}