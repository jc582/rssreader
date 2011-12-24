$(function(){
	$.getJSON('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=30&callback=?&q=' + encodeURIComponent('http://news.ycombinator.com/rss'), function(data){
		$.each(data.responseData.feed.entries, function(index, value){
			$("#title-list").append('<li><a href="' + value.link + '"target="external">' + value.title + '</a></li>');       
		});
		$("#title-list").listview("refresh");
	});

	$('a').live("click", function(){
		$('#title-list').hide();
		$('#external-iframe').show();
		$('#external-iframe').css("width", "100%");
		$('#external-iframe').css("height", "100%");
		$('.ui-page').css("height", "100%");
	});

	$('.ui-btn-text:contains("Back")').live("click", function(){
		$('#external-iframe').hide();
		$('#title-list').show();
	});

});


