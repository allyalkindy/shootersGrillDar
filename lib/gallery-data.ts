export type GalleryCategory = "steak" | "bar" | "ambiance" | "kitchen" | "plates";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
  featured?: boolean;
}

const base = "/images/gallery";

export const galleryImages: GalleryImage[] = [
  { src: `${base}/036-DX_yb2kNrL3.jpg`, alt: "Golden-hour sunset over the rooftop terrace", category: "ambiance", width: 720, height: 1280, featured: true },
  { src: `${base}/009-DdG8mF_NbT5.jpg`, alt: "Steak flambeed over the open flame", category: "steak", width: 720, height: 1280, featured: true },
  { src: `${base}/043-DW83BU-jNzO.jpg`, alt: "Signature cocktail with rosemary at the bar", category: "bar", width: 720, height: 1280, featured: true },
  { src: `${base}/008-Ddb4NrvtzAn.jpg`, alt: "Grilled pork chop with rosemary garnish", category: "steak", width: 720, height: 1280 },
  { src: `${base}/016-Dbdpqnotipl.jpg`, alt: "Rosemary-crusted steak resting on the board", category: "steak", width: 720, height: 1280 },
  { src: `${base}/022-DaajfEUNjYK.jpg`, alt: "T-bone steak fresh off the grill", category: "steak", width: 720, height: 1280 },
  { src: `${base}/023-DaNlM1_tmJn.jpg`, alt: "Slow-roasted lamb shank plated with grilled vegetables", category: "plates", width: 720, height: 1280 },
  { src: `${base}/030-DYq6nE4NkBY.jpg`, alt: "Steak searing over open flame on the grill", category: "kitchen", width: 1080, height: 1920 },
  { src: `${base}/032-DZFeg2YNkel.jpg`, alt: "Flame-grilled seafood platter with calamari and lemon", category: "plates", width: 720, height: 1280 },
  { src: `${base}/034-DXO4EslDzCy.jpg`, alt: "Steaks searing over open flame on the grill", category: "kitchen", width: 1080, height: 1350 },
  { src: `${base}/038-DXWmdO1kfZl.jpg`, alt: "T-bones on the grill catching flame", category: "kitchen", width: 720, height: 1280 },
  { src: `${base}/039-DYPug2KNPEz.jpg`, alt: "Cosmopolitan cocktail at the Shooters Grill bar", category: "bar", width: 720, height: 1280 },
  { src: `${base}/042-DXJwIbcEjnU.jpg`, alt: "Table spread of grilled specialities overlooking the city", category: "plates", width: 1080, height: 1350, featured: true },
  { src: `${base}/044-DXeaqmGjTAg.jpg`, alt: "Grilled steak with fresh herb chimichurri", category: "plates", width: 720, height: 1280 },
  { src: `${base}/047-DXtoQdUjS2L.jpg`, alt: "Grilled steak plated with pan sauce", category: "steak", width: 1080, height: 1350 },
  { src: `${base}/049-DWqwkAxjaBd.jpg`, alt: "A member of the Shooters Grill team on the rooftop terrace", category: "ambiance", width: 720, height: 1280 },
  { src: `${base}/055-DWOhIKpCP8j.jpg`, alt: "Grilled pork chop plated with zucchini and rice", category: "steak", width: 1080, height: 1350 },
  { src: `${base}/060-DUk2gbUDcIb.jpg`, alt: "Glazed grilled ribs plated with pickled onion", category: "plates", width: 1080, height: 1920 },
  { src: `${base}/062-DUshMiKDTfJ.jpg`, alt: "Guests enjoying an afternoon on the rooftop terrace", category: "ambiance", width: 720, height: 1280 },
  { src: `${base}/067-DVIKxC8iM7T.jpg`, alt: "The back bar, stocked and glowing under warm light", category: "bar", width: 720, height: 1280 },
  { src: `${base}/072-DZ-XkU7N1qv.jpg`, alt: "Shooters Grill smash burger with hand-cut fries", category: "plates", width: 720, height: 1280 },
  { src: `${base}/000-DcvDmZMt-gn.webp`, alt: "Ribeye steak forged over open flame, Shooters Grill signature shot", category: "kitchen", width: 1440, height: 1440 },
];
