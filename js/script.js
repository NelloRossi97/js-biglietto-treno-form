/* Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. */

//catturo i dati inseriti dall'utente
const nameSurnameBox = document.getElementById('nameSurname');
const kmBox = document.getElementById('km');
const ageBox = document.getElementById('age');


//variabile prezzo totale
let totalPrice;

//catturo in una variabile i bottoni
const buttonSend = document.getElementById('buttonSend');
const buttonCanc = document.getElementById('buttonCanc');

//funzione per avere un numero randomico
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (min - max)) + min;
}

buttonSend.addEventListener('click', function(){
    let nameSurname = nameSurnameBox.value;
    let km = parseInt(kmBox.value);
    let age = parseInt(ageBox.value);
    const ticketPrice = km * 0.21;
    const scontoMin = ticketPrice * 0.20;
    const scontoOver = ticketPrice* 0.40;
    if (age < 18) {
        totalPrice = ticketPrice - scontoMin;
        document.getElementById('ticketPrice').innerHTML += 
        `
        <p class="fw-bold text-center">${totalPrice}&euro;<p>
        `;
        document.getElementById('discount').innerHTML +=
        `
        <p class="fw-bold text-center">Hai diritto ad uno sconto del <span class="text-danger fw-bold">20%</span></p>
        `;
    } else if (age > 64) {
        totalPrice = ticketPrice - scontoOver;
        document.getElementById('ticketPrice').innerHTML += 
        `
        <p class="fw-bold text-center">${totalPrice}&euro;<p>
        `;
        document.getElementById('discount').innerHTML +=
        `
        <p class="fw-bold text-center">Hai diritto ad uno sconto del <span class="text-danger fw-bold">40%</span></p>
        `;
    }
    else {
        totalPrice = ticketPrice;
        document.getElementById('ticketPrice').innerHTML += 
        `
        <p class="fw-bold text-center">${totalPrice}&euro;</p>
        `;
        document.getElementById('discount').innerHTML +=
        `
        <p class="fw-bold text-center">Lo sconto non è disponibile per la tua fascia d'eta.</p>
        `;
    }

    document.getElementById('nameTicket').innerHTML += `<p> ${nameSurname} </p>`;
    document.getElementById('carriage').innerHTML += Math.floor(Math.random() * 10) + 1;
    document.getElementById('cpCode').innerHTML += getRndInteger(90000,99999);
    document.getElementById('ticket').classList.remove('d-none');
    document.getElementById('ticket').classList.add('d-block');
})

buttonCanc.addEventListener('click', function(){
    document.getElementById('ticketPrice').innerHTML = `<p class="fw-bold d-flex flex-column align-items-center justify-content-center">Costo biglietto</p>`;
    document.getElementById('discount').innerHTML = `<p class="fw-bold d-flex flex-column align-items-center justify-content-between">Offerta</p>`;
    document.getElementById('nameTicket').innerHTML = `<p class="text-uppercase">Nome passeggero</p>`;
    document.getElementById('carriage').innerHTML = `<p class="fw-bold d-flex flex-column align-items-center justify-content-center">Carrozza</p>`;
    document.getElementById('cpCode').innerHTML = `<p class="fw-bold d-flex flex-column align-items-center justify-content-center">Codice CP</p>`;
    document.getElementById('ticket').classList.add('d-none');
    nameSurnameBox.value = "";
    kmBox.value = "";
    ageBox.value = "";
})



