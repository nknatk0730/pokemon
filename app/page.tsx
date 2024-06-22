import { getAllPokemons } from "@/data/pokemon";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const pokemons = await getAllPokemons();

  return ( 
    <main>
      <div className="grid grid-cols-3 gap-4 container">
        {pokemons.map((pokemon) => {
          return (
            <div key={pokemon.id} className="bg-gray-100 p-4 rounded-lg relative">
              <h2 className="text-xl font-bold">
                {pokemon.name}
                <Link href={`/${pokemon.id}`} className="absolute inset-0"></Link>
              </h2>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
          )
        })}
      </div>
    </main>
  );
}
