// JavaScript Document
$.fn.extend({     
   TurnPicture:function(options){
	var auto=null;
	var obj=$(this);
	count=$("a",obj).size();
	n=0;
	var settings={timer:5000,menu:"#play_text_middle"};
	options = options || {};
        $.extend(settings, options);
	var ulcontent="<ul>";
	for(i=1;i<=count;i++){ulcontent=ulcontent+"<li>"+i+"</li>";}
	ulcontent=ulcontent+"</ul>";
	$(settings.menu).html(ulcontent);
    	$("a:not(:first-child)",this).hide();
	$(settings.menu+" li").eq(0).css({"background":"#0A318A","color":"#FFF","font-weight":"bolder"});
$(settings.menu+" li").mouseover(function() {
	i = $(this).text()-1;
	n=i;
	if (n >= count) return;
	$("a",obj).filter(":visible").fadeOut(200,function(){$(this).parent().children().eq(n).fadeIn(300);});
	$(this).css({"background":"#0A318A","color":"#FFF","font-weight":"bolder"}).siblings().css({"background":"#FFF","color":"#0A318A","font-weight":"normal"});
	});
	auto = setInterval(showAuto, settings.timer);
	obj.hover(function(){clearInterval(auto)}, function(){auto = setInterval(showAuto, settings.timer);});
	function showAuto()
	{
		 n = n >= (count - 1) ? 0 : ++n;
		$(settings.menu+" li").eq(n).trigger('mouseover');
	}
}
});