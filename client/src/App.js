import "./App.css";
import React, { useState } from "react";

function App() {
  const [createdata, Setcreatedata] = useState({
    image: "",
    name: "",
    genre: "",
    system: "",
    release_date: "",
  });
  const [favorite, Setfavorite] = useState([]);
  const [search, SetSearch] = useState("");
  const [saledata, Setsaledata] = useState([
    {
      id: 1,
      image:
        "https://hb.imgix.net/2816d415ab38d210ed7fad66fd14456a7d35b907.PNG?auto=compress,format&fit=crop&h=353&w=616&s=6262e6833cd2b38433cd344f466ded0c",
      name: "DESTINY 2: LEGENDARY EDITION",
      genre: "Action,Adventure,FPS,MMO",
      system: "Steam,Windows",
      Original_price: "$79.99",
      Sale_price: "$39.99",
      Sale_link:
        "https://www.humblebundle.com/store/destiny-2-legendary-edition",
    },
    {
      id: 2,
      image:
        "https://hb.imgix.net/bdf1178b40ee7c325d2c73346a67bbd559ce3b4c.jpg?auto=compress,format&fit=crop&h=353&w=616&s=37f28cb68c54f2d4fac280763b4db807",
      name: "BORDERLANDS 3 ULTIMATE EDITION",
      genre: "Action,RPG,FPS",
      system: "Steam, Epic Games, Mac, Windows",
      Original_price: "$99.99",
      Sale_price: "$39.99",
      Sale_link:
        "https://www.humblebundle.com/store/borderlands-3-ultimate-edition",
    },
    {
      id: 3,
      image:
        "https://hb.imgix.net/af6c4e021bd3abf17b3ba1ea6268795291ccb793.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=e3d8be2b2f42c1f70bde31919e1f1e95",
      name: "7 DAYS TO DIE",
      genre: "RPG, Survival horror, Adventure, Strategy",
      system: "Steam, Linux, Mac, Windows",
      Original_price: "$24.99",
      Sale_price: "$7.49",
      Sale_link:
        "https://www.humblebundle.com/store/borderlands-3-ultimate-edition",
    },
    {
      id: 4,
      image:
        "https://hb.imgix.net/57f446ce1e6f53562f941e09794858d8d26e881a.jpg?auto=compress,format&fit=crop&h=353&w=616&s=496197049c45656a7ad135bde8bd2e69",
      name: "BATMAN™: ARKHAM COLLECTION",
      genre: "Action, Adventure",
      system: "Steam, Windows",
      Original_price: "$59.99",
      Sale_price: "$11.99",
      Sale_link: "https://www.humblebundle.com/store/batman-arkham-collection",
    },
    {
      id: 5,
      image:
        "https://hb.imgix.net/4efb6139ef9c0a78a25ccd5bce42c035142d2afe.jpg?auto=compress,format&fit=crop&h=353&w=616&s=7e2357b45e96ece804b93b7c40b985bd",
      name: "XCOM® ULTIMATE COLLECTION",
      genre: "Strategy,Action",
      system: "Steam, Windows",
      Original_price: "$148.99",
      Sale_price: "$19.81",
      Sale_link: "https://www.humblebundle.com/store/xcom-ultimate-collection",
    },
  ]);
  const [gamedata, Setgamedata] = useState([
    {
      id: 1,
      image:
        "https://i.gadgets360cdn.com/large/Battlefield_2042_trailer_1623328608655.jpg?downsize=350:*",
      name: "Battlefield 2042",
      genre: "FPS",
      system: "Steam, Xbox, Playstation",
      release_date: "November 19, 2021",
    },

    {
      id: 2,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/halo_infinite.jpg",
      name: "Halo infinite",
      genre: "First-person shooter, Adventure game",
      system: "Xbox",
      release_date: "November 15, 2021",
    },

    {
      id: 3,
      image:
        "https://news.xbox.com/en-us/wp-content/uploads/sites/2/2021/09/Vanguard_Beta_X1_Wire_Hero_1920x1080.jpg",
      name: "Call of duty vanguard",
      genre: "FPS",
      system: "Xbox, Playstation",
      release_date: "November 5, 2021",
    },

    {
      id: 4,
      image:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1088850/header.jpg?t=1634677323",
      name: "Guardians of the galaxy",
      genre: "Action-adventure game, Adventure",
      system: "Windows",
      release_date: "October 26, 2021",
    },

    {
      id: 5,
      image:
        "https://cdn.player.one/sites/player.one/files/styles/lg/public/2021/05/28/dying-light-2-stay-human.jpg",
      name: "Dying light 2",
      genre:
        "Survival horror, Platform game, Action role-playing game, Fighting game",
      system: "Xbox, Playstation, Nintentdo, Windows",
      release_date: "February 4, 2022",
    },
  ]);
  function makefavbutton(game) {
    let favorited = favorite.find((fav) => fav.name == game.name);
    let favbutton;
    if (favorited)
      favbutton = (
        <button
          class="controlbutton"
          onClick={(e) =>
            Setfavorite(
              favorite.filter((otherGame) => otherGame.name != game.name)
            )
          }
        >
          Unfavorite!
        </button>
      );
    else
      favbutton = (
        <button
          class="controlbutton"
          onClick={(e) => Setfavorite([...favorite, game])}
        >
          Favorite!
        </button>
      );
    return favbutton;
  }
  function rendergame(game) {
    let favbutton = makefavbutton(game);

    return (
      <div
        class="Game"
        key={game.id}
      >
        <img class="GameImage" src={game.image} />
        <h2>{game.name}</h2>
        <p>Genre: {game.genre}</p>
        <p>System: {game.system}</p>
        <p>Release date: {game.release_date}</p>
        <button
          class="controlbutton"
          onClick={(e) =>
            Setgamedata(
              gamedata.filter((otherGame) => otherGame.name != game.name)
            )
          }
        >
          DELETE!
        </button>
        {favbutton}
      </div>
    );
  }
  function rendersales(game) {
    let favbutton = makefavbutton(game);
    return (
      <div
        class="Game"
        key={saledata.id}
      >
        <img class="GameImage" src={game.image} />
        <h2>{game.name}</h2>
        <p>Genre: {game.genre}</p>
        <p>System on sale: {game.system}</p>
        <p>Original Price: {game.Original_price} </p>
        <p>Sale Price: {game.Sale_price}</p>
        {game.Sale_link != undefined && <a href={game.Sale_link}>Sale link</a>}
        {favbutton}
      </div>
    );
  }
  function Searchfilter(game) {
    return (
      game.name.toLowerCase().includes(search) ||
      game.genre.toLowerCase().includes(search) ||
      game.system.toLowerCase().includes(search)
    );
  }
  return (
    <div class="App">
      <div class="Topbar">
        <div class="AddGame">
          <input
            type="text"
            name="image"
            placeholder="Image"
            class="input-image"
            value={createdata.image}
            onChange={(e) =>
              Setcreatedata({ ...createdata, image: e.target.value })
            }
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            class="input-text"
            value={createdata.name}
            onChange={(e) =>
              Setcreatedata({ ...createdata, name: e.target.value })
            }
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            class="input-text"
            value={createdata.genre}
            onChange={(e) =>
              Setcreatedata({ ...createdata, genre: e.target.value })
            }
          />
          <input
            type="text"
            name="system"
            placeholder="System"
            class="input-text"
            value={createdata.system}
            onChange={(e) =>
              Setcreatedata({ ...createdata, system: e.target.value })
            }
          />
          <input
            type="text"
            name="Release Date"
            placeholder="Release Date"
            class="input-text"
            value={createdata.release_date}
            onChange={(e) =>
              Setcreatedata({ ...createdata, release_date: e.target.value })
            }
          />

          <button
            onClick={(e) =>
              Setgamedata([
                ...gamedata,
                { ...createdata, id: gamedata.length + 1 },
              ])
            }
          >
            Add new release!
          </button>
        </div>

        <div class="Search">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Search for a game"
            onChange={(e) => SetSearch(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      <div class="Content">
        <div class="GameList">
          <h1 class="GameListTitle"> Games soon to be released! </h1>
          {gamedata.filter(Searchfilter).map(rendergame)}
        </div>

        <div class="GameList">
          <h1 class="GameListSalesTitle"> Games on sale! </h1>
          {saledata.filter(Searchfilter).map(rendersales)}
        </div>

        <div class="GameList">
          <h1 class="GameListTitle"> Favorites! </h1>
          {favorite.filter(Searchfilter).map((game) => {
            if (game.Original_price != undefined) {
              return rendersales(game);
            } else {
              return rendergame(game);
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
