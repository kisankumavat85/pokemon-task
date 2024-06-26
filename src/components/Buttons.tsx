"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const limit = 10;

const Pagination = ({ totalPokemon }: { totalPokemon: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Number(searchParams.get("page")) || 1;
  const totalPages = Math.floor(totalPokemon / limit);

  const handlePrevClick = () => {
    const params = new URLSearchParams(searchParams);
    if (page > 1) {
      params.set("page", String(page - 1));
    } else if (totalPages > page) {
      params.set("page", String(page + 1));
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleNextClick = () => {
    const params = new URLSearchParams(searchParams);
    if (totalPages > page) {
      params.set("page", String(page + 1));
      router.replace(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <div>
      {page > 1 && <Button onClick={handlePrevClick}>Prev</Button>}
      {totalPages > page && <Button onClick={handleNextClick}>Next</Button>}
    </div>
  );
};

export default Pagination;
