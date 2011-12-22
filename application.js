  $(function(){
    $.getJSON('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=30&callback=?&q=' + encodeURIComponent('http://news.ycombinator.com/rss'), function(data){
      $.each(data.responseData.feed.entries, function(index, value){
  			$("#title-list").append('<li><a href="' + value.link + '">' + value.title + '</a></li>');       
      });
			$("#title-list").listview("refresh");
    });
  });
