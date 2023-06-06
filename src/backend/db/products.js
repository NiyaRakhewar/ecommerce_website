import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    product_name: "The Ordinary Natural",
    product_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11396687-3915023393147860.jpg",
    product_type: "Moisturiser",
    product_category: "skin-care",
    product_price: 500,
    product_rating: 5,
    description: "A natural moisturizer for hydrated skin.",
    size: "50ml"
  },
  {
    _id: uuid(),
    product_name: "Wow Red Onion",
    product_url: "https://m.media-amazon.com/images/I/7187Bk9eobL._SL1500_.jpg",
    product_type: "Shampoo",
    product_category: "hair-care",
    product_price: 200,
    product_rating: 4,
    description: "A shampoo infused with red onion extract for strong and healthy hair.",
    size: "300ml"
  },
  {
    _id: uuid(),
    product_name: "PIXI Hydrating",
    product_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11200046-2124969280290599.jpg",
    product_type: "Serum",
    product_category: "skin-care",
    product_price: 700,
    product_rating: 4,
    description: "A hydrating serum that nourishes and plumps the skin.",
    size: "30ml"
  },
  {
    _id: uuid(),
    product_name: "Darphin Intral",
    product_url: "https://static.thcdn.com/images/large/webp/productimg/1600/1600/11089773-5119951755791938.jpg",
    product_type: "Serum",
    product_category: "skin-care",
    product_price: 600,
    product_rating: 4,
    description: "A soothing serum for sensitive skin.",
    size: "50ml"
  },
  {
    _id: uuid(),
    product_name: "Loreal Paris Hyaluronic",
    product_url: "https://m.media-amazon.com/images/I/7187Bk9eobL._SL1500_.jpg",
    product_type: "Shampoo",
    product_category: "hair-care",
    product_price: 150,
    product_rating: 5,
    description: "A shampoo enriched with hyaluronic acid for intense hydration.",
    size: "250ml"
  },
  {
    _id: uuid(),
    product_name: "Garnier Moisture",
    product_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11919603-1784935598322619.jpg",
    product_type: "Mask",
    product_category: "skin-care",
    product_price: 100,
    product_rating: 5,
    description: "A moisturizing mask that restores moisture and radiance to the skin.",
    size: "100ml"
  },

  {
    _id: uuid(),
    product_name: "Bioderma Atoderm ",
    product_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11688466-1355037196931859.jpg",
    product_type: "Body Wash",
    product_category: "body-care",
    product_price: 800,
    product_rating: 1,
    description: "A gentle body wash that nourishes and soothes the skin.",
    size: "250ml"
  },
  {
    _id: uuid(),
    product_name: "Mamaearth onion",
    product_url: "https://m.media-amazon.com/images/I/51PBDsrH2kL._SL1200_.jpg",
    product_type: "Conditioner",
    product_category: "hair-care",
    product_price: 350,
    product_rating: 2,
    description: "A conditioner infused with onion extract for stronger and smoother hair.",
    size: "200ml"
  },
  {
    _id: uuid(),
    product_name: "AHAVA Dead-Sea",
    product_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11286026-7244966395715932.jpg",
    product_type: "Bath Salts",
    product_category: "body-care",
    product_price: 250,
    product_rating: 2,
    description: "Dead Sea bath salts that relax and detoxify the body.",
    size: "500g"
  },

  {
    _id: uuid(),
    product_name: "Garnier Fructis",
    product_url: "https://m.media-amazon.com/images/I/51wFEV5JjwL._SY355_.jpg",
    product_type: "Conditioner",
    product_category: "hair-care",
    product_price: 150,
    product_rating: 2,
    description: "A nourishing conditioner enriched with fruity ingredients for healthier and shinier hair.",
    size: "200ml"
  },
  {
    _id: uuid(),
    product_name: "Sea Magik Salted",
    product_url: "https://static.thcdn.com/images/large/webp/productimg/1600/1600/12062261-6804657425294105.jpg",
    product_type: "Bath Salts",
    product_category: "body-care",
    product_price: 150,
    product_rating: 1,
    description: "Mineral-rich bath salts that promote relaxation and rejuvenation of the body and mind.",
    size: "500g"
  },
  {
    _id: uuid(),
    product_name: "Loreal Paris",
    product_url: "https://m.media-amazon.com/images/I/51ZCOFaCFuL._SL1000_.jpg",
    product_type: "Conditioner",
    product_category: "hair-care",
    product_price: 150,
    product_rating: 2,
    description: "A conditioner that deeply nourishes and moisturizes hair for a silky and smooth finish.",
    size: "250ml"
  },
  {
    _id: uuid(),
    product_name: "Wow coconut",
    product_url: "https://m.media-amazon.com/images/I/51mcVvPdRIL._SY355_.jpg",
    product_type: "Conditioner",
    product_category: "hair-care",
    product_price: 150,
    product_rating: 2,
    description: "A coconut-infused conditioner that hydrates and strengthens hair for enhanced shine and volume.",
    size: "300ml"
  },
  {
    _id: uuid(),
    product_name: "PIXI Retinol",
    product_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12237592-1344969286309841.jpg",
    product_type: "Eye Care",
    product_category: "skin-care",
    product_price: 150,
    product_rating: 2,
    description: "An eye care product infused with retinol to reduce the appearance of fine lines and wrinkles.",
    size: "15ml"
  },
  {
    _id: uuid(),
    product_name: "TRESemme Pro",
    product_url: "https://m.media-amazon.com/images/I/513la3IsNNL._SL1000_.jpg",
    product_type: "Conditioner",
    product_category: "hair-care",
    product_price: 450,
    product_rating: 1,
    description: "A professional-grade conditioner that nourishes and strengthens hair for salon-like results.",
    size: "500ml"
  },
  {
    _id: uuid(),
    product_name: "Molton Brown Black",
    product_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/10881872-9384931143761717.jpg",
    product_type: "Body Wash",
    product_category: "body-care",
    product_price: 850,
    product_rating: 2,
    description: "A luxurious body wash that cleanses and nourishes the skin with a captivating fragrance.",
    size: "300ml"
  },
  {
    _id: uuid(),
    product_name: "Trilogy Organic",
    product_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/10557481-1544926228039666.jpg",
    product_type: "Oil",
    product_category: "body-care",
    product_price: 850,
    product_rating: 2,
    description: "An organic oil that hydrates and revitalizes the skin, leaving it smooth and radiant.",
    size: "30ml"
  },
  {
    _id: uuid(),
    product_name: "DHC cleaning oil",
    product_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11207443-2214866130380732.jpg",
    product_type: "Cleanser",
    product_category: "skin-care",
    product_price: 950,
    product_rating: 4,
    description: "A gentle cleansing oil that effectively removes makeup and impurities without stripping the skin.",
    size: "200ml"
  },
  {
    product_name: "PIXI Rose Oil",
    product_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11200047-2484969280385258.jpg",
    product_type: "Oil",
    product_category: "skin-care",
    product_price: 450,
    product_rating: 3,
    description: "A nourishing facial oil infused with rose extracts to hydrate and revitalize the skin.",
    size: "30ml"
  },
  {
    _id: uuid(),
    product_name: "PIXI Vitamin-C",
    product_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12040123-1884969284648897.jpg",
    product_type: "Cleanser",
    product_category: "skin-care",
    product_price: 350,
    product_rating: 3,
    description: "A refreshing cleanser enriched with vitamin C to brighten the complexion and promote a healthy glow.",
    size: "150ml"
  },
  {
    _id: uuid(),
    product_name: "Mamaearth Onion",
    product_url: "https://m.media-amazon.com/images/I/513nPRdxuQL._SL1200_.jpg",
    product_type: "Shampoo",
    product_category: "hair-care",
    product_price: 400,
    product_rating: 3,
    description: "A strengthening shampoo infused with the goodness of onion extracts to promote hair growth and reduce hair fall.",
    size: "250ml"
  }
]

