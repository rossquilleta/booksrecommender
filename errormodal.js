function buscador() {

	busca = document.getElementById("busca").value;
	selecc = document.getElementById("selecc");
	idimg = document.getElementsByClassName("idimg")
	isbn = "";
  resultados = "";

	$.ajax({
	url: "https://www.googleapis.com/books/v1/volumes?q=" + busca,
	dataType: "json",

	success: function obras(data) {

		for (var i = 0; i< 9; i++){

		//	pos = i;

				if (data.items[i].volumeInfo.authors == undefined) {
					data.items[i].volumeInfo.authors= "Autor desconocido";
				}
				if (data.items[i].volumeInfo.title == undefined) {
					data.items[i].volumeInfo.title = " ";
				}
				if (data.items[i].volumeInfo.subtitle == undefined) {
					data.items[i].volumeInfo.subtitle = "";
				}
				if (data.items[i].volumeInfo.imageLinks == undefined) {
					data.items[i].volumeInfo.imageLinks = "sin imagenes";
				}
				if (data.items[i].volumeInfo.description==undefined) {
					data.items[i].volumeInfo.description = "Sin datos";
				}
				//selecc.innerHTML += data.items[i].volumeInfo.authors + data.items[i].volumeInfo.title

				var port = data.items[i].volumeInfo.imageLinks.smallThumbnail;
				var isbn = data.items[i].volumeInfo.industryIdentifiers.identifiers;
			  var poss = i;
				idimg = "portada"+i;
				resultados.innerHTML += "<div class='celda'>"
					+ '<button type="button" data-toggle="modal" data-target="#myModal" id="idimg" onclick="portada(this)">'
					+ "<div class='portadamodal'>"
					+ '<img src="'+port+'"/>'
					+ '</button>'
					+ "</div>"

					function portada() {
						$('.portadamodal img').click(function() {
	        	//	var poss  = $(this).index();
	        		poss = this.selectedIndex;
							selecc.innerHTML += '<h3 style="color:#5D4C62";>'
								+ '<h2'>+data.items[poss].volumeInfo.title+'</h2>'
								+ data.items[poss].volumeInfo.subtitle+"<br> "
								+ data.items[poss].volumeInfo.authors + "<br>"
								+'<img src="'+data.items[poss].volumeInfo.imageLinks.smallThumbnail+'"/>'
	    });
					}


				}


				selecc.innerHTML += '<h3 style="color:#5D4C62";>'
					+ data.items[i].volumeInfo.title+'</h2>'
					+ data.items[i].volumeInfo.subtitle+"<br> "
					+ data.items[i].volumeInfo.authors + "<br>"
					+'<img src="'+data.items[i].volumeInfo.imageLinks.smallThumbnail+'"/>'
		},
		type: "GET",
	});
}

jQuery('#idimg').click(function(){
  $(this).data('clicked', true);
});



function registro() {
	if(jQuery('#idimg').data('clicked')) {
	  //  registro();
	    $('idimg').click(function() {
			  var i = $(this).index();
				if (i==pos) {
					selecc.innerHTML += '<h3 style="color:#5D4C62";>'
						+ data.items[i].volumeInfo.title+'</h2>'
						+ data.items[i].volumeInfo.subtitle+"<br> "
						+ data.items[i].volumeInfo.authors + "<br>"
						+'<img src="'+port+'"/>'
}
				})
        alert('Has clickado sobre el elemento número: '+i);
    };

};

//var boton = document.getElementById("boton").addEventListener("click", buscador, false)
$("#boton").on("click", buscador)
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("#idimg");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
$("#btn").on("click", buscador, this);
modal.style.display = "block";
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
