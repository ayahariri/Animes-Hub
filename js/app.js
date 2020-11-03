'user strict'
var anime = [
    { name: "", category: "", rndmSeason: "", removeBtn: "" }

];

function Anime(name, category, rndmSeason, removeBtn) {
    this.name = document.getElementById('animeName').innerHTML;
    this.category = document.getElementById('animeCategory');
    this.rndmSeason = document.createElement('hd');
    this.removeBtn = document.createElement('hd');
    // Anime.prototype.length;
}
// console.log(Anime);
Anime();

function saveToLs() {
    var formResults = document.getElementById('formResult');
    localStorage.setItem("form", "form".value);
    // document.getElementById('formResult').innerHTML= localStorage.getItem()
}

function getTable() {
    var table = document.getElementById('myTable').rows[0].cells.length;
    document.getElementById('result').innerHTML = ''
}
getTable();
function getRndmSeason() {
    var season = Math.floor(Math.random() * 7);
    return Math.floor(Math.random() * 7);

}
getRndmSeason();