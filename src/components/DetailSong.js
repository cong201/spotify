import React, { useContext } from "react";
import { Songs } from "../content";

export default function Detailsong() {
  const { song } = useContext(Songs);

  return (
    <div className="col-span-1 p-3">
      <h2 className=" lg:text-green-300 font-bold">Now Playing</h2>
      <h2 className="lg:text-2xl text-teal-400 md:text-base  sm:text-sm ">
        {" "}
        {song.name}
      </h2>
      <div className="lg:w-[240px] m-auto mt-10 md:w-[120] m-auto mt-5 sm:md:w-[80] m-auto mt-5">
        <img src={song.links.images[0].url} alt="avtar" />
      </div>
      <div className="flex justify-evenly items-center  mt-10 ">
        <img
          className="w-[70px] rounded-full "
          src={song.links.images[1].url}
          alt="avtar"
        />
        <span className="text-white text-xl">{song.author}</span>
      </div>
    </div>
  );
}
