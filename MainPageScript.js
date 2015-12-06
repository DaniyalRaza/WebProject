/**
 * Created by Administrator on 11/29/2015.
 */


var video_out = document.getElementById("vid-box");
var vid_thumb = document.getElementById("vid-thumb");

function login(form) {
    var phone = window.phone = PHONE({
        number        : form.username.value || "Anonymous",
        publish_key   : 'pub-c-9df37493-406f-4ccd-8200-8ea58cb55aea',
        subscribe_key : 'sub-c-8a9be808-8fb3-11e5-b303-0619f8945a4f'
    });

    phone.ready(function(){form.username.style.background="#55ff5b"; });
    phone.receive(function(session){
        session.connected(function(session) { video_out.appendChild(session.video); showModal();});
        session.ended(function(session) { video_out.innerHTML='';});
    });
    return false;
}

function makeCall(form){
    if (!window.phone) alert("Login First!");
    else phone.dial(form.number.value);
    return false;
}

function showModal(){
    $("#showModal").click();
}

function errWrap(fxn, form){
    try {
        return fxn(form);
    } catch(err) {
        alert(err);
        return false;
    }
}

