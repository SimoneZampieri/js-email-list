//attraverso l'API fornita generare 10 indirizzi email e stamparli in pagina 

// Funzione per ottenere 10 email randomiche usando axios
  async function generateRandomEmails() {
    const emailListElement = document.getElementById('email-list');

    for (let i = 0; i < 10; i++) {
        try {
            // Chiamata API per ottenere una singola email randomica
            const response = await axios.get('https://flynn.boolean.careers/exercises/api/random/mail');
            
            // Aggiungi l'email alla lista HTML
            const listItem = document.createElement('li');
            listItem.textContent = response.data.response;  // L'email si trova in response.data.response
            emailListElement.appendChild(listItem);
        } catch (error) {
            console.error('Errore nella richiesta:', error);
        }
    }
}

// Chiamata alla funzione per generare le email
generateRandomEmails();