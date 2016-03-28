$(document).ready(function() {

	$.jribbble.getShotsByPlayerId('tdr', function (playerShots) {
		var html = [];
		$.each(playerShots.shots, function (i, shot) {
			html.push('<li><a class="image" target="_blank" " href="' + shot.url + '">');
			html.push('<img src="' + shot.image_url + '"/></a></li>');
		});
		$('#thumbnails ul').html(html.join(''));
	}, {page: 1, per_page: 9});
}); 

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});