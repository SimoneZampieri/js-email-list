//attraverso l'API fornita generare 10 indirizzi email e stamparli in pagina 


//costanti
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const mail = [];
//procedimento
const fetchEmails = () =>{

    const promises = [];
    
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