import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { getData } from "@/actions/get-data";

const ListItem = async ({ poke }) => {
  const data = await getData(poke.url);

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{poke.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={data.sprites.front_default}
          height={300}
          width={200}
          alt={poke.name}
        />
        <div className="flex flex-col gap-1 flex-wrap">
          {data.stats.map((state, i) => (
            <div key={i} className="">
              <span>{`${state.stat.name}/${state.base_stat}`}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ListItem;
