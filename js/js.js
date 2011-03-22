$(document).ready(function(){
	var tightMargin = 4;
	var adjTopNag = 14;
	for(i = 1, count = $('#footnote-chapter-1 li').size(); i<=count; i++){
		var noteSelector = '#note-'+i;
		var refSelector = '.ref-'+i;
		var offset = $($(refSelector)[0]).offset().top - $(noteSelector).offset().top - adjTopNag;		
		$(noteSelector).css('margin-top', (offset < 0 ? tightMargin : offset) );
		$(refSelector).hover(function(){
			$('#note-'+$(this).attr('class').match(/ref-(\d*)/)[1]+' div').css({backgroundColor:'#f6f6e6'});
		}, function(){
			$('#note-'+$(this).attr('class').match(/ref-(\d*)/)[1]+' div').css({backgroundColor:'transparent'});
		});
	}
});