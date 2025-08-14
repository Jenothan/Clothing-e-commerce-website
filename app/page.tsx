
import Nav from "@/components/navbar";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "NOLIMIT Web Site",
  description: "Customer section of the clothing shop",
};


const products = [
    { name: "Casual Shirt", newprice: "$29.99",oriprice: "$50", image: "/model2.jpg", description: "Step up your style game with these ultra-comfortable, breathable casual sneakers. Perfect for everyday wear, they feature a lightweight design with durable soles for excellent traction. Whether you’re hitting the streets or running errands, these sneakers keep you looking fresh and feeling great all day long."  },
    { name: "Blue Jeans", newprice: "$39.99",oriprice: "$50", image: "/model2.jpg", description: "Step up your style game with these ultra-comfortable, breathable casual sneakers. Perfect for everyday wear, they feature a lightweight design with durable soles for excellent traction. Whether you’re hitting the streets or running errands, these sneakers keep you looking fresh and feeling great all day long." },
    { name: "Sneakers", newprice: "$49.99",oriprice: "$50", image: "/model2.jpg", description: "Step up your style game with these ultra-comfortable, breathable casual sneakers. Perfect for everyday wear, they feature a lightweight design with durable soles for excellent traction. Whether you’re hitting the streets or running errands, these sneakers keep you looking fresh and feeling great all day long." },
    { name: "Sneakers", newprice: "$49.99",oriprice: "$50", image: "/model2.jpg", description: "Step up your style game with these ultra-comfortable, breathable casual sneakers. Perfect for everyday wear, they feature a lightweight design with durable soles for excellent traction. Whether you’re hitting the streets or running errands, these sneakers keep you looking fresh and feeling great all day long." },
  ]

  {/* {products.map((product, index) => (
        <ProductCard
                      key={index} 
                      name={product.name} 
                      newprice={product.newprice} 
                      oriprice={product.oriprice} 
                      image={product.image}
                      cardDescritpion={product.description} />
    ))} */}

export default function Home() {
  return (
    <div>
      {/* Animate Nav hide/show */}
      <div
      >
        <Nav />
      </div>

      {/* Page Content */}
      <div className="pt-16">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-3">
          <Link href={"/customer/jenothan"}> go to home </Link>
        </div>
        {/* dummy long content to test scroll */}
        <div className="h-[2000px] bg-gray-100"></div>
      </div>
    </div>
  );
}
