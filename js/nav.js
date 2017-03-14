!function nav(){
	var url=window.location.pathname;
	var i1=url.lastIndexOf('/');
	var i2=url.lastIndexOf('.');
	var n=url.slice(i1,i2).replace('/','');
	var pre=null;
	var next=null;
	var cur=parseInt(n);
   if(cur>1){
	pre=cur-1;
	pre = ''+pre + '.html';
	next=cur+1;	
	next =''+ next +'.html';
	}
	else if(cur==1){
	pre='index';
	next=cur+1;	
	next ='' +next +'.html';
	}	
	else
	{
	pre='#';
	next=1;
	next =''+next + '.html';
	}
	var nav="<div class='head'>	<div  class='head-i'><a href='index.html'>首 页</a>&nbsp;|&nbsp;<a href='"+ pre +"'>上 页</a>&nbsp;|&nbsp;<a href='"+ next +"'>下 页</a></div><div id='head-c' class='head-c'><a href='#'>≡</a></div>	</div><div id='head-c-p' class='head-c-p'></div>";	
	document.write(nav);
	}();
$(function(){
  $("#head-c").click(function(){
  $("#head-c-p").slideToggle();
  });
});