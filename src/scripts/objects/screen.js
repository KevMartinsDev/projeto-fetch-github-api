const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =   `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil  do usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😢'} / ${user.userLogin}</h1>
                                                <p>${user.bio ?? 'Usuário não possui bio cadastrado 😢'}</p>
                                                <div class="followers">
                                                    <i class="fa-solid fa-users"></i>
                                                    <p>Seguidores: ${user.followers ?? '00'}</p>
                                                </div>
                                                <div class="following">
                                                    <i class="fa-solid fa-user-group"></i>
                                                    <p>Seguindo: ${user.following ?? '00'}</p>
                                                </div>
                                            </div>
                                        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}"target="_blank">
                                                                        <p class="repos-name">${repo.name}</p>
                                                                        <ul class="icons">
                                                                            <li>
                                                                                <i class="fa-solid fa-utensils"></i>
                                                                                <p>${repo.forks_count}</p>
                                                                            </li>
                                                                            <li>
                                                                                <i class="fa-solid fa-star"></i>
                                                                                <p>${repo.stargazers_count}</p>
                                                                            </li>
                                                                            <li>
                                                                                <i class="fa-solid fa-eye"></i>
                                                                                <p>${repo.watchers_count}</p>
                                                                            </li>
                                                                            <li>
                                                                                <i class="fa-solid fa-code"></i>
                                                                                <p>${repo.language}</p>
                                                                            </li>
                                                                        </ul>
                                                                    </a>
                                                                    
                                                                </li>`)

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML +=  `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
        
        let eventItens = ''
        let filteredEvents = user.events.filter(eventFilter => {
            return eventFilter.type === "CreateEvent" || eventFilter.type === "PushEvent"
        }).slice(0, 10)

        filteredEvents.forEach(eventFilter => {
            if (eventFilter.type === "PushEvent") {
                eventItens += `<li><span class="bolt">${eventFilter.repo.name}</span> - ${eventFilter.payload.commits[0].message ?? 'Sem mensagem de commit'}</li>`
            } else if(eventFilter.type === "CreateEvent") {
                eventItens += `<li>${eventFilter.repo.name} - Sem mensagem de commit</li>`
            }
        })

        if(filteredEvents.length > 0) {
            this.userProfile.innerHTML +=  `<div class="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                            </div>`
        } else {
            console.log('Nenhum evento do tipo CreateEvent ou PushEvent foi encontrado.');
        }

    },
    renderNotFound(user){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }