export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  poster: string;
  src: string;
};

export const EYEBROW = "Client Words";
export const HEADING = "What clients say";
export const SUPPORT = "Real feedback from businesses I've built systems for.";

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jaden",
    role: "Business Owner",
    quote: "His operations level is top tier, his skill level is top tier.",
    poster:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a94c035934a62aec89d30d8.png",
    src: "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a94b4990914f112152699f8.mp4",
  },
  {
    name: "Joseph",
    role: "Business Owner",
    quote:
      "He thinks strategically, communicates clearly, and constantly delivers on time.",
    poster:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a94c035934a62aec89d30dc.png",
    src: "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a94b4a3a90361de8b589d36.mp4",
  },
  {
    name: "Alicia",
    role: "Business Owner",
    quote:
      "He brings a sense of calm. He always figures it out and gets it done.",
    poster:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a94c0357fb05fdeb806fa26.png",
    src: "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a94b4a9a90361de8b589d96.mp4",
  },
];
