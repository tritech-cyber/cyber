jQuery(document).ready(function($){$('.widget_sendy_widget').find('input').each(function(){$(this).prop('placeholder',$(this).prop('name').substr(0,1).toUpperCase()+$(this).prop('name').substr(1));});$('#menu-toggle').on('click',function(){if($(this).hasClass('toggled-on')){$('body').addClass('fixedPosition');$(this).text('Close');}else{$('body').removeClass('fixedPosition');$(this).text('Menu');}});$('#search-form-show').on('click',function(event){event.stopPropagation();event.preventDefault();$('.search-form').addClass('mobile-search');});$('<button id="search-form-hide" class="search-form-hide">Close</button>').on('click',function(event){event.stopPropagation();event.preventDefault();$('.search-form').removeClass('mobile-search');}).appendTo('.search-form');});