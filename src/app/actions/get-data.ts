"use server";

export const getData = async (url: string) => {
  const res = await fetch(url);
  const data = res.json();
  return data;
};
