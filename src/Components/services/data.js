export const productsList = {
  "Skin Care": [
    {
      id: 1,
      name: "Hydrating Glow Serum",
      unitPrice: 25,
      ingredients: ["Hyaluronic Acid", "Vitamin C", "Aloe Vera"],
      soldOut: false,
      imageUrl: "/images/hydrating-glow-serum.jpg",
    },
    {
      id: 2,
      name: "Renewal Night Cream",
      unitPrice: 30,
      ingredients: ["Retinol", "Shea Butter", "Peptides"],
      soldOut: false,
      imageUrl: "/images/renewal-night-cream.jpg",
    },
  ],
  Makeup: [
    {
      id: 3,
      name: "Matte Liquid Lipstick",
      unitPrice: 18,
      shades: ["Red Velvet", "Nude Blush", "Deep Plum"],
      soldOut: false,
      imageUrl: "/images/matte-liquid-lipstick.jpg",
    },
    {
      id: 4,
      name: "Flawless Finish Foundation",
      unitPrice: 28,
      shades: ["Ivory", "Beige", "Mocha"],
      soldOut: true,
      imageUrl: "/images/flawless-foundation.jpg",
    },
  ],
  "Exclusive Sets": [
    {
      id: 5,
      name: "Ultimate Skincare Collection",
      unitPrice: 75,
      items: ["Glow Serum", "Night Cream", "SPF Moisturizer"],
      soldOut: false,
      imageUrl: "/images/skincare-collection.jpg",
    },
  ],
  "Best Sellers": [
    {
      id: 6,
      name: "Luminous Highlighter Palette",
      unitPrice: 35,
      features: ["4 Shimmer Shades", "Buildable Glow"],
      soldOut: false,
      imageUrl: "/images/highlighter-palette.jpg",
    },
  ],
  "New Arrivals": [
    {
      id: 7,
      name: "Silk Touch Setting Powder",
      unitPrice: 22,
      features: ["Oil Control", "Blurring Effect"],
      soldOut: false,
      imageUrl: "/images/setting-powder.jpg",
    },
  ],
};

export let orders = [];
