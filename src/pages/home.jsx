import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const data = [
    {
      name: "Thibaut Courtois",
      position: "Goleiro",
      country: "be",
      image: "https://api.sofascore.app/api/v1/player/70988/image",
    },
    {
      name: "Dani Carvajal",
      position: "Lateral Direito",
      country: "es",
      image: "https://api.sofascore.app/api/v1/player/138572/image",
    },
    {
      name: "Éder Militão",
      position: "Zagueiro",
      country: "br",
      image: "https://api.sofascore.app/api/v1/player/822519/image",
    },
    {
      name: "David Alaba",
      position: "Zagueiro",
      country: "at",
      image: "https://api.sofascore.app/api/v1/player/66492/image",
    },
    {
      name: "Ferland Mendy",
      position: "Lateral Esquerdo",
      country: "fr",
      image: "https://api.sofascore.app/api/v1/player/792073/image",
    },
    {
      name: "Casemiro",
      position: "Volante Defensivo",
      country: "br",
      image: "https://api.sofascore.app/api/v1/player/122951/image",
    },
    {
      name: "Toni Kroos",
      position: "Meio-campo",
      country: "de",
      image: "https://api.sofascore.app/api/v1/player/26502/image",
    },
    {
      name: "Luka Modrić",
      position: "Meio-campo ofensivo",
      country: "hr",
      image: "https://api.sofascore.app/api/v1/player/15466/image",
    },
    {
      name: "Federico Valverde",
      position: "Meia-atacante",
      country: "uy",
      image: "https://api.sofascore.app/api/v1/player/831808/image",
    },
    {
      name: "Vinícius Júnior",
      position: "Ponta Esquerda",
      country: "br",
      image: "https://api.sofascore.app/api/v1/player/868812/image",
    },
    {
      name: "Karim Benzema",
      position: "Centroavante",
      country: "fr",
      image: "https://api.sofascore.app/api/v1/player/3306/image",
    },
  ];

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="mt-20">
      <div className="mx-auto max-w-5xl p-5 bg-opacity-10">
        <div className="text-center mb-9 text-3xl font-bold">
          Listagem de Atletas
        </div>
        <div className="flex justify-center items-center gap-3  mb-4">
          <input
            type="text"
            placeholder="Pesquisar atleta..."
            className="p-2 mt-5  border rounded-md w-96"
            value={search}
            onChange={handleSearch}
          />
        </div>
        {filteredData.length === 0 && (
          <div className="w-full text-center mt-7 text-red-500 font-bold">
            <div>Nenhum atleta encontrado</div>
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredData.map((item, index) => (
            <Link key={index} to={"/prontuario"}>
              <div className="bg-[#f3f4f6] p-5 rounded-md flex flex-col justify-center items-center shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer border">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={item.image}
                  alt="jogador"
                />
                <div className="font-bold text-base mt-2">{item.name}</div>
                <div className="text-md">{item.position}</div>
                <div className="text-md uppercase flex gap-2 justify-center items-center">
                  {item.country}
                  <img
                    src={`https://www.sofascore.com/static/images/flags/${item.country}.png`}
                    alt="flag"
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
