import "./App.css";
import React, { useState } from "react";

function App() {
  const [createdata, Setcreatedata] = useState({
    image: "",
    name: "",
    genre: "",
    system: "",
    release_date: ""
  });
  const [favorite, Setfavorite] = useState([]);
  const [gamedata, Setgamedata] = useState([
    {
      id: 1,
      image: "https://i.gadgets360cdn.com/large/Battlefield_2042_trailer_1623328608655.jpg?downsize=350:*",
      name: "Battlefield 2042",
      genre: "FPS",
      system: "Steam, Xbox, Playstation",
      release_date:"November 19, 2021"
    },

    {
      id: 2,
      image: "data:image/jpeg;base64,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",
      name: "Halo infinite",
      genre: "First-person shooter, Adventure game",
      system: "Xbox",
      release_date:"November 15, 2021"
    },

    {
      id: 3,
      image: "data:image/jpeg;base64,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",
      name: "Call of duty vanguard",
      genre: "FPS",
      system: "Xbox, Playstation",
      release_date:"November 5, 2021"
    },
    {
      id: 4,
      image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1088850/header.jpg?t=1634677323",
      name: "Guardians of the galaxy",
      genre: "Action-adventure game, Adventure",
      system: "Windows",
      release_date:"October 26, 2021"
    },
    {
      id: 5,
      image: "https://cdn.player.one/sites/player.one/files/styles/lg/public/2021/05/28/dying-light-2-stay-human.jpg",
      name: "Dying light 2",
      genre: "Survival horror, Platform game, Action role-playing game, Fighting game",
      system: "Xbox, Playstation, Nintentdo, Windows",
      release_date:"February 4, 2022"
    },
  ]);

  function rendergame(game) {
    let favorited = favorite.find((fav) => fav.id == game.id);
    let favbutton;
    if (favorited)
      favbutton = (
        <button
          onClick={(e) =>
            Setfavorite(favorite.filter((otherGame) => otherGame.id != game.id))
          }
        >
          Unfavorite!
        </button>
      );
    else
      favbutton = (
        <button onClick={(e) => Setfavorite([...favorite, game])}>
          Favorite!
        </button>
      );

    return (
      <div key={game.id}>
        <img src={game.image} />
        <h2>Name: {game.name}</h2>
        <h2>Genre: {game.genre}</h2>
        <h2>System: {game.system}</h2>
        <h2>Release date: {game.release_date}</h2>
        <button
          onClick={(e) =>
            Setgamedata(gamedata.filter((otherGame) => otherGame.id != game.id))
          }
        >
          DELETE!
        </button>
        {favbutton}
      </div>
    );
  };

  return (
    <div className="App">

<input
        type="text"
        name="image"
        placeholder="Image"
        className="input-image"
        value={createdata.image}
        onChange={(e) => Setcreatedata({ ...createdata, image: e.target.value })}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="input-text"
        value={createdata.name}
        onChange={(e) => Setcreatedata({ ...createdata, name: e.target.value })}
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        className="input-text"
        value={createdata.genre}
        onChange={(e) =>
          Setcreatedata({ ...createdata, genre: e.target.value })
        }
      />
      <input
        type="text"
        name="system"
        placeholder="System"
        className="input-text"
        value={createdata.system}
        onChange={(e) =>
          Setcreatedata({ ...createdata, system: e.target.value })
        }
      />
            <input
        type="text"
        name="Release Date"
        placeholder="Release Date"
        className="input-text"
        value={createdata.release_date}
        onChange={(e) => Setcreatedata({ ...createdata, release_date: e.target.value })}
      />

      <button
        onClick={(e) =>
          Setgamedata([...gamedata, { ...createdata, id: gamedata.length + 1 }])
        }
      >
        
        Add new game!
      </button>
      <h1 name="gameList">Games</h1>
      {gamedata.map(rendergame)}
      <h1 name="favList">Favorites</h1>
      {favorite.map(rendergame)}

    
    </div>
  );
}

export default App;
