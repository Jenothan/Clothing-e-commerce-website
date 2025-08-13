// "use client"
// import React, { useState } from "react";
// import { Filter, X, Grid, List } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     name: "Classic Denim Jacket",
//     price: 59.99,
//     originalPrice: 79.99,
//     image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
//     description: "Timeless denim jacket with premium quality fabric and classic fit. Perfect for casual and semi-formal occasions.",
//     size: ["6", "7", "8", "9", "10"],
//     color: ["Black", "Red", "Nude"],
//     gender: "Women",
//     category: "Shoes"
//   },
//   {
//     id: 2,
//     name: "Striped Cotton T-Shirt",
//     price: 19.99,
//     originalPrice: null,
//     image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=500",
//     description: "Comfortable cotton t-shirt with stylish stripes. Breathable fabric perfect for everyday wear.",
//     size: ["6", "7", "8", "9", "10"],
//     color: ["Black", "Red", "Nude"],
//     gender: "Women",
//     category: "Shoes"
//   },
//   {
//     id: 3,
//     name: "Premium Leather Boots",
//     price: 89.99,
//     originalPrice: 129.99,
//     image: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=500",
//     description: "Handcrafted leather boots with superior comfort and durability. Perfect for any weather condition.",
//     size: ["6", "7", "8", "9", "10"],
//     color: ["Black", "Red", "Nude"],
//     gender: "Women",
//     category: "Shoes"
//   },
//   {
//     id: 4,
//     name: "Elegant Summer Dress",
//     price: 39.99,
//     originalPrice: 49.99,
//     image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=500",
//     description: "Flowing summer dress with elegant design. Lightweight fabric perfect for warm weather occasions.",
//     size: ["6", "7", "8", "9", "10"],
//     color: ["Black", "Red", "Nude"],
//     gender: "Women",
//     category: "Shoes"
//   },
//   {
//     id: 5,
//     name: "Designer Sunglasses",
//     price: 79.99,
//     originalPrice: 99.99,
//     image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500",
//     description: "Stylish designer sunglasses with UV protection. Perfect accessory for any outdoor activity.",
//     size: ["6", "7", "8", "9", "10"],
//     color: ["Black", "Red", "Nude"],
//     gender: "Women",
//     category: "Shoes"
//   },
//   {
//     id: 6,
//     name: "Casual Sneakers",
//     price: 69.99,
//     originalPrice: 89.99,
//     image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
//     description: "Comfortable casual sneakers with modern design. Perfect for daily activities and light exercise.",
//     size: ["6", "7", "8", "9", "10"],
//     color: ["Black", "Red", "Nude"],
//     gender: "Women",
//     category: "Shoes"
//   }
// ];

// const SORT_OPTIONS = [
//   { label: "Price: Low to High", value: "price-asc" },
//   { label: "Price: High to Low", value: "price-desc" },
//   { label: "Newest First", value: "newest" },
//   { label: "Name A-Z", value: "name-asc" }
// ];

// const CATEGORIES = [
//   { name: "Jackets", count: 1 },
//   { name: "T-Shirts", count: 1 },
//   { name: "Shoes", count: 2 },
//   { name: "Dresses", count: 1 },
//   { name: "Accessories", count: 1 }
// ];

// export default function SalesPage() {
//   const [sort, setSort] = useState("newest");
//   const [showFilters, setShowFilters] = useState(false);
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

//   // Sorting logic
//   const sortedProducts = [...products].sort((a, b) => {
//     if (sort === "price-asc") return a.price - b.price;
//     if (sort === "price-desc") return b.price - a.price;
//     if (sort === "newest") return b.id - a.id;
//     if (sort === "name-asc") return a.name.localeCompare(b.name);
//     return 0;
//   });

//   const toggleCategory = (category: string) => {
//     setSelectedCategories(prev => 
//       prev.includes(category) 
//         ? prev.filter(c => c !== category)
//         : [...prev, category]
//     );
//   };

//   const ProductCard = ({ product, viewMode }: { product: typeof products[0], viewMode: 'grid' | 'list' }) => {
//     const discountPercent = product.originalPrice 
//       ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
//       : 0;

//     if (viewMode === 'list') {
//       return (
//         <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
//           <div className="flex flex-col sm:flex-row">
//             <div className="relative w-full sm:w-48 h-48 sm:h-32 flex-shrink-0">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//               {discountPercent > 0 && (
//                 <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
//                   -{discountPercent}% OFF
//                 </span>
//               )}
//             </div>
            
//             <div className="flex-1 p-4 flex flex-col justify-between">
//               <div>
//                 <h3 className="font-semibold text-lg mb-2 text-gray-900 hover:text-blue-600 transition-colors">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-3 line-clamp-2">
//                   {product.description}
//                 </p>
//               </div>
              
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
//                   {product.originalPrice && (
//                     <span className="text-lg text-red-500 line-through">${product.originalPrice.toFixed(2)}</span>
//                   )}
//                 </div>
                
//                 <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-2 rounded-full transition-colors">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
//         <div className="relative aspect-square overflow-hidden">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//             loading="lazy"
//           />
//           {discountPercent > 0 && (
//             <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-md z-10">
//               -{discountPercent}% OFF
//             </span>
//           )}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         </div>

