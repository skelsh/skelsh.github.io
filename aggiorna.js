
// ATTIVO E INATTIVO
function home()
{
  all();
  document.getElementById("home").className = "active";
}
function istituto()
{
  all();
  document.getElementById("istituto").className = "active";
}
function docenti()
{
  all();
  document.getElementById("docenti").className = "active";
}
function indirizzi()
{
  all();
  document.getElementById("indirizzi").className = "active";
}
function famiglie()
{
  all();
  document.getElementById("famiglie").className = "active";
}
function all()
{
  document.getElementById("home").className = "inactive";
  document.getElementById("istituto").className = "inactive";
  document.getElementById("docenti").className = "inactive";
  document.getElementById("indirizzi").className = "inactive";
  document.getElementById("famiglie").className = "inactive";
}
