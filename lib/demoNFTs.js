import images from "../img";

// Showcase NFTs used when the marketplace contract can't be reached
// (no wallet installed, wrong network, or the contract isn't deployed there).
const pick = (img) => (img && img.src ? img.src : img);

const sellers = [
  "0x829BD824B016326A401d083B33D092293333A830",
  "0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a",
  "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
  "0x90F79bf6EB2c4f872365E785982E1f101E93b906",
];

const demo = [
  ["Renga", images.nft_image_1, "1.25", 0],
  ["Ape Monkey", images.nft_image_2, "2.00", 1],
  ["Hey Monkey", images.nft_image_3, "0.85", 2],
  ["Cosmic Drift", images.nft_1, "3.10", 3],
  ["Neon Kitty", images.nft_image_2, "0.60", 0],
  ["Moon Ape", images.nft_image_1, "1.75", 1],
  ["Jungle Spirit", images.nft_image_3, "0.95", 2],
  ["Virtual Dreams", images.nft_1, "2.40", 3],
];

export const demoNFTs = demo.map(([name, img, price, s], i) => ({
  tokenId: i + 1,
  name,
  image: pick(img),
  price,
  seller: sellers[s],
  owner: sellers[s],
  description: `${name} is a showcase item on the marketplace.`,
  tokenURI: "",
  demo: true,
}));
