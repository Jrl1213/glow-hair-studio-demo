/**
 * EDIT THIS FILE to reuse the demo for another business.
 * The WhatsApp number below is a placeholder. Replace it before using this site
 * to accept real bookings. Use country code 60, with no +, spaces, or leading 0.
 */
export const business = {
  name: "Glow Hair Studio",
  whatsappNumber: "60123456789", // PLACEHOLDER MALAYSIAN NUMBER — replace this one value.
  whatsappMessage:
    "Hi Glow Hair Studio! I found your website and would like to make a booking.",
  tagline: "Good hair days start here.",
  description:
    "Thoughtful cuts, beautiful colour, and a little time just for you. Your new favourite hair day is waiting in Cyberjaya.",
  address: "Cyberjaya, Selangor",
  hours: {
    days: "Monday – Sunday",
    time: "10:00 AM – 8:00 PM",
  },
  services: [
    {
      name: "Haircut",
      price: "RM45",
      detail: "A fresh cut, shaped around you.",
      number: "01",
    },
    {
      name: "Hair Colour",
      price: "From RM120",
      detail: "Colour with dimension and shine.",
      number: "02",
    },
    {
      name: "Hair Treatment",
      price: "From RM80",
      detail: "A little extra love for your hair.",
      number: "03",
    },
    {
      name: "Wash & Blow",
      price: "RM35",
      detail: "Smooth, polished, ready to go.",
      number: "04",
    },
  ],
  // Swap these local files for your own photos in /public/images, then edit the paths here.
  photos: {
    hero: "/images/hero.webp",
    gallery: [
      {
        src: "/images/gallery-cut.webp",
        alt: "Demo photo of a layered haircut",
        label: "The cut",
      },
      {
        src: "/images/gallery-colour.webp",
        alt: "Demo photo of hair colour",
        label: "The colour",
      },
      {
        src: "/images/gallery-studio.webp",
        alt: "Demo photo of a salon interior",
        label: "The studio",
      },
    ],
  },
} as const;

export const whatsappUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
  business.whatsappMessage,
)}`;

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  business.address,
)}`;
