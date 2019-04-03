
// firebase.initializeApp({
//     apiKey: 'AIzaSyB-gm-HdCkmyAnZIdTGiqgWIq3LaBCnIbc',
//     authDomain: 'ionic-7288a.firebaseapp.com',
//     projectId: 'ionic-7288a'
// });
      
// // Initialize Cloud Firestore through Firebase
// var db = firebase.firestore();





function add(){

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if(name.length < 1 || email.length < 1 || subject.length < 1 || message.length < 1){
        console.log('nada')
    }else{
        // this.db.collection('messages').add({
        //     name : name,
        //     email: email,
        //     subject : subject,
        //     message : message
        // }).then((data)=>{
        //     document.getElementById('name').value= '';
        //     document.getElementById('email').value='';
        //     document.getElementById('subject').value='';
        //     document.getElementById('message').value='';
        //     console.log('agregado');
        //     nuevo_registro();      
        // })
        nuevo_registro();    

    }
}




 function nuevo_registro(){
    swal({
        title: "Mensaje Enviado",
        text: "Muy pronto nos pondremos en contacto con usted",
        icon: "success",
        button: "Aceptar",
    });
}
    

