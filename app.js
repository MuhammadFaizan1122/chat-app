function startChat() {
    document.getElementById("chatPanel").removeAttribute("style")
    document.getElementById("startChat").setAttribute("style", "display:none;")
    hideList();
}

function showList() {
    document.getElementById("side-1").classList.remove('d-none', 'd-md-block');
    document.getElementById("side-2").classList.add("d-none");
}

function hideList() {
    document.getElementById("side-1").classList.add('d-none', 'd-md-block');
    document.getElementById("side-2").classList.remove("d-none");
}

function onKeyDown() {
    document.addEventListener('keydown', function(key) {
        if (key.which === 13) {
            sendMassage();
        }
    })
}

function sendMassage() {
    var massage = `<div class="row myChat justify-content-end ">
                    <div class="col-6 col-sm-7 col-md-7">
                        <p class="send float-right">
                            ${document.getElementById('txtMassage').value}
                            <span class="time ">7:22 pm</span>
                        </p>
                    </div>
                    <div class="col-2 col-sm-1 col-md-1">
                        <img src="https://maeruamall.com/wp-content/uploads/2015/04/person-placeholder-4.png" class="chat-pic">
                    </div>
                </div>`

    document.getElementById("massages").innerHTML += massage;
    txtMassage.value = "";
    document.getElementById('massages').scrollTo(0, document.getElementById('massages').clientHeight)
}


function signIn() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log('User===>', user)
    }).catch(function(error) {
        // Handle Errors here.
        console.log(error.message)

    });


}


function signOut() {
    firebase.auth().signOut();
}

function onFirebaeStateChanged() {
    firebase.auth().onAuthStateChanged(onStateChanged);
}

function onStateChanged(user) {
    if (user) {
        // alert(firebase.auth().currentUser.email + ' \n ' + firebase.auth().currentUser.displayName)
        document.getElementById('imgProfile').src = firebase.auth().currentUser.pzhotoURL;
        document.getElementById('imgProfile').title = firebase.auth().currentUser.displayName;
    }
}
//////////////////////////////////////////
// call auth State change

onFirebaeStateChanged();