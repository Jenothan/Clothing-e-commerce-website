"use client"

import { useState, useMemo } from "react";
import { notFound } from "next/navigation";
import ProductCard from "@/components/productCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, X, Grid, List } from "lucide-react";

const categories = {
  men: [
    { 
      product_id: 1,
      name: "Classic Cotton Shirt", 
      newprice: "$25", 
      oriprice: "$40", 
      image: "/men1.jpg", 
      cardDescritpion: "Comfortable premium cotton shirt",
      size: ["S", "M", "L", "XL"],
      color: ["White", "Blue", "Black"],
      gender: "Men",
      category: "Shirts"
    },
    { 
      product_id: 2,
      name: "Slim Fit Jeans", 
      newprice: "$45", 
      oriprice: "$60", 
      image: "/men1.jpg", 
      cardDescritpion: "Modern slim fit denim jeans",
      size: ["28", "30", "32", "34", "36"],
      color: ["Blue", "Black", "Gray"],
      gender: "Men",
      category: "Jeans"
    },
    { 
      product_id: 3,
      name: "Leather Oxford Shoes", 
      newprice: "$60", 
      oriprice: "$80", 
      image: "/men1.jpg", 
      cardDescritpion: "Handcrafted leather dress shoes",
      size: ["8", "9", "10", "11", "12"],
      color: ["Brown", "Black"],
      gender: "Men",
      category: "Shoes"
    },
    { 
      product_id: 4,
      name: "Casual Polo Shirt", 
      newprice: "$30", 
      oriprice: "$45", 
      image: "/men1.jpg", 
      cardDescritpion: "Breathable polo for everyday wear",
      size: ["S", "M", "L", "XL"],
      color: ["Navy", "White", "Red"],
      gender: "Men",
      category: "Shirts"
    },
    { 
      product_id: 5,
      name: "Chino Pants", 
      newprice: "$35", 
      oriprice: "$50", 
      image: "/men1.jpg", 
      cardDescritpion: "Versatile cotton chino pants",
      size: ["28", "30", "32", "34", "36"],
      color: ["Khaki", "Navy", "Black"],
      gender: "Men",
      category: "Pants"
    },
    { 
      product_id: 6,
      name: "Sneakers", 
      newprice: "$55", 
      oriprice: "$75", 
      image: "/men1.jpg", 
      cardDescritpion: "Comfortable athletic sneakers",
      size: ["8", "9", "10", "11", "12"],
      color: ["White", "Black", "Gray"],
      gender: "Men",
      category: "Shoes"
    }
  ],
  women: [
    { 
      product_id: 7,
      name: "Elegant Evening Dress", 
      newprice: "$35", 
      oriprice: "$55", 
      image: "/model2.jpg", 
      cardDescritpion: "Sophisticated dress for special occasions",
      size: ["XS", "S", "M", "L", "XL"],
      color: ["Black", "Navy", "Red"],
      gender: "Women",
      category: "Dresses"
    },
    { 
      product_id: 8,
      name: "High Heel Pumps", 
      newprice: "$50", 
      oriprice: "$70", 
      image: "/model2.jpg", 
      cardDescritpion: "Classic high-heel party shoes",
      size: ["6", "7", "8", "9", "10"],
      color: ["Black", "Red", "Nude"],
      gender: "Women",
      category: "Shoes"
    },
    { 
      product_id: 9,
      name: "Designer Handbag", 
      newprice: "$15", 
      oriprice: "$25", 
      image: "/model2.jpg", 
      cardDescritpion: "Stylish leather handbag",
      size: ["One Size"],
      color: ["Brown", "Black", "Tan"],
      gender: "Women",
      category: "Accessories"
    },
    { 
      product_id: 10,
      name: "Silk Blouse", 
      newprice: "$40", 
      oriprice: "$60", 
      image: "/model2.jpg", 
      cardDescritpion: "Luxurious silk blouse",
      size: ["XS", "S", "M", "L", "XL"],
      color: ["White", "Pink", "Blue"],
      gender: "Women",
      category: "Tops"
    },
    { 
      product_id: 11,
      name: "Skinny Jeans", 
      newprice: "$38", 
      oriprice: "$55", 
      image: "/model2.jpg", 
      cardDescritpion: "Flattering skinny fit jeans",
      size: ["24", "26", "28", "30", "32"],
      color: ["Blue", "Black", "White"],
      gender: "Women",
      category: "Jeans"
    },
    { 
      product_id: 12,
      name: "Statement Necklace", 
      newprice: "$20", 
      oriprice: "$35", 
      image: "/model2.jpg", 
      cardDescritpion: "Bold fashion necklace",
      size: ["One Size"],
      color: ["Gold", "Silver", "Rose Gold"],
      gender: "Women",
      category: "Accessories"
    }
  ],
  kids: [
    { 
      product_id: 13,
      name: "Soft Cotton T-Shirt", 
      newprice: "$15", 
      oriprice: "$25", 
      image: "/kid.jpg", 
      cardDescritpion: "Super soft organic cotton shirt",
      size: ["2T", "3T", "4T", "5T", "6T"],
      color: ["Blue", "Pink", "Yellow"],
      gender: "Kids",
      category: "Tops"
    },
    { 
      product_id: 14,
      name: "Educational Toy Set", 
      newprice: "$20", 
      oriprice: "$35", 
      image: "/kid.jpg", 
      cardDescritpion: "Fun and educational building blocks",
      size: ["One Size"],
      color: ["Multicolor"],
      gender: "Kids",
      category: "Toys"
    },
    { 
      product_id: 15,
      name: "Kids Sneakers", 
      newprice: "$25", 
      oriprice: "$40", 
      image: "/kid.jpg", 
      cardDescritpion: "Comfortable athletic shoes for kids",
      size: ["10", "11", "12", "13", "1", "2", "3"],
      color: ["Pink", "Blue", "White"],
      gender: "Kids",
      category: "Shoes"
    },
    { 
      product_id: 16,
      name: "Denim Overalls", 
      newprice: "$28", 
      oriprice: "$42", 
      image: "/kid.jpg", 
      cardDescritpion: "Adorable denim overalls",
      size: ["2T", "3T", "4T", "5T", "6T"],
      color: ["Blue", "Light Blue"],
      gender: "Kids",
      category: "Bottoms"
    },
    { 
      product_id: 17,
      name: "Plush Backpack", 
      newprice: "$18", 
      oriprice: "$30", 
      image: "/kid.jpg", 
      cardDescritpion: "Cute animal-themed backpack",
      size: ["One Size"],
      color: ["Pink", "Blue", "Green"],
      gender: "Kids",
      category: "Accessories"
    },
    { 
      product_id: 18,
      name: "Cozy Hoodie", 
      newprice: "$22", 
      oriprice: "$35", 
      image: "/kid.jpg", 
      cardDescritpion: "Warm and comfortable hoodie",
      size: ["2T", "3T", "4T", "5T", "6T"],
      color: ["Gray", "Navy", "Pink"],
      gender: "Kids",
      category: "Tops"
    },],
    


accessories : [
  {
    id: 1,
    name: "Classic Denim Jacket",
    newprice: "$59",
    oriprice: "$79",
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
    cardDescritpion: "Timeless denim jacket with premium quality fabric and classic fit. Perfect for casual and semi-formal occasions.",
    size: ["6", "7", "8", "9", "10"],
    color: ["Black", "Red", "Nude"],
    gender: "Women",
    category: "Shoes"
  },
  {
    id: 2,
    name: "Striped Cotton T-Shirt",
    newprice:"$19",
    oriprice: "$34",
    image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=500",
    cardDescritpion: "Comfortable cotton t-shirt with stylish stripes. Breathable fabric perfect for everyday wear.",
    size: ["6", "7", "8", "9", "10"],
    color: ["Black", "Red", "Nude"],
    gender: "Women",
    category: "Shoes"
  },
  {
    id: 3,
    name: "Premium Leather Boots",
    newprice: "$80",
    oriprice: "$120",
    image: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=500",
    cardDescritpion: "Handcrafted leather boots with superior comfort and durability. Perfect for any weather condition.",
    size: ["6", "7", "8", "9", "10"],
    color: ["Black", "Red", "Nude"],
    gender: "Women",
    category: "Shoes"
  },
  {
    id: 4,
    name: "Elegant Summer Dress",
    newprice: "$60",
    oriprice: "$52",
    image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=500",
    cardDescritpion: "Flowing summer dress with elegant design. Lightweight fabric perfect for warm weather occasions.",
    size: ["6", "7", "8", "9", "10"],
    color: ["Black", "Red", "Nude"],
    gender: "Women",
    category: "Shoes"
  },
  {
    id: 5,
    name: "Designer Sunglasses",
    newprice: "$43",
    oriprice: "$34",
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500",
    cardDescritpion: "Stylish designer sunglasses with UV protection. Perfect accessory for any outdoor activity.",
    size: ["6", "7", "8", "9", "10"],
    color: ["Black", "Red", "Nude"],
    gender: "Women",
    category: "Shoes"
  },
  {
    id: 6,
    name: "Casual Sneakers",
    newprice: "$39",
    oriprice: "$52",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500",
    cardDescritpion: "Comfortable casual sneakers with modern design. Perfect for daily activities and light exercise.",
    size: ["6", "7", "8", "9", "10"],
    color: ["Black", "Red", "Nude"],
    gender: "Women",
    category: "Shoes"
  }
],
products: [
  {
    id: 5,
    name: "Designer Sunglasses",
    newprice: "$43",
    oriprice: "$34",
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500",
    cardDescritpion: "Stylish designer sunglasses with UV protection. Perfect accessory for any outdoor activity.",
    size: ["6", "7", "8", "9", "10"],
    color: ["Black", "Red", "Nude"],
    gender: "Women",
    category: "Shoes"
  },
  { 
      product_id: 17,
      name: "Plush Backpack", 
      newprice: "$18", 
      oriprice: "$30", 
      image: "/kid.jpg", 
      cardDescritpion: "Cute animal-themed backpack",
      size: ["One Size"],
      color: ["Pink", "Blue", "Green"],
      gender: "Kids",
      category: "Accessories"
    },
    { 
      product_id: 5,
      name: "Chino Pants", 
      newprice: "$35", 
      oriprice: "$50", 
      image: "/men1.jpg", 
      cardDescritpion: "Versatile cotton chino pants",
      size: ["28", "30", "32", "34", "36"],
      color: ["Khaki", "Navy", "Black"],
      gender: "Men",
      category: "Pants"
    },
    { 
      product_id: 8,
      name: "High Heel Pumps", 
      newprice: "$50", 
      oriprice: "$70", 
      image: "/model2.jpg", 
      cardDescritpion: "Classic high-heel party shoes",
      size: ["6", "7", "8", "9", "10"],
      color: ["Black", "Red", "Nude"],
      gender: "Women",
      category: "Shoes"
    },
]
}

