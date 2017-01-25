function buscador() {

	busca = document.getElementById("busca").value;
	selecc = document.getElementById("selecc");
	idimg = document.getElementsByClassName("idimg")
	isbn = "";
	seleccionado = -1;

	$.ajax({
	url: "https://www.googleapis.com/books/v1/volumes?q=" + busca,
	dataType: "json",

	success: function obras(data) {

		for (i in data.items){

			postur = i;

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

				// Declarando variables desde los arrays

				titulo = data.items[i].volumeInfo.title;
				autor = data.items[i].volumeInfo.authors;
				portada = data.items[i].volumeInfo.imageLinks.smallThumbnail;
				isbn = data.items[i].volumeInfo.industryIdentifiers[0].identifier;

				//seleccionando ISBN si hay varios

						isbnva = Array();
						if (isbn==undefined) {
							isbnva = "desconocido";
						}else if (isbnva.length>0) {
								for (var i = 0; i < isbnva.length; i++) {
									isbn = isbnva[i]
									alert(isbn);
								}
						}

				//seleccionando autores cuando hay varios


				var autores = data.items[i].volumeInfo.authors.length;
				if (autores>1) {
						for (var a=0; a<=autores; a++) {
							autorete = autor[a];
					}
				}

				idimg = "portada"+i;

				resultados.innerHTML += "<div class='celda'>"
					+ '<button type="button" data-toggle="modal" data-target="#myModal" id="idimg" value=true name="botonimg">'
					+ "<div class='portadamodal'>"
					+ '<img src="'+portada+'"/>'
					+ '</button>'
					+ "</div>"

				}

					if (seleccionado) {

							for (var libro in data.items) {
									if (libro==postur) {
							 		selecc.innerHTML += '<h3 style="color:#5D4C62";>'
									+ data.items[postur].volumeInfo.title+'</h2>'
									+ data.items[postur].volumeInfo.subtitle+"<br> "
									+ data.items[postur].volumeInfo.authors + "<br>"
									+'<img src="'+data.items[postur].volumeInfo.imageLinks.smallThumbnail+'"/>'
									+'<p>ISBN: '+isbn+'</p>'
								}
					}
			}

///					REPASAR LAS LLAVES

		},
		type: "GET",
	});

}

jQuery('#idimg').click(function(){
  $(this).data('clicked', registro, true);
});





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
