const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userLogin: '',
    followers: '',
    following: '',
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userLogin = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
        console.log(repositories)
    },
    setEvents(events){
        this.events = events
    }
}

export { user }