type FilterState = {
  search: string;
  sizes: string[];
  colors: string[];
  categories: string[];
  priceRange: string;
  sortBy: string;
};

export default function CategoryPage({ params }: { params: { category: string } }) {
const { category } =  params;
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    sizes: [],
    colors: [],
    categories: [],
    priceRange: 'all',
    sortBy: 'name'
  });

  if (!categories[category as keyof typeof categories]) {
    return notFound();
  }

  const products = categories[category as keyof typeof categories];

  // Get unique filter options
  const allSizes = [...new Set(products.flatMap(p => p.size))];
  const allColors = [...new Set(products.flatMap(p => p.color))];
  const allCategories = [...new Set(products.map(p => p.category))];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Search filter
      if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase()) &&
          !product.cardDescritpion.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }

      // Size filter
      if (filters.sizes.length > 0 && !filters.sizes.some(size => product.size.includes(size))) {
        return false;
      }

      // Color filter
      if (filters.colors.length > 0 && !filters.colors.some(color => product.color.includes(color))) {
        return false;
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Price range filter
      if (filters.priceRange !== 'all') {
        const price = parseInt(product.newprice.replace('$', ''));
        switch (filters.priceRange) {
          case 'under-25':
            if (price >= 25) return false;
            break;
          case '25-50':
            if (price < 25 || price > 50) return false;
            break;
          case 'over-50':
            if (price <= 50) return false;
            break;
        }
      }

      return true;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return parseInt(a.newprice.replace('$', '')) - parseInt(b.newprice.replace('$', ''));
        case 'price-high':
          return parseInt(b.newprice.replace('$', '')) - parseInt(a.newprice.replace('$', ''));
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, filters]);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleArrayFilterChange = (key: 'sizes' | 'colors' | 'categories', value: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [key]: checked 
        ? [...prev[key], value]
        : prev[key].filter(item => item !== value)
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      sizes: [],
      colors: [],
      categories: [],
      priceRange: 'all',
      sortBy: 'name'
    });
  };

  const activeFiltersCount = filters.sizes.length + filters.colors.length + filters.categories.length + 
    (filters.search ? 1 : 0) + (filters.priceRange !== 'all' ? 1 : 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold bg-blue-400 bg-clip-text text-transparent">
                {category.charAt(0).toUpperCase() + category.slice(1)} Collection
              </h1>
              <p className="text-gray-600 mt-2">
                Discover our premium {category} collection with {products.length} carefully curated items
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                          <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-md transition-colors ${
                              viewMode === 'grid' 
                                ? 'bg-white text-blue-600 shadow-sm' 
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            <Grid className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-md transition-colors ${
                              viewMode === 'list' 
                                ? 'bg-white text-blue-600 shadow-sm' 
                                : 'text-gray-600 hover:text-gray-900'
                            }`}
                          >
                            <List className="h-4 w-4" />
                          </button>
                        </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="pl-10 rounded-full border-gray-200 focus:border-blue-800"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange('sortBy', value)}>
                <SelectTrigger className="w-48 rounded-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="rounded-full relative"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge className="ml-2 bg-blue-500 text-white text-xs px-2 py-1">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>

              {activeFiltersCount > 0 && (
                <Button variant="ghost" onClick={clearFilters} className="rounded-full">
                  <X className="h-4 w-4 mr-2" />
                  Clear
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <Card className="w-80 h-fit sticky top-4 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium mb-3">Price Range</h4>
                    <Select value={filters.priceRange} onValueChange={(value) => handleFilterChange('priceRange', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Prices</SelectItem>
                        <SelectItem value="under-25">Under $25</SelectItem>
                        <SelectItem value="25-50">$25 - $50</SelectItem>
                        <SelectItem value="over-50">Over $50</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sizes */}
                  <div>
                    <h4 className="font-medium mb-3">Size</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {allSizes.map(size => (
                        <div key={size} className="flex items-center space-x-2">
                          <Checkbox
                            id={`size-${size}`}
                            checked={filters.sizes.includes(size)}
                            onCheckedChange={(checked) => 
                              handleArrayFilterChange('sizes', size, checked as boolean)
                            }
                          />
                          <label htmlFor={`size-${size}`} className="text-sm font-medium">
                            {size}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <h4 className="font-medium mb-3">Color</h4>
                    <div className="space-y-2">
                      {allColors.map(color => (
                        <div key={color} className="flex items-center space-x-2">
                          <Checkbox
                            id={`color-${color}`}
                            checked={filters.colors.includes(color)}
                            onCheckedChange={(checked) => 
                              handleArrayFilterChange('colors', color, checked as boolean)
                            }
                          />
                          <label htmlFor={`color-${color}`} className="text-sm font-medium">
                            {color}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h4 className="font-medium mb-3">Category</h4>
                    <div className="space-y-2">
                      {allCategories.map(cat => (
                        <div key={cat} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${cat}`}
                            checked={filters.categories.includes(cat)}
                            onCheckedChange={(checked) => 
                              handleArrayFilterChange('categories', cat, checked as boolean)
                            }
                          />
                          <label htmlFor={`category-${cat}`} className="text-sm font-medium">
                            {cat}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-2'
              }`}>
                {filteredProducts.map((product, idx) => (
                  <ProductCard
                    key={idx}
                    name={product.name}
                    newprice={product.newprice}
                    oriprice={product.oriprice}
                    image={product.image}
                    cardDescritpion={product.cardDescritpion}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}