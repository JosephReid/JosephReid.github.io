
function pause_videos() {
	$( "video" ).each(function( index ) {
		this.pause();
	});
}

function play_video( index ) {
	// Do it only if window > 600px, this fixes a bug on iOS
	if ($(window).width() > 600 && index > 0) {
		$('video').get(index - 1).play();
	}
}

function update_game_links( index ) {
	$( ".gameLinks li" ).each(function( i ) {
		if (i + 1 == index) {
			$(this).addClass("active");
		}
		else {
			$(this).removeClass("active");
		}
	});
}

function set_waypoint(element_id, colour, index) {
	var waypoint_down = new Waypoint({
		element: document.getElementById(element_id),
		offset: '50%',
		handler: function(direction) {
			if (direction == 'down' && $(window).width() > 600) {
				$('body').animate({backgroundColor: colour}, {duration: 150});    
				pause_videos();
				play_video(index);
				update_game_links(index);
			}
	 	}
	})
	var waypoint_up = new Waypoint({
		element: document.getElementById(element_id),
		offset: '-50%',
		handler: function(direction) {
			if (direction == 'up' && $(window).width() > 600) {
				$('body').animate({backgroundColor: colour}, {duration: 150});    
				pause_videos();
				play_video(index);
				update_game_links(index);
			}
	 	}
	})
}



// Fullscreen stuff
function fullscreenFix(){
    var h = $('body').height();
    // set .fullscreen height
    $(".content-b").each(function(i){
        if($(this).innerHeight() <= h){
            $(this).closest(".fullscreen").addClass("not-overflow");
        }
    });
}
$(window).resize(fullscreenFix);
fullscreenFix();

// Resize background images
function contentResize(){

    $(".content-b .preview").each(function(i){
    	var width_scale = 1.2;
    	if ($(this).hasClass( "ipad" ) || $(this).hasClass( "desktop" ) || $(this).hasClass( "browser" )) {
    		width_scale = 0.55;
    	}
    	var height = $(window).height() / 2;	
    	var width = $(window).width() * width_scale;
    	$(this).css("height", Math.min(height, width));
    	
    	var video = $("video", this);
    	var videoOffset = ($(this).height() - $(video).height()) / 2;
    	$(video).css("margin-top", videoOffset);
    });
}
$(window).resize(contentResize);
$(window).focus(contentResize);
contentResize();
