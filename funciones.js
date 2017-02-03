
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

      function portada(resultados) {
          for (var variable in resultados) {
              selecc.innerHTML +=resultados[variable]
          }
      }
