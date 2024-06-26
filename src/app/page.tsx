import { getPokemon } from "@/actions/get-pokemon";
import Pagination from "@/components/Buttons";
import List from "@/components/List";

export default async function HomePage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const page = Number(searchParams?.page) || 1;
  const offset = (page - 1) * 10;

  const data = await getPokemon(offset);

  return (
    <main className="container w-full">
      {data.results?.length > 0 && <List pokemons={data.results} />}
      <Pagination totalPokemon={data.count} />
    </main>
  );
}
