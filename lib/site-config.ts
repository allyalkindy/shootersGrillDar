export const siteConfig = {
  name: "Shooters Grill",
  tagline: "Steakhouse & Bar",
  established: 2002,
  descriptor:
    "Dar es Salaam's rooftop steakhouse — prime cuts, an open flame, and the city laid out beneath you.",
  city: "Dar es Salaam",
  neighborhood: "Oyster Bay",
  address: {
    line1: "1196 Haile Selassie Road",
    line2: "Oyster Plaza, 6th Floor",
    line3: "Oyster Bay, Dar es Salaam, Tanzania",
    mapsQuery: "Oyster Plaza, Haile Selassie Road, Dar es Salaam",
  },
  phone: {
    display: "+255 754 880 160",
    tel: "+255754880160",
    whatsapp: "255754880160",
  },
  email: "reservations@shootersgrill.co.tz",
  instagram: {
    handle: "@shooters_grill_dar",
    url: "https://www.instagram.com/shooters_grill_dar/",
  },
  hours: [
    { label: "Monday — Thursday", value: "12:00 — 23:00" },
    { label: "Friday — Saturday", value: "12:00 — 01:00" },
    { label: "Sunday", value: "12:00 — 22:30" },
  ],
  kitchenNote: "Kitchen closes 45 minutes before last call.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
] as const;
