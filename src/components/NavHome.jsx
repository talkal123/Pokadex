import React, { useState } from "react";
import { Input } from "./ui/input";
import { Link } from "react-router";
import { MdOutlineKeyboardBackspace } from "react-icons/md";


const NavHome = ({ dataAll }) => {
  const [search, setSearch] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value.toLowerCase().trim();
    setSearch(input);

    if (input === "") {
      setIsDisplay(false);
    } else {
      setIsDisplay(true);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:flex justify-between p-5">
      <div className="flex flex-col gap-2">
        <div>
          <Link to={"/"}>
            <MdOutlineKeyboardBackspace className="w-7 h-7 cursor-pointer" />
          </Link>
        </div>
        <div className="font-bold text-3xl">Pokedex</div>
      </div>
      <div className="relative">
        <Input
          className="bg-white "
          onChange={handleChange}
          value={search}
          placeholder="Search pokemon..."
        />

        {isDisplay && (
          <div className="bg-white z-20 absolute w-full rounded-lg mt-2 max-h-60 overflow-y-auto">
            {dataAll
              .filter((pokemon) =>
                pokemon.name
                  .toLowerCase()
                  .includes(search.trim().toLowerCase())
              )
              .map((pokemon) => (
                <Link to={`/${pokemon.id}`} key={pokemon.id}>
                  <div className="p-4 hover:bg-gray-100 cursor-pointer flex gap-4 rounded-lg shadow-md transition-all duration-200 ease-in-out">
                    <img
                      src={pokemon.image}
                      alt={pokemon.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-center w-full max-w-[calc(100%-4rem)]">
                      <div className="font-semibold text-lg text-gray-800 truncate">
                        {pokemon.name}
                      </div>
                      <div className="text-sm text-gray-500 truncate">
                        {pokemon.type || "No type"}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavHome;
