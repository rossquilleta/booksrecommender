function buscador() {
	
	var busca = document.getElementById("busca").value;
	//var res = document.getElementById("resultados").innerHTML = "";
	var listado = document.getElementById("listado").innerHTML = "";
	//var list = document.getElementByTagName("table");

	$.ajax({
	url: "https://www.googleapis.com/books/v1/volumes?q=" + busca,
	dataType: "json",
		
	success: function(data) {
			for (var i = 0; i< data.items.length ; i++){
				var port = data.items[i].volumeInfo.imageLinks.smallThumbnail;
				resultados.innerHTML += '<img src="'+port+'"/>'+"<b><br><span style=color:#572D5F>"+data.items[i].volumeInfo.title +"</span>; "+ data.items[i].volumeInfo.authors +"</h2><br>"
				var titaut = "<b><span style=color:#572D5F>"+data.items[i].volumeInfo.title +"</span>; "+ data.items[i].volumeInfo.authors +"</h2>"
				$("#resultados").attr("p", "titaut");
				//resultados.innerHTML = titaut;
				//resultados.innerHTML += "<b><br><span style=color:#572D5F>"+data.items[i].volumeInfo.title +"</span>; "+ data.items[i].volumeInfo.authors +"</h2>"
				//mostrar.innerHTML += "<tr><td><b><span style=color:#572D5F>"+data.items[i].volumeInfo.title +"</span>;</td> <td>"+ data.items[i].volumeInfo.authors +"<br></h2></td></tr>"
				//$('#listado').html("<tr><td><b><span style=color:#572D5F>"+data.items[i].volumeInfo.title +"</span>;</td> <td>"+ data.items[i].volumeInfo.authors +"<br></h2></td></tr>")
				}
		},

		type: "GET",
	});
}

var boton = document.getElementById("boton").addEventListener("click", buscador, false)