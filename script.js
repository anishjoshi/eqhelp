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
		var catid = $(this).val();
	    $.get(apiurl+"?task=incidents&by=catid&id="+$(this).val(), function(data, status){
		var incidents = data.payload;

		console.log(data.payload);	

		var source = $('#data-template').html();
	    var template = Handlebars.compile(source);
	    var context = incidents;

	    $('#container').html(template(context));
	    $(".spinner").hide();
	    $("#sharelink").val("http://anishjoshi.github.io/eqhelp/?catid="+catid);


	});
	});
	function getDataFromParam() {
		console.log("wow");
		var catid = getParameterByName('catid');

		$(".spinner").show();
			    $.get(apiurl+"?task=incidents&by=catid&id="+catid, function(data, status){
				var incidents = data.payload;

				console.log(data.payload);	

				var source = $('#data-template').html();
			    var template = Handlebars.compile(source);
			    var context = incidents;

			    $('#container').html(template(context));
			    $(".spinner").hide();
			    $("#sharelink").val("http://anishjoshi.github.io/eqhelp/?catid="+catid);


			});

	}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

	getDataFromParam();	
});