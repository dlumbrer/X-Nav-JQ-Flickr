$(document).ready(function() {
	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?&tagmode=any&format=json&jsoncallback=?";
	
	$.getJSON(flickerAPI, {
			tags: $('#tags').val(),
		  }).done(function( data ) {
			  $("#tags").before( "<h3>Nº de imágenes mostradas: " + data.items.length + "</h3>" );
			  $.each( data.items, function(i, item) {
				 $("<img>").attr("src", item.media.m).appendTo("#images");
		          });
		  });
		  
	$('#boton').click(function(){
	    location.reload()
	});
});    

//PARA PROBAR HACER UN SERVER DE PYTHON DE UNA LINEA
