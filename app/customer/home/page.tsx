"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Truck, Shield, RefreshCw, Users, Award, Heart, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react"

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-pink-100 overflow-hidden ">
        <div className="absolute inset-0" />
        <div className="container mx-auto px-4 md:px-12 lg:px-20 relative z-10 py-3">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-col gap-8 text-center lg:text-left max-w-2xl">
              <Badge className="self-center lg:self-start w-fit bg-blue-600">
                New Collection 2024
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Fashion That Defines You
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Discover premium clothing that combines comfort, style, and sustainability. 
                Join thousands of fashion enthusiasts who trust StyleHub for their wardrobe needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/shop">
                  <Button size="lg" className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Shop Collection
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 px-8 py-4 text-lg font-semibold rounded-full hover:bg-gray-50 transition-all duration-300">
                    Our Story
                  </Button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">4.9/5 Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">50K+ Happy Customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-500" />
                  <span className="text-sm font-medium">Award Winning</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-pink-400 rounded-3xl blur-2xl opacity-30 scale-105" />
              <Image
                src="/woman1.jpg"
                alt="Fashion Model"
                width={500}
                height={600}
                className="relative rounded-3xl object-cover hover:scale-105 transition-transform duration-300 shadow-2xl w-[400px] h-[500px] lg:w-[500px] lg:h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $75" },
              { icon: RefreshCw, title: "Easy Returns", desc: "30-day return policy" },
              { icon: Shield, title: "Secure Payment", desc: "100% protected checkout" },
              { icon: Heart, title: "Made with Love", desc: "Crafted with care" },
            ].map((feature, i) => (
              <Card key={i} className="text-center border-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="py-4">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our carefully curated collections designed for every style and occasion
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Men's Fashion", img: "/model2.jpg", count: "120+ Items" },
              { name: "Women's Style", img: "/model2.jpg", count: "200+ Items" },
              { name: "Kids Collection", img: "/model2.jpg", count: "80+ Items" },
              { name: "Accessories", img: "/model2.jpg", count: "150+ Items" },
            ].map((cat, i) => (
              <Card key={i} className="group hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border-0">
                <CardHeader className="p-0 relative">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    width={300}
                    height={250}
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardHeader>
                <CardContent className="text-center p-6">
                  <h3 className="font-semibold text-lg mb-1">{cat.name}</h3>
                  <p className="text-gray-500 text-sm">{cat.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Now</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hand-picked favorites that are flying off our shelves
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Elegant Summer Dress", price: "$89", oldPrice: "$120", img: "/model2.jpg", badge: "Bestseller" },
              { name: "Classic Denim Shirt", price: "$65", oldPrice: "$85", img: "/model2.jpg", badge: "New" },
              { name: "Premium Leather Jacket", price: "$199", oldPrice: "$250", img: "/model2.jpg", badge: "Limited" },
              { name: "Designer Sneakers", price: "$129", oldPrice: "$160", img: "/model2.jpg", badge: "Trending" },
            ].map((product, i) => (
              <Card key={i} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <CardHeader className="p-0 relative">
                  <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-500 to-pink-500 text-white">
                    {product.badge}
                  </Badge>
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardHeader>
                <CardContent className="px-3">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <span className="text-xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-red-500 line-through">{product.oldPrice}</span>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-blue-400 hover:from-blue-600 hover:to-pink-600 text-white rounded-full font-semibold">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-150">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2020, StyleHub has been at the forefront of sustainable fashion, 
                combining timeless elegance with contemporary trends. We believe that great 
                fashion should be accessible, ethical, and environmentally conscious.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our team of designers works tirelessly to create pieces that not only look 
                amazing but also feel incredible to wear. Every item is crafted with premium 
                materials and attention to detail that sets us apart.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">50K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">500+</div>
                  <div className="text-gray-600">Products</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/customer.jpg"
                alt="Our Story"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from our amazing community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", text: "Absolutely love the quality and style! The fit is perfect and the materials are so comfortable.", rating: 5, location: "New York" },
              { name: "Michael Chen", text: "Fast shipping, excellent customer service, and the clothes are even better than the photos!", rating: 5, location: "California" },
              { name: "Emma Wilson", text: "StyleHub has become my go-to for all my fashion needs. Sustainable and stylish - perfect combo!", rating: 5, location: "Texas" },
            ].map((review, i) => (
              <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blue-400">
        <div className="container mx-auto px-4 md:px-12 lg:px-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Be the first to know about new collections, exclusive deals, and fashion tips
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70 rounded-full"
              />
              <Button className="bg-white text-blue-500 hover:bg-gray-100 rounded-full font-semibold px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-blue-400 italic bg-clip-text text-transparent">
                NOLIMIT
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your destination for premium fashion that combines style, comfort, and sustainability.
              </p>
              <div className="flex gap-4">
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Quick Links</h4>
              <div className="flex flex-col gap-3">
                {["Shop All", "New Arrivals", "Sale", "Gift Cards"].map((link) => (
                  <Link key={link} href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Customer Care</h4>
              <div className="flex flex-col gap-3">
                {["Size Guide", "Shipping Info", "Returns", "FAQs"].map((link) => (
                  <Link key={link} href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Contact Us</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">nolimit@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">+94212262250</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-gray-400">Wellawatta, Colombo</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NOLIMIT. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </main>
  )
}