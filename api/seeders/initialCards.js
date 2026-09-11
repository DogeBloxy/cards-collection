const initialCards = [
  {
    name: "Pégase Seiya",
    rarity: "SR",
    level: 80,
    stars: 6,
    plus: 11,
    image: "/cards/pegase.png"
  },
  {
    name: "Lion Aiolia",
    rarity: "SSR",
    level: 80,
    stars: 6,
    plus: 11,
    image: "/cards/aiolia.png"
  },
  {
    name: "Camus",
    rarity: "SSR",
    level: 70,
    stars: 6,
    plus: 10,
    image: "/cards/camus.png"
  },
  {
    name: "Phénix Ikki",
    rarity: "SR",
    level: 60,
    stars: 6,
    plus: 7,
    image: "/cards/ikki.png"
  },
  {
    name: "Mermaid Thetis",
    rarity: "SSR",
    level: 80,
    stars: 7,
    plus: 15,
    image: "/cards/mermaid.png"
  },
  {
    name: "Saori Kido",
    rarity: "SR",
    level: 50,
    stars: 5,
    plus: 10,
    image: "/cards/saori.png"
  },
  {
    name: "Siren Sorrento",
    rarity: "SR",
    level: 65,
    stars: 6,
    plus: 7,
    image: "/cards/siren.png"
  },
  {
    name: "Lizard Misty",
    rarity: "SSR",
    level: 70,
    stars: 6,
    plus: 12,
    image: "/cards/lizard.png"
  }
];

async function seedDatabase(CardModel) {
  const count = await CardModel.count();
  if (count === 0) {
    console.log("Initialisation des données Saint Seiya dans la base de données...");
    await CardModel.bulkCreate(initialCards);
    console.log(`${initialCards.length} héros Saint Seiya initialisés avec succès.`);
  }
}

module.exports = { initialCards, seedDatabase };
