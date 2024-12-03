//attraverso l'API fornita generare 10 indirizzi email e stamparli in pagina 


//costanti
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

//procedimento

for(let i = 0; i < 10; i++){
    
    let mail = [];

    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        mail.push(data.response)
    })

}