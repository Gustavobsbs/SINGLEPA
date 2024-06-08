import {NavBar} from "@/app/components/navbar";
import {Title} from "@/app/components/title";
import {Card} from "@/app/components/card";
import {getMovies} from "@/app/actions/getMovies";

export default async function Home() {
    const filmes: Array<Filme> = await getMovies()
  return (
    <main className="flex min-h-screen flex-col">
        <NavBar />
        <Title>Filmes em Alta</Title>
        <section className="flex flex-wrap gap-6 m-4">
            {filmes.map(filme=> <Card filme={filme}/>)}
        </section>

        <Title>Séries em Alta</Title>
    </main>

  );
}
