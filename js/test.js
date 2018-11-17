function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButton;
    loadMsg();
}
function handleButton() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    if (songName) {
        var li = document.createElement("li");
        li.innerHTML = songName;
        var ul = document.getElementById("playList");
        ul.appendChild(li);
        save(songName);
    }
}
function save(item) {
    var playListArray = getStoreArray("playList");
    playListArray.push(item);
    localStorage.setItem("playList", JSON.stringify(playListArray));
}
function loadMsg() {
    var playListArray = getSavedSongs();
    var ul = document.getElementById("playList");
    if (playListArray) {
        for (var i = 0; i < playListArray.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = playListArray[i];
            ul.appendChild(li)
        }
    }

}
function getSavedSongs() {
    return getStoreArray("playList");
}
function getStoreArray(key) {
    var playListArray = localStorage.getItem(key);
    if (playListArray) {
        playListArray = JSON.parse(playListArray);
    } else {
        playListArray = new Array();
    }
    return playListArray;
}
window.onload = init;