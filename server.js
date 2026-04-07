const express = require("express");
const app = express();

const catalogue = [
  { id: 1, nom: "Super Nintendo", prix: 120, stock: 5, annee: 1990 },
  { id: 2, nom: "Sega Mega Drive", prix: 90, stock: 0, annee: 1988 },
  { id: 3, nom: "PlayStation 1", prix: 75, stock: 12, annee: 1994 },
  { id: 4, nom: "Game Boy", prix: 45, stock: 3, annee: 1989 },
  { id: 5, nom: "Neo Geo", prix: 350, stock: 1, annee: 1990 }
]

app.listen(8080, () => {
    console.log("Serveur démarré sur le port 8080"); 
})

app.get("/", (req, res) => {
    res.send("Bienvenue sur Rétro Gaming Manager");
})

app.get("/consoles", (req, res) => {
    res.json(catalogue)
})