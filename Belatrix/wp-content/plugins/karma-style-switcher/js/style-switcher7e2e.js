<!-- Javascript codes for karma Theme Demo Style Switcher (this will not be present in your purchased theme) -->

jQuery(document).ready(function() {
	
//on document ready, we make primary-blue color active first
jQuery(".images").find('a[name="primary-blue"]').find('img').addClass('active');


/***codes to open or close style switcher, by clicking on the arrow image.***/

//when clicking on <div class="toggle-button close"></div>
//we hide the style switcher container, hide the close button and show open button
	
	
	
	jQuery('#truethemes-styling-preview .close').click(function(e) {
		e.preventDefault();
		
		jQuery('#truethemes-styling-preview .close').animate({ right: "0px",}, 800 );
		jQuery('#truethemes-styling-preview .open').animate({ right: "0px",}, 800 );
		jQuery('#truethemes-styling-preview .close').hide("fade", 800);
		jQuery('#truethemes-styling-preview .open').show("fade", 800);
		jQuery('#container').hide("slide", { direction: "right" }, 800);
		
	});
	
	
//when clicking on <div class="toggle-button open"></div>
//we show the style switcher container, hide the open button and show close button
	jQuery('#truethemes-styling-preview .open').click(function(e) {
		e.preventDefault();
		
		
		jQuery('#truethemes-styling-preview .open').animate({ right: "280px",}, 800 );
		jQuery('#truethemes-styling-preview .close').animate({ right: "280px",}, 800 );
		jQuery('#truethemes-styling-preview .open').hide("fade", 800);
		jQuery('#truethemes-styling-preview .close').show("fade", 800);
		jQuery('#container').show("slide", { direction: "right" }, 800);
		
	});
	
		
		
	
	


//codes for selecting Wide or Boxed Layout

	jQuery("#for_load").val('Wide');
	//jQuery('#tt-boxed-layout').css("width","96%");
	
	
if (jQuery(window).width() >= 1201){
	
	jQuery('#truethemes-styling-preview select[name=layout]').change(function() {
		var current = jQuery(this).find('option:selected').val();
		
		//if Box layout is selected
		if(current == 'Boxed') {		
			
			//check if boxed div is present, if not it is the first time user selects it, we wrap body tag with boxed div.
			if(jQuery("#tt-boxed-layout").html() == null){
			//wrap body tag with boxed div, This is wrong, but it is the only way..
			var boxed = '<div id="tt-boxed-layout">';
			jQuery('#tt-wide-layout').attr('id','tt-boxed-layout');
			
			jQuery('#tt-boxed-layout').css("width","90%");
			jQuery('#tt-boxed-layout').css("max-width","1400px");
			jQuery('#tt-boxed-layout').css("margin","0 auto");
			jQuery('#tt-boxed-layout #wrapper').css("display","block");
			
				//check and remove any error text in background image selector
				if(jQuery('.no_select_box_error').html().length > 0){
		   			 jQuery('.no_select_box_error').empty();
		    	}
			
			//else if boxed div is present, we add css to it.
			}else{
			jQuery('#tt-boxed-layout').css("width","90%");
			jQuery('#tt-boxed-layout').css("max-width","1400px");
			jQuery('#tt-boxed-layout').css("margin","0 auto");
			jQuery('#tt-boxed-layout #wrapper').css("display","block");
			
				
			//check and remove any error text in background image selector
				if(jQuery('.no_select_box_error').html().length > 0){
		    		jQuery('.no_select_box_error').empty();
		    	}	
			}
			
		}//end current is boxed 

		
		if(current == 'Wide'){			
			//remove boxed div
			jQuery('#tt-boxed-layout').css("width","100%");
			jQuery('#tt-boxed-layout').css("max-width","none");
			jQuery('#tt-boxed-layout').css("margin","0");
		
		}
	});

}





if (jQuery(window).width() <= 1200){
	
	jQuery('#truethemes-styling-preview select[name=layout]').change(function() {
		var current = jQuery(this).find('option:selected').val();
		
		//if Box layout is selected
		if(current == 'Boxed') {		
			
			//check if boxed div is present, if not it is the first time user selects it, we wrap body tag with boxed div.
			if(jQuery("#tt-boxed-layout").html() == null){
			//wrap body tag with boxed div, This is wrong, but it is the only way..
			var boxed = '<div id="tt-boxed-layout">';
			jQuery('#tt-wide-layout').attr('id','tt-boxed-layout');
			
			jQuery('#tt-boxed-layout').css("width","96%");
			jQuery('#tt-boxed-layout').css("max-width","1400px");
			jQuery('#tt-boxed-layout').css("margin","0 auto");
			jQuery('#tt-boxed-layout #wrapper').css("display","block");
			
				//check and remove any error text in background image selector
				if(jQuery('.no_select_box_error').html().length > 0){
		   			 jQuery('.no_select_box_error').empty();
		    	}
			
			//else if boxed div is present, we add css to it.
			}else{
			jQuery('#tt-boxed-layout').css("width","96%");
			jQuery('#tt-boxed-layout').css("max-width","1400px");
			jQuery('#tt-boxed-layout').css("margin","0 auto");
			jQuery('#tt-boxed-layout #wrapper').css("display","block");
			
				
			//check and remove any error text in background image selector
				if(jQuery('.no_select_box_error').html().length > 0){
		    		jQuery('.no_select_box_error').empty();
		    	}	
			}
			
		}//end current is boxed 

		
		if(current == 'Wide'){			
			//remove boxed div
			jQuery('#tt-boxed-layout').css("width","100%");
			jQuery('#tt-boxed-layout').css("max-width","none");
			jQuery('#tt-boxed-layout').css("margin","0");
		
		}
	});

}




//primary color selector

	jQuery('.primary-color a').click(function(e) {
		e.preventDefault();

		jQuery(this).parent().find('img').removeClass('active');
		jQuery(this).find('img').addClass('active');

		var name = jQuery(this).data('name');
		var secondary = jQuery(this).data('custom');

		jQuery('#primary_color_scheme').attr('href', 'http://themes.truethemes.net/Karma-4.0/wp-content/themes/Karma/css/'+name+'.css');
		jQuery('#secondary_color_scheme').attr('href', 'http://themes.truethemes.net/Karma-4.0/wp-content/themes/Karma/css/'+secondary+'.css');
		//jQuery('#primary_color_scheme').attr('href', 'http://localhost-2.local/karma-demo/wp-content/themes/Karma/css/'+name+'.css');
		
		
	});
	
		
		

	
//header overlay image selector	
	
	jQuery('.header-overlays a').click(function(e) {
		e.preventDefault();

		jQuery(this).parent().find('img').removeClass('active');
		jQuery(this).find('img').addClass('active');

		var name = jQuery(this).data('name');
		var custom_bs = jQuery(this).data('custom');

		jQuery('.header-overlay').css({'background-image':'url(http://themes.truethemes.net/Karma-4.0/wp-content/themes/Karma/images/_global/'+name+'.png)','background-repeat': 'no-repeat', 'background-position': '50% 50%' , 'background-size': ''+custom_bs+''});
		
		//jQuery('.header-overlay').css({'background-image':'url(http://localhost-2.local/karma-demo/wp-content/themes/Karma/images/_global/'+name+'.png)','background-repeat': 'no-repeat', 'background-position': '50% 50%', 'background-size': ''+custom_bs+''});
		
		
		
		
	});
	
	
	//body background image selector	
	
	jQuery('.boxed-backgrounds a').click(function(e) {
		e.preventDefault();

		jQuery(this).parent().find('img').removeClass('active');
		jQuery(this).find('img').addClass('active');

		var name      = jQuery(this).data('name');
		

		jQuery('body').css({'background-image':'url(http://themes.truethemes.net/Karma-4.0/wp-content/themes/Karma/images/body-backgrounds/'+name+'.png)','background-repeat': 'repeat', 'background-position': 'left top'});
		
		//jQuery('body').css({'background-image':'url(http://localhost-2.local/karma-demo/wp-content/themes/Karma/images/body-backgrounds/'+name+'.png)','background-repeat': 'repeat', 'background-position': 'left top'}); 
		
		
	});
	
	
	
jQuery('#truethemes-styling-preview .close').trigger('click');
jQuery('#container').hide("slide", { direction: "right" }, 800);

});