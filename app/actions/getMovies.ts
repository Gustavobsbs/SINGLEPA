"use server"

export async function getMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODA0YThkODhkN2Q3YmY3MDRjNDQ5MDE3MTJjMWZmMiIsInN1YiI6IjY2NjI1M2YyNWM2ZGYwOWQ2MTkyZjM0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NhhwWKxFBWNVRI9WMForHI5vrVWI-VL5RKhVVpd7buM'
        }
    };

    const resp = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR', options)

    if(resp.ok){
        const json = await resp.json()
        return json.results
    }

}
