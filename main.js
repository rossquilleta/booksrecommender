function buscador() {
	
	var busca = document.getElementById("busca").value;
	var res = document.getElementById("resultados").innerHTML = "";

	$.ajax({
	url: "https://www.googleapis.com/books/v1/volumes?q=" + busca,
		dataType: "json",
		success: function(data) {
			for (var i = 0; i< data.items.length ; i++){
			resultados.innerHTML += data.items[i].volumeInfo.title +"<br></h2>"
			}
		},
		
	type: "GET",
		
	});
}

var boton = document.getElementById("boton").addEventListener("click", buscador, false)
