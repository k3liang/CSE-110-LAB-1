window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}

function alertSubFunc() {
    alert("Subscriber \"added\": " + document.getElementById("test_email").value);
}