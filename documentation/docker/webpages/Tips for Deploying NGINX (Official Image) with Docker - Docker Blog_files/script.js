function docker_mypopup(mylink, windowname) { 
    if (! window.focus)return true;
    var href;
    if (typeof(mylink) == 'string') href=mylink;
    else href=mylink.href; 
    window.open(href, windowname, 'width=600,height=400,scrollbars=yes'); 
    return false; 
}

(function ($) {
    $(document).on('click', 'li.share-reddit .share-reddit, .share-custom-hackernews .share-custom-hackernews', function(e){
			e.preventDefault();
				docker_mypopup($(this).attr('href'), '');
    });
	

$(".main_footer .footer_links li.first").append( "<span> </span>" );	
$('.main_footer .footer_links li.first.showmobileonly').on('click', 'a', function(e) {
	e.preventDefault();
	$(this).siblings("span").toggleClass('active');
	var sibling = $(this).parent('li').siblings("li"); 
	var colsibling = $(this).parent('li').parent('.footer_links').parent('.col-xs-12').siblings(".col-xs-12"); 
	$(sibling).stop().slideToggle('slow');
	$('ul>li:not(li.first)', colsibling).slideUp();
	$('ul>li>span', colsibling).removeClass('active');
});
$('.main_footer .footer_links li.first').on('click', 'span', function() { 
$(this).toggleClass('active');
var sibling = $(this).parent('li').siblings("li"); 
var colsibling = $(this).parent('li').parent('.footer_links').parent('.col-xs-12').siblings(".col-xs-12"); 
console.log(colsibling.length);
$(sibling).stop().slideToggle('slow');
$('ul>li:not(li.first)', colsibling).slideUp();
$('ul>li>span', colsibling).removeClass('active');

 });



})(jQuery);