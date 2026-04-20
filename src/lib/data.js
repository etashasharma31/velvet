export const products = [
  { 
    id: 1, 
    title: "Midnight Fig", 
    desc: "Single Origin Dark with Fig & Orange", 
    price: "Revealing Soon", 
    img: "/products/midnight-fig.png", 
    category: 'Fruit-Infused', 
    batch: "Bar 012",
    description: "A sensory descent into the dark. Sun-ripened forest figs and blood orange zest meet 72% single-origin cacao, yielding a tart velvet finish that lingers like a soft memory.",
    tastingNotes: "Fig, Blood Orange, Honey",
    ingredients: "72% cacao, dried figs, Blood orange zest",
    offset: false 
  },
  { 
    id: 5, 
    title: "Velvet Kiwi Chocolate", 
    desc: "60g | Zesty Emerald Kiwi & 70% Dark Cacao", 
    price: "Revealing Soon", 
    img: "/products/kiwi-cinematic-v2.png", 
    images: [
      "/products/kiwi-cinematic-v2.png",
      "/products/kiwi-holding.png",
      "/products/kiwi-studio.png",
      "/products/kiwi-lifestyle.png",
      "/products/kiwi-cinematic-table.png"
    ],
    category: 'Fruit-Infused', 
    batch: "Bar 060",
    description: "A radiant fusion where the zesty, emerald brightness of sun-ripened kiwi meets our signature 70% dark cacao. Each 60g bar is a cinematic journey of contrasting textures and tart-sweet harmony.",
    tastingNotes: "Emerald Kiwi, Tart, Sweet",
    ingredients: "70% cacao, kiwi, cane sugar",
    offset: true 
  },
  { 
    id: 6, 
    title: "Velvet Pineapple & Raisin", 
    desc: "Stress Reducing Dopamine Booster", 
    price: "Revealing Soon", 
    img: "/products/pineapple-studio-new.png", 
    images: [
      "/products/pineapple-studio-new.png",
      "/products/pineapple-cinematic-new.png",
      "/products/pineapple-raisin-v2.png"
    ],
    category: 'Fruit-Infused', 
    batch: "Bar 038",
    description: "An ethereal float of tropical sweetness. Real fruit pieces and velvet-textured black raisins are suspended in a deep, dark abyss of premium 70% cacao. A stress-reducing dopamine booster designed for the refined palate.",
    tastingNotes: "Zesty Pineapple, Velvet Raisin, 70% Dark Cacao",
    ingredients: "Premium dark cacao, real dried pineapple, black raisins, natural cane sugar",
    offset: false 
  },
  { 
    id: 2, 
    title: "Amazonian Single Origin", 
    desc: "Raw Cacao, Earthy, Smoked Oak", 
    price: "Revealing Soon", 
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAr1_H666XpxyL-Any2Hnfloh8csKLgAgQJbp_sThAkhRUA9p3R-sHTJR1jHIhcMQMebI7R-6bG9JvHUuArxdz7xKaf1DTM6WYRwP-Gpe2CdyLcgfZ7WbYnibWg5nNKpsW1opOTksWozG7H8P3X2spP9Bz-skfaWCDlIVMChMH7dLb3G6DQNe3v78Akq9o_g0zaQ4gJ6Tb7eHQQgJpJebnYLNH2QFWFsa6ryhlor6cLA8Ak_EQrdabLI3Wp877Gev7LSdjR3PKvxqeM", 
    category: 'Single-Origin', 
    batch: "Bar 009",
    description: "Sourced from the deep Amazon. Raw cacao, earthy undertones, and a hint of smoked oak provide a robust and authentic profile.",
    tastingNotes: "Rooty, Earthy, Smoked Oak",
    ingredients: "Raw cacao beans, cane sugar",
    offset: true 
  },
  { 
    id: 3, 
    title: "Wild Raspberry Silk", 
    desc: "White Chocolate, Tart Fruit, Vanilla", 
    price: "Revealing Soon", 
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7Hluxdo4NEyxqbC8Xb-FbIXw0zq60_cttzG6J_aO09DYq_PxUCfh9Poa8gYC8lrsgLPeV4kXjciPTyr70hOWJM8pdOhUgPM24Xs6XUq4vZj7n5iDvav8C8hS_TxzIgCir86nGtXrIDCMGD_8CoTlDNSRDD7QqRUy2NhGuXhhA2uecY4P2OlRio0jsardZsgG7sOaEG7K2kt6lycR9cpKS-LD8Mh1fkYZac7v8dB6Zv-vaPrT_J0mREEmK_kTTjASi8W_TB9aeLb4j", 
    category: 'Fruit-Infused', 
    batch: "Bar 022",
    description: "Creamy white chocolate silk layered with the tart, vibrant acidity of wild forest raspberries. A delicate balance of sweetness and tang.",
    tastingNotes: "Raspberry, Vanilla, Cream",
    ingredients: "White chocolate, wild raspberries, vanilla beans",
    offset: false 
  },
  { 
    id: 4, 
    title: "Salted Umber", 
    desc: "Dark 85%, Maldon Salt & Roasted Hazelnut", 
    price: "Revealing Soon", 
    img: "/products/salted-umber.png", 
    category: 'Pure Dark', 
    batch: "Bar 085",
    description: "A bold 85% cacao bar enhanced by the crunchy texture of Maldon sea salt flakes and roasted hazelnuts. A deep, earthy resonance in every bite.",
    tastingNotes: "Sea Salt, Roasted Hazelnut, High Cacao",
    ingredients: "85% dark chocolate, maldon sea salt flakes, roasted hazelnuts",
    offset: true 
  },
  { 
    id: 7, 
    title: "Midnight Blackberry", 
    desc: "Coming Soon", 
    price: "Revealing Soon", 
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEbQJQfmXtjETH-sMeVigihIHwQa983_JDhvb8wxqgUqOJZRvXDg_lYbyV2LAZM02hl4J-MycIQW-7FIRe-n6tPAdAVcFhXytxtqORfd5PizuOyhUs0IhGGuoQICYM8sRf-1nG45TgmM15o_jLhWGtum3NsZ2H_bS5cuKf-HaQ1obgQRyAQ99ucW6l21Ese6ChmXysfJjxkZntxtZsUA4Js5QvOsI4dt4B9TRwJZJi3hsRcXi84tvagbtX_G-VHoBaAZe0cKoa0pNN", 
    category: 'Pure Dark', 
    isComingSoon: true 
  },
  { 
    id: 8, 
    title: "Honey Lavender", 
    desc: "Coming Soon", 
    price: "Revealing Soon", 
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1QqLA1Eb7yDgjGvWr7mNPfpQqi4IdeZbOE3_Dy0lFNTRCS0fVL4wwtOZqcB41qbIM3A0MXnfbHMzupM3BBWWf0y9jJQ5wKolU4RbVnZclcwYb_bc3Pfm6eqXZVpnTKQHx1URYvxA0SCVOwHRCGcCB1dcFmaeTj0VoZ4nWaPUb2AQoGBklIGZxu2cK3HRJahYqjLYTPCRpHFmUfuzOd7VIbYuTo2EtPk70fFriwrZ4T3eJkdiU8hjWsYlavW5yMXTMm7iGXvJH828f", 
    category: 'Single-Origin', 
    isComingSoon: true 
  },
  { 
    id: 9, 
    title: "The Velvet 12", 
    desc: "Signature Box of Assorted Truffles", 
    price: "Revealing Soon", 
    img: "/products/velvet-12.png", 
    category: 'Signature', 
    batch: "Box 001",
    description: "Our signature collection of 12 hand-rolled truffles. Each one is a unique dialogue between rare cacao and ethereal infusions.",
    tastingNotes: "Assorted, Rich, Creamy",
    ingredients: "Dark chocolate, heavy cream, assorted fruit infusions, gold leaf",
    offset: false 
  }
];
