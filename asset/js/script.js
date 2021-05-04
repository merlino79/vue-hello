//  - Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//  - Cambiare il colore del testo cliccando su dei bottoni
// Bonus:
// 1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// 2. Cambiare la classe del testo scrivendola dentro a un input ma il cambio deve avvenire solo quando viene premuto invio



const root = new Vue({
    el: '#root',
    data: {
        messaggio1: "inserire il testo nell'input",
        messaggio: '',
        colore: '',

    },
    methods: {
        cambiaColore(classe) {
            this.colore = classe;
        }

    }

});

const root2 = new Vue({
    el: '#root2',
    data: {
        messaggio3: "proviamo a fare qualcosa in più",
    }

});
console.log(root2)