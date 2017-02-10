
url="https://www.gstatic.com/firebasejs/3.6.8/firebase.js"
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxNosP3CHioA_HIUxahCXjybLerSfBgWY",
    authDomain: "usuariosbr-151311.firebaseapp.com",
    databaseURL: "https://usuariosbr-151311.firebaseio.com",
    storageBucket: "usuariosbr-151311.appspot.com",
    messagingSenderId: "128283877980"
  };

    firebase.initializeApp(config);
    //alert(app);

        var txtEmail = document.getElementById('txtmail');
        var txtPass = document.getElementById('txtPass');
        var btnLogin = document.getElementById('btnLogin');
        var btnSignUp = document.getElementById('btnSignUp');
        var btnLogout = document.getElementById('btnLogout');

  //crear usuario

function registro() {

          btnSignUp.addEventListener('click', e => {
          const email = txtEmail.value;
          const pass = txtPass.value;
          const auth = firebase.auth();
          const promise = firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
              if (errorCode == 'auth/weak-password') {
                  alert('The password is too weak.');
              } else {
                  alert(errorMessage);
              }
                    console.log(error);
                });
        })
        }


        function entrar(){
                    btnLogin.addEventListener('click', e => {
                     const email = txtEmail.value;
                     const pass = txtPass.value;
                     const auth = firebase.auth();
                     const promise = auth.signInWithEmailAndPassword(email, pass);
                     promise.catch(e => console.log(e.message));
                     if (promise) {
                       alert('estas dentro');
                     }
                     else {
                       alert("revisa tus errores");
                     }

                });
                }

      function portada() {
            seleccionado = true;
                var posicion = document.getElementsById("idimg").val();
                alert("psoici "+posicion+"valor "+idimg);
                /*
                  for (var libro in resultados) {
                      if (seleccionado) {
                        poss = this.selectedIndex;
                      //	alert("posicion "+poss);
                        alert("posicion "+poss+" y valor "+selecc.items[poss].volumeInfo.title);
                        alert("libro "+libro);
                        selecc.innerHTML += '<h3 style="color:#5D4C62";>'
                          + '<h2'>+selecc.items[poss].volumeInfo.title+'</h2>'
                          + data.items[poss].volumeInfo.subtitle+"<br> "
                          + data.items[poss].volumeInfo.authors + "<br>"
                          +'<img src="'+data.items[poss].volumeInfo.imageLinks.smallThumbnail+'"/>'
                      }
                    }*/

                    }
