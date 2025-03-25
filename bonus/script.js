// definisco le variabili e vado a prendere gli elementi che mi interessano
const lampadina = document.getElementById('lampadina')
const button = document.getElementById ('btn')

// funzione per chiamare l'evento di click, aggiungo gli operatori if e else per l'accendi e spegni

button.addEventListener('click', function (){
    
        if(lampadina.classList.contains("spenta")){
            lampadina.classList.remove ("spenta");
            lampadina.classList.add ("accesa");
            button.innerHTML = "Spegni"
        }
        else{
            lampadina.classList.remove("accesa")
            lampadina.classList.add("spenta")
            button.innerHTML = "Accendi"
        }
})