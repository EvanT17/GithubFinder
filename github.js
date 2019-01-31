class Github {
 
    constructor() {
        this.client_id = '8998b0d708acbbdbbaaa';
        this.client_secret = '764b5616a0a4eb2665ab4e960708b83ea191426a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    
    //getuser
    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        console.log(profile);

        return {
            profile,
            repos
        }
    }

}