//         <div className="p-4">
//           <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
//             {product.name}
//           </h3>
//           <p className="text-gray-600 text-sm mb-3 line-clamp-2">
//             {product.description}
//           </p>
          
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-2">
//               <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
//               {product.originalPrice && (
//                 <span className="text-sm text-red-500 line-through">${product.originalPrice.toFixed(2)}</span>
//               )}
//             </div>
//           </div>
          
//           <button className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-full transition-colors">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
//                 Summer Sale
//               </h1>
//               <p className="text-gray-600 mt-1">
//                 Up to 50% off on selected items
//               </p>
//             </div>
            
//             {/* View Mode Toggle */}
//             <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-lg p-1">
//               <button
//                 onClick={() => setViewMode('grid')}
//                 className={`p-2 rounded-md transition-colors ${
//                   viewMode === 'grid' 
//                     ? 'bg-white text-blue-600 shadow-sm' 
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 <Grid className="h-4 w-4" />
//               </button>
//               <button
//                 onClick={() => setViewMode('list')}
//                 className={`p-2 rounded-md transition-colors ${
//                   viewMode === 'list' 
//                     ? 'bg-white text-blue-600 shadow-sm' 
//                     : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 <List className="h-4 w-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Mobile Filter Overlay */}
//           {showFilters && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setShowFilters(false)} />
//           )}

//           {/* Filters Sidebar */}
//           <aside className={`
//             lg:w-64 bg-white rounded-lg shadow-md p-6 h-fit
//             ${showFilters ? 'fixed inset-y-0 left-0 z-50 w-80 overflow-y-auto' : 'hidden lg:block'}
//           `}>
//             <div className="flex justify-between items-center mb-6 lg:hidden">
//               <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
//               <button
//                 onClick={() => setShowFilters(false)}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>

//             <h2 className="hidden lg:block text-xl font-semibold mb-6 text-gray-900">Filters</h2>

//             {/* Categories Filter */}
//             <div className="mb-8">
//               <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
//               <div className="space-y-3">
//                 {CATEGORIES.map((category) => (
//                   <label key={category.name} className="flex items-center cursor-pointer group">
//                     <input
//                       type="checkbox"
//                       className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                       checked={selectedCategories.includes(category.name)}
//                       onChange={() => toggleCategory(category.name)}
//                     />
//                     <span className="ml-3 text-gray-700 group-hover:text-gray-900">
//                       {category.name} ({category.count})
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Price Range Filter */}
//             <div className="mb-8">
//               <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
//               <div className="space-y-3">
//                 <label className="flex items-center cursor-pointer">
//                   <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
//                   <span className="ml-3 text-gray-700">Under $25</span>
//                 </label>
//                 <label className="flex items-center cursor-pointer">
//                   <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
//                   <span className="ml-3 text-gray-700">$25 - $50</span>
//                 </label>
//                 <label className="flex items-center cursor-pointer">
//                   <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
//                   <span className="ml-3 text-gray-700">$50 - $100</span>
//                 </label>
//                 <label className="flex items-center cursor-pointer">
//                   <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
//                   <span className="ml-3 text-gray-700">Over $100</span>
//                 </label>
//               </div>
//             </div>
//           </aside>

//           {/* Main Content */}
//           <section className="flex-1">
//             {/* Controls Bar */}
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
//               <div className="flex items-center gap-4">
//                 <button
//                   className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//                   onClick={() => setShowFilters(true)}
//                 >
//                   <Filter className="h-4 w-4" />
//                   Filters
//                 </button>
                
//                 <p className="text-gray-700 font-medium">
//                   {sortedProducts.length} Products
//                 </p>
//               </div>

//               <div className="flex items-center gap-4">
//                 {/* Mobile View Toggle */}
//                 <div className="sm:hidden flex items-center gap-2 bg-gray-100 rounded-lg p-1">
//                   <button
//                     onClick={() => setViewMode('grid')}
//                     className={`p-2 rounded-md transition-colors ${
//                       viewMode === 'grid' 
//                         ? 'bg-white text-blue-600 shadow-sm' 
//                         : 'text-gray-600'
//                     }`}
//                   >
//                     <Grid className="h-4 w-4" />
//                   </button>
//                   <button
//                     onClick={() => setViewMode('list')}
//                     className={`p-2 rounded-md transition-colors ${
//                       viewMode === 'list' 
//                         ? 'bg-white text-blue-600 shadow-sm' 
//                         : 'text-gray-600'
//                     }`}
//                   >
//                     <List className="h-4 w-4" />
//                   </button>
//                 </div>

//                 <select
//                   className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   value={sort}
//                   onChange={(e) => setSort(e.target.value)}
//                 >
//                   {SORT_OPTIONS.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Products Grid/List */}
//             <div className={
//               viewMode === 'grid' 
//                 ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//                 : "space-y-6"
//             }>
//               {sortedProducts.map((product) => (
//                 <ProductCard key={product.id} product={product} viewMode={viewMode} />
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center mt-12">
//               <div className="flex items-center gap-2">
//                 <button className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors">
//                   Previous
//                 </button>
//                 {[1, 2, 3, 4].map((page) => (
//                   <button
//                     key={page}
//                     className={`px-4 py-2 rounded-lg transition-colors ${
//                       page === 1 
//                         ? 'bg-blue-600 text-white' 
//                         : 'text-gray-700 hover:bg-gray-100'
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 ))}
//                 <button className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors">
//                   Next
//                 </button>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }