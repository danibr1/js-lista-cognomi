
/*
Consegna
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), del nuovo utente inserito sopra all'interno dell'array, dopo l'ordinamento alfabetico
Consigli del giorno:
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.
console.log('prova')
*/

//N. DI COGNOMI DA INSERIRE NELL'ARRAY
var lenghtList = parseInt( prompt('Quanti cognomi vuoi inserire?') ); 
console.log('L\'elenco è composto da :' + lenghtList + ' cognomi');

//VARIABILI
var list = [];
var position = 1;

//RICHIESTA DI INSERIMENTO COGNOME PER LA LUNGHEZZA DELL'ARRAY DICHIARATA
for ( i = 0; i < lenghtList; i++){
    surname = prompt('Inserisci nella lista il ' + ( i + position ) + '° cognome di ' + lenghtList).toLowerCase().trim();
    list[i] = surname;
}

//STAMPA LA LISTA IN ORDINE DI INSERIMENTO
console.log('ORDINE INSERIMENTO');
console.log(list);

//STAMPA LA LISTA IN ORDINE ALFABETICO
console.log('ORDINE ALFABTICO');
console.log(list.sort());

/**
 *  RICHIESTA COGNOME DA CERCARE E STAMPA DELLA SUA POSIZIONE "UMANA" - SE DIGITATO "EXIT" LA RICERCA SI INTERROMPE
*/

//VARIABILI
var indexSurname; //posizione array del cognome da cercare
var foundSurname = false; //variabile di stato per la ricerca 

//COGNOME DA CERCARE
var searchSurname = prompt('Quale cognome vuoi cercare nella lista ').toLowerCase().trim(); 

//EFFETTUA IL CONTROLLO FINCHE' NON TROVA IL NOME
while ( foundSurname === false ){
    
    if (list.sort().includes(searchSurname)){
        foundSurname = true;
        indexSuername = list.sort().indexOf(searchSurname);
        console.log('L\'utente "'+ searchSurname + '" è stato trovato. Si trova nella posizione n. ' + (indexSuername+1) );
    }else {
        searchSurname = prompt('Cognome non trovato nell\'elenco, prova di nuovo. Scrivi "exit" per ucire').toLowerCase().trim();
        //controllo per usciredal programma
        if(searchSurname === 'exit'){
            console.log('Sei uscito dal programma, l\'operazione di ricerca non è andata a buon fine.') 
            break;
        }
    }
}