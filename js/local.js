function getLocation() {
    if (navigator.geolocation) {
        alert("333")
        navigator.geolocation.getCurrentPosition(displayLocation);
    } else {
        alert("no geolocation support")
    }
}
function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var div = document.getElementById("location");
    div.innerHTML = "latitude:" + latitude + ",longitude:" + longitude;
}
window.onload = getLocation;