"use client";
import ProductDetailsCard from "@/components/ProductDetailsCard";
import Image from "next/image";
import { useRef } from "react";
import {Phone, Network, LocateIcon} from "lucide-react";


export default function ProductDetailsPage({
  params,
}: {
  params: { category: string; id: string };
}) {


    const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // adjust as needed
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };



  const product = {
  name: "Classic Denim Jacket",
  price: 4999,
  sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"], // standard clothing sizes
  colors: ["red", "pink", "green", "yellow", "white", "black", "blue", "navy"], // clothing colors
  image: "/model3.jpg",
  description: "Premium denim jacket for all seasons, durable and stylish.",
  images: [
    { src: "/model2.jpg", alt: "Classic Denim Jacket Front" },
    { src: "/model4.jpg", alt: "Classic Denim Jacket Back" },
    { src: "/woman1.jpg", alt: "Closeup of Denim Fabric" },
    { src: "/model5.jpg", alt: "Closeup of Denim Fabric" },
    { src: "/model6.jpg", alt: "Closeup of Denim Fabric" },
    { src: "/model7.jpg", alt: "Closeup of Denim Fabric" },
  ],
  keyFeatures: [
    "Material: 100% premium denim cotton – soft yet durable",
    "Fit: Regular fit, comfortable for everyday wear",
    "Season: Suitable for all seasons",
    "Design: Button-front with adjustable cuffs",
    "Pockets: Two chest pockets and two side pockets",
    "Care: Machine washable, color-safe",
    "Sustainability: Eco-friendly dyeing process",
    "Warranty: 1-year manufacturer warranty on stitching",
  ],
  benefits: [
    "Stylish and versatile wardrobe essential",
    "Durable material ensures long-lasting wear",
    "Comfortable fit for daily activities",
    "Easy to pair with casual or semi-formal outfits",
  ],
  delivery: [
    {
      region: "Colombo & Suburbs",
      time: "2–4 working days",
      fee: "FREE",
    },
    {
      region: "Western, Central & Southern Provinces",
      time: "4–6 working days",
      fee: "LKR 300 – LKR 500",
    },
    {
      region: "Northern & Eastern Provinces",
      time: "5–8 working days",
      fee: "LKR 500 – LKR 700",

    },
  ],
  contact: {
    phone: "+94 7X XXX XXXX",
    website: "www.fashionhub.lk",
    showrooms: "Colombo, Kandy & Galle",
  },
};


  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Product Card */}
        <div className="md:w-1/2">
          <ProductDetailsCard
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            sizes={product.sizes}
            colors={product.colors}
          />
        </div>

        {/* Right Column: Images & Details */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Image Gallery */}
          <div className="flex gap-4 overflow-x-auto py-2 scrollbar-hide">
            {product.images.map((img, index) => (
                <div
                key={index}
                className="relative flex-shrink-0 w-64 h-64 md:w-72 md:h-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                </div>
            ))}
            </div>


          {/* Product Description */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {product.keyFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Benefits</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {product.benefits.map((benefit, idx) => (
                <li key={idx}>✅ {benefit}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Price</h2>
            <p className="text-gray-800 mb-2">
              LKR {product.price.toLocaleString()} (including mattress & accessories)
            </p>
            <p className="text-gray-600 mb-4">
              EMI payment options available for 6, 12, and 18 months
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Delivery & Installation (All Over Sri Lanka)</h2>
            <div className="space-y-3 text-gray-700">
              {product.delivery.map((d, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded border border-gray-200">
                  <p className="font-semibold">{d.region}</p>
                  <p>Delivery Time: {d.time}</p>
                  <p>Delivery Fee: {d.fee}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-gray-600 text-sm">
              All products are securely packed. You will receive a tracking number once dispatched. Same-day delivery available for Colombo (extra charges). Our team unpacks, assembles, and positions the bed at your home.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-3">Order & Contact</h2>
            <p className="flex items-center gap-2 mb-2"><Phone className="h-5 W-2"/> Call/WhatsApp: {product.contact.phone}</p>
            <p className="flex items-center gap-2 mb-2"><Network /> Website: {product.contact.website}</p>
            <p className="flex items-center gap-2"><LocateIcon/> Showrooms: {product.contact.showrooms}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


        
