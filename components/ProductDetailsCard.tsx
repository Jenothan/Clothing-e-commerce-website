"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { ShoppingBagIcon } from "lucide-react";

interface ProductDetailsCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  sizes: string[];
  colors: string[];
}

export default function ProductDetailsCard({
  name,
  description,
  price,
  image,
  sizes,
  colors,
}: ProductDetailsCardProps) {
  const router = useRouter();

  return (
    <div className=" justify-start items-start p-4 sm:p-0 min-h-screen bg-blue-0">
      <Card className="w-full max-w-2xl shadow-lg rounded-2xl border overflow-hidden">
        
        {/* Product Image */}
        <CardHeader className="p-0 relative w-full h-[400px] sm:h-[500px] md:h-[700px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </CardHeader>


        {/* Product Details */}
        <CardContent className="p-4 sm:p-6 space-y-4">
          <CardTitle className="text-xl sm:text-2xl font-bold text-blue-400">{name}</CardTitle>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
          <p className="text-2xl sm:text-3xl font-semibold text-blue-500">Rs. {price}</p>

          {/* Sizes */}
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Available Sizes</h4>
            <div className="flex flex-wrap gap-2">
              
              {sizes.map((size, index) => ( 
                <Button className="bg-transparent hover:bg-transparent cursor-pointer">
                <span
                  key={index}
                  className="px-3 py-1 border border-blue-300 text-blue-500 rounded-full text-xs sm:text-sm"
                >
                  
                  {size}
                </span>
                </Button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Available Colors</h4>
            <div className="flex gap-2">
              {colors.map((color, index) => (
                <Button className="bg-transparent hover:bg-transparent cursor-pointer">
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border"
                  style={{ backgroundColor: color }}
                ></div></Button>
              ))}
            </div>
          </div>
        </CardContent>

        {/* Buttons */}
        <CardFooter className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-6 border-t border-blue-200">
          <Button
            className="w-full sm:w-auto bg-gradient-to-bl from-red-400 to-blue-500 hover:bg-gradient-to-bl hover:from-red-600 hover:to-blue-600 hover:bg-blue-500 text-white font-semibold py-3 sm:py-2"
            onClick={() => alert("Added to cart")}
          >
            Add to Cart
          </Button>
          <Button className="bg-gradient-to-bl from-red-400 to-blue-500 hover:bg-gradient-to-bl hover:from-red-600 hover:to-blue-600 w-auto">
                <ShoppingBagIcon/>
                Buy Now
          </Button>
          <Button
            variant="outline"
            className="w-full sm:w-auto bg-gradient-to-bl from-red-400 to-blue-500 hover:bg-gradient-to-bl hover:from-red-600 hover:to-blue-600 text-white  py-3 sm:py-2 hover:text-white"
            onClick={() => router.back()}
          >
            Back
          </Button>
        </CardFooter>
      </Card>
      <div className="bg-pink-100 w-full">
              
      </div>
      </div>
  );
}
