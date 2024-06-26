"use client";

import { useEffect, useState } from "react";
// import { getData } from "../actions/get-data";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { getData } from "@/app/actions/get-data";

const ListItem = ({ poke }) => {
  const [image, setImage] = useState("");
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(poke.url);
      setImage(data.sprites.front_default);
      setStats(data.stats);
      console.log("data", data);
    };
    fetchData();
  });

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{poke.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={image} height={300} width={200} alt={poke.name} />
        <div className="flex flex-col gap-1 flex-wrap">
          {stats.map((state, i) => (
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
