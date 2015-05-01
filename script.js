var apiurl = "http://parakhi.com.np/api"

$(document).ready(function(){
	console.log("ready");

	$.get(apiurl+"?task=categories", function(data, status){
		var categories = data.payload;

		console.log(data.payload);	

		var source = $('#data-filter').html();
	    var template = Handlebars.compile(source);
	    var context = categories;

	    $('#filter').html(template(context));

	});

	$(document).on('change', "#catfilter", function() {
		$(".spinner").show();
	    $.get(apiurl+"?task=incidents&by=catid&id="+$(this).val(), function(data, status){
		var incidents = data.payload;

		console.log(data.payload);	

		var source = $('#data-template').html();
	    var template = Handlebars.compile(source);
	    var context = incidents;

	    $('#container').html(template(context));
	    $(".spinner").hide();


	});
	});
	
});