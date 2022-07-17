function as  () {
  var x = document.getElementById("exampleFormControlTextarea1").value;
  document.getElementById("demo").innerHTML = x;
}
function neueFrageAdd() {
  var x = document.getElementById("exampleFormControlTextarea1").value;
  FrageHinzufuegen (x);
  document.getElementById("fragen").innerHTML = "";
  zeigefragen();
}
var counterTu = [];
function thumbsUp (counter) {
if (counterTu [counter] == null) counterTu [counter] = 0;
  counterTu [counter] ++;
  document.getElementById("counter-for-thumbs-up"+counter).innerHTML = counterTu [counter];

}
function fillStorage () {
  clearStorage();
  FrageHinzufuegen ("Wie viele Eier legt ein Schaf?");
  FrageHinzufuegen ("Wie hieß Albert Einstein mit Vornamen?");
  FrageHinzufuegen ("What´s ´dog´ in english?");
  FrageHinzufuegen ("This Question is not the yellow from the egg.");
  FrageHinzufuegen ("Wie viele Raketen hat Elon Muski schon gesprengt?");
  FrageHinzufuegen ("Gehört Elon Musk nicht Mercedes?");
  zeigefragen();
}
function clearStorage () {
  localStorage.setItem("alleFragen", JSON.stringify([]));
}
function FrageHinzufuegen(frage) {
var existingEntries = JSON.parse(localStorage.getItem("alleFragen"));
if(existingEntries == null) existingEntries = [];
existingEntries.push (frage);

localStorage.setItem("alleFragen", JSON.stringify(existingEntries));
}
function zeigefragen(){
  var existingEntries = JSON.parse(localStorage.getItem("alleFragen"));
  var text = "";
  for (let i = 0, len = existingEntries.length; i < len; i++){
    text += existingEntries[i] + "<br><div id=\"demo\"><p> </p></div><div id=\"demo2\"><div id=\"counter-for-thumbs-up"+i+"\">0</div><div><img src=\"./iconjpeg.jpg\" width=\"20px\" height=\"20px\" onclick=\"thumbsUp(" + i + ")\"></div></div><br><br>";
  }
  document.getElementById("fragen").innerHTML = text;
}
