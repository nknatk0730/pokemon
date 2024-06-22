import { Button } from "@/components/ui/button";
import { getPokemon } from "@/data/pokemon";
import Link from "next/link";

export default async function page({
  params: {id}
}: {
  params: {
    id: string;
  }
}) {
  const pokemon = await getPokemon(id);
  return (
    <main className="container">
      <Button asChild variant='outline'>
        <Link href='/'>Back</Link>
      </Button>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
    </main>
  )
}
