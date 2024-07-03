import boatIcon from "../assets/boatIcon.png";
import planeIcon from "../assets/planeIcon.png";
import truckIcon from "../assets/truckIcon.png";
import inlandIcon from "../assets/inlandIcon.png";
import otherIcon from "../assets/otherIcon.png";
import contractIcon from "../assets/contractIcon.png";
import customIcon from "../assets/customIcon.png";

import financialIcon from "../assets/financialIcon.png";
import galleryIcon from "../assets/galleryIcon.png";
import newsIcon from "../assets/newsIcon.png";
import orgIcon from "../assets/orgIcon.png";
import visionIcon from "../assets/visionIcon.png";
import whoIcon from "../assets/whoIcon.png";

export interface I_SubCategory {
  title: string;
  link: string;
  icon?: string; // Optional because not all subcategories have an icon
  description?: string; // Optional because not all subcategories have a description
}

export interface I_MenuCategory {
  category: string;
  subCategory: I_SubCategory[];
}

export const menuCategories: I_MenuCategory[] = [
  {
    category: "The Company",
    subCategory: [
      { title: "Who we are", link: "/thecompany/whoweare", icon: whoIcon },
      { title: "Our Vision", link: "/thecompany/ourvision", icon: visionIcon },
      {
        title: "Organization Chart",
        link: "/thecompany/organizationchart",
        icon: orgIcon,
      },
      {
        title: "News & Updates",
        link: "/thecompany/newsandupdates",
        icon: newsIcon,
      },
      {
        title: "Financial Data",
        link: "/thecompany/financialdata",
        icon: financialIcon,
      },
      { title: "Gallery", link: "/thecompany/gallery", icon: galleryIcon },
    ],
  },
  {
    category: "Services",
    subCategory: [
      {
        title: "Road Transports",
        link: "/services/roadtransports",
        icon: truckIcon,
        description:
          "Our road services connect all major cities of Europe to every corner of Greece, offering immediate and responsible solutions.",
      },
      {
        title: "Sea Transports",
        link: "/services/seatransports",
        icon: boatIcon,
        description:
          "With regular shipments to and from all international commercial ports, we offer the most economical options for partial and entire loads, using every type of containers.",
      },
      {
        title: "Air Transports",
        link: "/services/airtransports",
        icon: planeIcon,
        description:
          "Our experienced staff undertakes to handle loads, incoming or outgoing, of any kind, weight and volume.",
      },
      {
        title: "Other Transports",
        link: "/services/othertransports",
        icon: otherIcon,
        description:
          "Managing to comply with the total needs of its customers, our company has reached top quality service for many years.",
      },
      {
        title: "Custom Formalities Services",
        link: "/services/customformalitiesservices",
        icon: customIcon,
        description:
          "Our carefully selected partners, custom brokers, are daily in Customs of Piraeus, Athens, Thessaloniki and Athens International Airport.",
      },
      {
        title: "Inland Transport - Distribution",
        link: "/services/inlandtransportdistribution",
        icon: inlandIcon,
        description:
          "For internal transport across Greece, having at our disposal cooperating trucks of various types on a daily base, we are able to undertake receipts and deliveries at the point where the client provides us.",
      },
      {
        title: "Insurance",
        link: "/services/insurance",
        icon: contractIcon,
        description:
          "We are able to provide competitive prices for insurance coverage for the goods we transfer.",
      },
    ],
  },
  {
    category: "Useful Tools",
    subCategory: [
      { title: "Incoterms", link: "/usefultools/incoterms" },
      {
        title: "Container Specifications",
        link: "/usefultools/containerspecifications",
      },
      { title: "Converter", link: "/usefultools/converter" },
    ],
  },
];
