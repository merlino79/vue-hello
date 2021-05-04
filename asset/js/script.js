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
        messaggio3: "clicca per l'immagine",
        img: "",
    },
    methods: {
        aggImg(immagine) {
            this.img = immagine;
        }
    }

});
//console.log(root2)

const root3 = new Vue({
    el: '#root3',
    data: {
        messaggio4: "",
        colore: "",

    },
    methods: {
        upTasto() {
            console.log('ciao prova intercettazione')
        }



    }

});
//console.log(root3);