// definisco le variabili e vado a prendere gli elementi che mi interessano
const lampadina = document.getElementById('lampadina')
const button = document.querySelector('button')

button.addEventListener('click', function (){
        lampadina.src= 'yellow_lamp.png';
    
})