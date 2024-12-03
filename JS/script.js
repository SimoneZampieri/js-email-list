//attraverso l'API fornita generare 10 indirizzi email e stamparli in pagina 


//costanti
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'; //API che genera email random

const mail = []; //array vuoto che contiene tutte le email ricevute 


//funzione che si occupa di recuperare 10 email dalla API
const fetchEmails = () =>{

    const promises = []; //contiene tutti i risultati delle richieste fetch
    
    for(let i = 0; i < 10; i++){
        
    
        const promise = fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            mail.push(data.response)
        })

        promises.push(promise)
    }

    Promise.all(promises)
    .then(() => {
        displayEmails();
    })
    .catch(error => {
        console.error('Errore:', error);
    });
};


const displayEmails = () => {
    const mailCont = document.getElementById('email-list')

    mail.forEach(email => {
        const li = document.createElement('li');
        li.textContent = email;
        mailCont.appendChild(li)
    });
};


//chiamata funzione

fetchEmails()