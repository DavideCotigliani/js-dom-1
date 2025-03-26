// definisco le variabili e vado a prendere gli elementi che mi interessano
const lampadina = document.getElementById('lampadina')
const button = document.getElementById ('btn')

// funzione per chiamare l'evento di click, aggiungo gli operatori if e else per l'accendi e spegni

button.addEventListener('click', function (){
    
        if(lampadina.src.includes("yellow")){
            lampadina.src = 'white_lamp.png'
            button.innerHTML = "Accendi"
        }
        else{
            lampadina.src= 'yellow_lamp.png'
            button.innerHTML = "Spegni"
        }
})