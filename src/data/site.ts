/* Centralt innehåll & konfiguration för Jopas Honung.
   Här bor navigering, kontaktuppgifter och listor så att texter kan
   uppdateras på ett ställe. */

export interface NavItem {
  label: string;
  to: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Hem", to: "/" },
  { label: "Om oss", to: "/om-oss" },
  { label: "Honungen", to: "/honungen" },
  { label: "Produkter", to: "/produkter" },
  { label: "Återförsäljare", to: "/aterforsaljare" },
  { label: "Kontakt", to: "/kontakt" },
];

export const CONTACT = {
  company: "Jopas bisyssla",
  brand: "Jopas Honung",
  phone: "0709 – 69 45 27",
  phoneHref: "tel:+46709694527",
  email: "hej@jopashonung.se",
  emailHref: "mailto:hej@jopashonung.se",
  region: "Söderåsen, Skåne",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
};

export interface Product {
  id: string;
  name: string;
  season: string;
  tagline: string;
  description: string;
  notes: string[];
  image?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "forsommar",
    name: "Försommarhonung",
    season: "Maj – Juni",
    tagline: "Ljus, mild och blommig",
    description:
      "Årets första skörd med inslag av raps och tidiga vårblommor. Krämig konsistens och en rund, mild sötma som passar lika bra på mackan som i teet.",
    notes: ["Ljus färg", "Krämig", "Mild raps"],
  },
  {
    id: "sommar",
    name: "Sommarhonung",
    season: "Juli – Augusti",
    tagline: "Fyllig och gyllene",
    description:
      "Slungad när sommarängarna står i full blom. Klöver, lind och vilda örter ger en djupare, gyllene honung med tydlig karaktär.",
    notes: ["Gyllene", "Fyllig", "Blomsteräng"],
  },
  {
    id: "ljunghonung",
    name: "Ljunghonung",
    season: "Sept – Okt",
    tagline: "Mörk, kryddig och rar",
    description:
      "Vår mest karaktärsfulla honung, samlad från ljungen på åsens hedar. Mörk, nästan geléaktig med en kryddig, lätt beska. Fås i begränsad mängd.",
    notes: ["Mörk", "Kryddig", "Begränsad"],
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  status?: "available" | "coming";
}

export const SERVICES: Service[] = [
  {
    id: "honung",
    title: "Honung",
    description:
      "Lokalproducerad, oförädlad honung från våra egna kupor. Säljs i burk direkt från gården, på marknader och hos utvalda återförsäljare.",
    status: "available",
  },
  {
    id: "pollinering",
    title: "Pollinering",
    description:
      "Vi placerar ut bisamhällen hos odlare och lantbrukare under blomningen. Fler bin ger bättre skörd – och friskare landskap.",
    status: "available",
  },
  {
    id: "bisamhallen",
    title: "Försäljning av bisamhällen",
    description:
      "Vi säljer starka, friska bisamhällen till både nya och erfarna biodlare, med rådgivning på vägen för den som är ny i yrket.",
    status: "available",
  },
  {
    id: "vax",
    title: "Bivax",
    description:
      "Rent bivax från vår egen produktion – till ljus, salvor och vaxdukar. Lanseras inom kort i mindre partier.",
    status: "coming",
  },
];

export interface Retailer {
  id: string;
  name: string;
  type: string;
  location: string;
  note?: string;
}

export const RETAILERS: Retailer[] = [
  {
    id: "gardsbod",
    name: "Gårdsboden vid Söderåsen",
    type: "Gårdsbutik",
    location: "Söderåsen",
    note: "Självplock och färsk honung direkt från källaren.",
  },
  {
    id: "lanthandel",
    name: "Åsens Lanthandel",
    type: "Lanthandel",
    location: "Skåne",
    note: "Hela sortimentet, säsong för säsong.",
  },
  {
    id: "delikatess",
    name: "Skånska Delikatesser",
    type: "Delikatessbutik",
    location: "Helsingborg",
  },
  {
    id: "cafe",
    name: "Café Bikupan",
    type: "Café",
    location: "Klippan",
    note: "Servering med vår honung i fikat.",
  },
];

export interface MarketEvent {
  id: string;
  date: string;
  day: string;
  title: string;
  place: string;
}

export const MARKETS: MarketEvent[] = [
  {
    id: "m1",
    date: "14 SEP",
    day: "Lördag",
    title: "Skördemarknad på Söderåsen",
    place: "Torget, 10–15",
  },
  {
    id: "m2",
    date: "28 SEP",
    day: "Lördag",
    title: "Höstmarknad i Klippan",
    place: "Centrum, 11–16",
  },
  {
    id: "m3",
    date: "12 OKT",
    day: "Söndag",
    title: "Bondens marknad",
    place: "Helsingborg, 10–14",
  },
];
