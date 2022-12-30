//declarar variables y obtener selectores
const $paragraphs = document.querySelectorAll("#caja p"), //coma p/seguir declarando
  $time = document.querySelector(".time"),
  $date = document.querySelector(".date"),
  $monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

//recorrer array  de parrafos y cambiar el color
for (i = 0; i < $paragraphs.length; i++) {
  $paragraphs[i].style.color = "orange";
}

//setInterval repite function cada 1s
setInterval(function clock() {

  const fecha = new Date();

  let day = fecha.getDate(),
    month = fecha.getMonth(), // de 1 a 12
    year = fecha.getFullYear();


  $time.innerHTML = fecha.toLocaleTimeString(); // + legible
  $date.innerHTML = `${day} ${$monthNames[month]} ${year}`;

}, 1000);
