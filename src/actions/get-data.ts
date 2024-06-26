"use server";

export const getData = async (url: string) => {
  console.log("getData");
  const res = await fetch(url);
  const data = res.json();
  return data;
};
