import { Star, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  newprice: string;
  oriprice: string;
  image: string;
  cardDescritpion: string;
  viewMode?: 'grid' | 'list';
}

export default function ProductCard({ 
  name, 
  newprice, 
  oriprice, 
  image, 
  cardDescritpion,
  viewMode = 'grid'
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const originalPrice = parseInt(oriprice.replace('$', ''));
  const currentPrice = parseInt(newprice.replace('$', ''));
  const discountPercent = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);

  if (viewMode === 'list') {
    return (
      <div 
        className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden bg-white rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex">
          <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-l-lg"
            />
            {discountPercent > 0 && (
              <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-500 text-white text-xs md:text-sm px-2 py-1 rounded-md font-medium">
                -{discountPercent}%
              </span>
            )}
            <button
              className={`absolute top-2 right-2 md:top-3 md:right-3 rounded-full p-1 md:p-2 transition-colors bg-white/80 backdrop-blur-sm hover:bg-white ${
                isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
              }`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-3 w-3 md:h-4 md:w-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
          </div>
          
          <div className="flex-1 p-3 md:p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                {name}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-4 line-clamp-2">
                {cardDescritpion}
              </p>
              
              <div className="flex items-center gap-1 mb-2 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-xs md:text-sm text-gray-500 ml-1 md:ml-2">(4.8)</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-base md:text-2xl font-bold text-gray-900">{newprice}</span>
                <span className="text-xs md:text-lg text-red-500 line-through">{oriprice}</span>
              </div>
              
              <button 
                className="bg-blue-400 hover:bg-pink-600 text-white rounded-full px-3 py-1 text-xs md:px-6 md:text-base transition-colors flex items-center"
              >
                <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden h-70 md:h-auto bg-white rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Header */}
      <div className="p-0 relative">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {discountPercent > 0 && (
            <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-500 text-white text-xs md:text-sm z-10 px-2 py-1 rounded-md font-medium">
              -{discountPercent}%
            </span>
          )}
          
          <button
            className={`absolute top-2 right-2 md:top-3 md:right-3 rounded-full p-1 md:p-2 bg-white/80 backdrop-blur-sm transition-colors z-10 hover:bg-white ${
              isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-3 w-3 md:h-4 md:w-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          
          <button
            className={`absolute bottom-2 block md:hidden right-2 md:top-3 md:right-3 rounded-full p-1 md:p-2 bg-white/80 backdrop-blur-sm transition-colors z-10 hover:bg-white ${
              isAdded ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
            onClick={() => setAdded(!isAdded)}
          >
            <ShoppingCart className={`h-3 w-3 md:h-4 md:w-4 ${isAdded ? 'fill-current' : ''}`} />
          </button>

          {/* {isHovered && (
            <div className="hidden md:block absolute inset-x-2 bottom-2 md:inset-x-4 md:bottom-4 z-10">
              <button 
                className=" w-full bg-white text-gray-900 hover:bg-gray-100 rounded-full font-semibold text-xs md:text-base px-2 md:px-4 py-2 transition-colors flex items-center justify-center"
              >
                <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                Quick Add
              </button>
            </div>
          )} */}
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-2 md:p-4">
        <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
          {name}
        </h3>
        <h4 className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3 line-clamp-1">
          {cardDescritpion}
        </h4>
        
        <div className="flex items-center gap-1 mb-2 md:mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3 w-3 md:h-3.5 md:w-3.5 text-yellow-400 fill-current" />
          ))}
          <span className="text-xs md:text-sm text-gray-500 ml-1">(4.8)</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-row w-full justify-around items-center gap-2">
            <span className="text-xs md:text-xl font-bold text-gray-900">{newprice}</span>
            <span className="text-xs md:text-sm text-red-500 line-through">{oriprice}</span>
          </div>
        </div>
      </div>
      
      {/* Card Footer */}
      <div className="hidden md:block p-2 pt-0 md:p-4">
        <button 
          className="w-full bg-blue-400 hover:bg-blue-500 text-white rounded-full font-semibold text-xs md:text-base py-1 md:py-2 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}