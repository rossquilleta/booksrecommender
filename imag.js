function buscador() {
	
	var busca = document.getElementById("busca").value;
	//var res = document.getElementById("resultados").innerHTML = "";
	//var listado = document.getElementById("jumbotron").innerHTML = "";
	var selecc = document.getElementById("selecc");
	var idimg = "portada100";

	//var list = document.getElementByTagName("table");
	var isbn = "";

	$.ajax({
	url: "https://www.googleapis.com/books/v1/volumes?q=" + busca,
	dataType: "json",
		
	success: function(data) {
		"<table class='pagination'>"
		for (var i = 0; i< 9 ; i++){
				if (data.items[i].volumeInfo.authors == undefined) {
					data.items[i].volumeInfo.authors= "Autor desconocido";
				}
				if (data.items[i].volumeInfo.title == undefined) {
					data.items[i].volumeInfo.title = " ";
				}
				if (data.items[i].volumeInfo.imageLinks == undefined) {
					data.items[i].volumeInfo.imageLinks = "sin imagenes";
				}
				if (data.items[i].volumeInfo.description==undefined) {
					data.items[i].volumeInfo.description = "Sin datos";
				}
			
				var port = data.items[i].volumeInfo.imageLinks.smallThumbnail;
				var isbn = data.items[i].volumeInfo.industryIdentifiers[0].identifier;
				idimg = "portada"+i;			
				resultados.innerHTML += "<div class='celda'>"+'<button type="button" data-toggle="modal" data-target="#myModal" id="idimg">'+'<img src="'+port+'"/>'+'</button>'+"</div>"
				
				var busca = document.getElementById("busca").value = " ";
		

				}

			"</table>"
		},

		type: "GET",
	});
}

function respuesta() {
$.ajax({
	url: "https://www.googleapis.com/books/v1/volumes?q=" + busca,
	dataType: "json",
		
	success: function(data) {
		"<ul class='pagination'>"
			for (var i = 0; i< data.items.length ; i++){
					if (btn.onclick) {
				if (data.items[i].volumeInfo.authors == undefined) {
					data.items[i].volumeInfo.authors= "Autor desconocido";
				}
				if (data.items[i].volumeInfo.title == undefined) {
					data.items[i].volumeInfo.title = " ";
				}
				if (data.items[i].volumeInfo.imageLinks == undefined) {
					data.items[i].volumeInfo.imageLinks = "sin imagenes";
				}
				if (data.items[i].volumeInfo.description==undefined) {
					data.items[i].volumeInfo.description = "Sin datos";
				}
				var port = data.items[i].volumeInfo.imageLinks.smallThumbnail;
				var isbn = data.items[i].volumeInfo.industryIdentifiers[0].identifier;
				
				
				resultados.innerHTML += "<li>"+'<img src="'+port+'"/><br>'+"<b><br><span style=color:#572D5F>"+data.items[i].volumeInfo.title +"</span>; "+ data.items[i].volumeInfo.authors +"</h2><br>"+"<br><p>"+data.items[i].volumeInfo.description+"</li><br>"
				//$("#buscador").val(""); 
				var busca = document.getElementById("busca").value = " ";
			
				
			}else {
				resultados.innerHTML += "<li>"+'<img src="'+port+'"/><br>'+"</li>"
			}
}
		},

		type: "GET",
	});
}


//var boton = document.getElementById("boton").addEventListener("click", buscador, false)
$("#boton").on("click", buscador)

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("#idimg");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
$("#btn").on("click", respuesta); 

function obras (selec) {
		for (var i = 0; i< 9 ; i++){
				if (selec.items[i].volumeInfo.authors == undefined) {
					selec.items[i].volumeInfo.authors= "Autor desconocido";
				}
				if (selec.items[i].volumeInfo.title == undefined) {
					selec.items[i].volumeInfo.title = " ";
				}
				if (selec.items[i].volumeInfo.imageLinks == undefined) {
					selec.items[i].volumeInfo.imageLinks = "sin imagenes";
				}
				if (selec.items[i].volumeInfo.description==undefined) {
					selec.items[i].volumeInfo.description = "Sin datos";
				}
			
				var port = selec.items[i].volumeInfo.imageLinks.smallThumbnail;
				var isbn = selec.items[i].volumeInfo.industryIdentifiers[0].identifier;
				idimg = "portada"+i;			
				selecc.innerHTML += "<div class='celda'>"+'<button type="button" data-toggle="modal" data-target="#myModal" id="idimg">'+'<img src="'+port+'"/>'+'</button>'+"</div>"
				
				var busca = document.getElementById("busca").value = " ";
		
				}

    modal.style.display = "block";
}

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