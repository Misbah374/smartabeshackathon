/** @format */

// JSON-LD Schema for Smart ABES Hackathon
export const hackathonSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Smart ABES Hackathon 2025 - The Missing Piece",
  description:
    "A hackathon about building projects that work better because of Data Structures and Algorithms",
  url: "https://smartabeshackathon.tech",
  image: "https://smartabeshackathon.tech/logo.png",
  startDate: "2025-01-26",
  endDate: "2025-01-27",
  eventStatus: "EventScheduled",
  eventAttendanceMode: "OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "ABES Institute",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "ABES Institute",
    url: "https://smartabeshackathon.tech",
    logo: "https://smartabeshackathon.tech/logo.png",
  },
  offers: {
    "@type": "Offer",
    url: "https://devnovate.co/event/sah-20",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    validFrom: "2025-01-01",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Smart ABES Hackathon",
  url: "https://smartabeshackathon.tech",
  logo: "https://smartabeshackathon.tech/logo.png",
  description:
    "The Missing Piece - A Data Structures and Algorithms focused hackathon",
  sameAs: [
    "https://discord.gg/ZCUdP4nwDh",
    "https://chat.whatsapp.com/JtmozxCOd2mEojTONjOn7c",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    url: "https://smartabeshackathon.tech/contacts",
  },
};
