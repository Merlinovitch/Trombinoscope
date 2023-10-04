document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById ('root');
    const url = "https://reqres.in/api/users?per_page=12";
    root.className = "h-full inline-flex flex-row gap-9 flex-wrap justify-center items-center text-center"

        fetch (url)
        .then((response) => response.json())
        .then ((data) => {
        
        data.data.forEach(user => { 
          //créer la div pour la card
          const createDiv = document.createElement("div");
          createDiv.className = "m-5 p-5 bg-white drop-shadow-lg justify-center w-lg"
          root.appendChild(createDiv);

          //créer le prénom
          const createFirstName = document.createElement("p");
          createFirstName.className =
            "mb-2 text-xl font-medium leading-tight";
          createFirstName.textContent = user.first_name;
          createDiv.appendChild(createFirstName);

          // Créer le nom
          const createLastName = document.createElement("p");
          createLastName.className =
            "mb-2 text-xl font-medium leading-tight";
          createLastName.textContent = user.last_name;
          createDiv.appendChild(createLastName);

          //importer photo
          const importPhoto = document.createElement("img");
          importPhoto.className = "rounded-full ml-auto mr-auto"
          importPhoto.src = user.avatar;
          createDiv.appendChild(importPhoto);

          // Créer le mail
          const createEmail = document.createElement("p");
          createEmail.textContent = user.email;
          createEmail.className = "text-neutral-500 dark:text-neutral-400";
          createDiv.appendChild(createEmail)
        
            //Modale
            createDiv.onclick = () => {
                let createModale = document.createElement('div')
                let h1Modale = document.createElement('h1')
                let imgModale = document.createElement ('img')
                let overlay = document.createElement ('div')
                let emailModale = document.createElement('p')
                let description = document.createElement('p')
                createModale.id = 'modale'
                overlay.id = 'overlay'

            
                //contenu de la modale
                h1Modale.textContent = user.first_name + " " + user.last_name
                imgModale.src = user.avatar
                emailModale.textContent = user.email
                description.textContent = "Il aime le kung-fu, la boxe, le karaté, le judo, le taekwondo, le kickboxing, le muay thai, le krav maga et les fleurs"

                overlay.className = 'fixed w-full h-full bg-black opacity-25'
                h1Modale.className="font-bold py-4"
                description.className='py-auto'
                createModale.className = 'fixed w-80 h-80 bg-white z-100 justify-center align-center shadox-lg '
                imgModale.className = 'm-auto'
                description.className = 'p-2'

                root.appendChild(overlay)
                root.appendChild(createModale)
                createModale.appendChild(h1Modale)
                createModale.appendChild(imgModale)
                createModale.appendChild(emailModale)
                createModale.appendChild(description)


                let modale = document.getElementById('modale')
                let overlaybg = document.getElementById('overlay')

                modale.onclick = () => {
                    modale.remove();
                    overlaybg.remove();
                };
                
         
            }

                    
        })

    })
})