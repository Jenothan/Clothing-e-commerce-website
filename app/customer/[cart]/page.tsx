'use client';

import React, { useReducer } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

// ---------------- Types ---------------->
interface CartItem {
  id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: string };

// ---------------- Mock Cart Data ----------------
const initialCart: CartState = {
  items: [
    {
      id: '1',
      name: 'Premium Cotton T-Shirt',
      color: 'Ocean Blue',
      size: 'M',
      price: 29.99,
      quantity: 2,
      image: '/model4.jpg',
    },
    {
      id: '2',
      name: 'Luxury Hoodie',
      color: 'Charcoal',
      size: 'L',
      price: 64.99,
      quantity: 1,
      image: '/model2.jpg',
    },
    {
      id: '3',
      name: 'Designer Sneakers',
      color: 'White',
      size: '10',
      price: 89.99,
      quantity: 1,
      image: '/model3.jpg',
    },
  ],
  total: 214.97,
};

// ---------------- Reducer ----------------
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      );

      const updatedTotal = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        total: updatedTotal,
      };
    }

    case 'REMOVE_FROM_CART': {
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      const updatedTotal = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        total: updatedTotal,
      };
    }

    default:
      return state;
  }
}

export default function Cart() {
  const router = useRouter();
  const [state, dispatch] = useReducer(cartReducer, initialCart);

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const shippingCost = state.total > 150 ? 0 : 12.99;
  const tax = state.total * 0.08;
  const finalTotal = state.total + shippingCost + tax;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center px-4">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardContent className="text-center p-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-white" />
            </div>
            <CardTitle className="text-2xl mb-4 text-gray-800">Your cart is empty</CardTitle>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Discover amazing products and start your shopping journey with us.
            </p>
            <Link href="/customer/category/products">
              <Button className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto px-8 py-3">
                Start Shopping
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-blue-400">
              Shopping Cart
            </h1>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {state.items.reduce((sum, item) => sum + item.quantity, 0)} items • ${state.total.toFixed(2)} total
            </p>
          </div>
          {/* <Button
            variant="ghost" 
            size="icon"
            className="text-gray-400 hover:text-blue-400 hover:bg-blue-50 transition-colors"
          >
            <Heart className="w-5 h-5" />
          </Button> */}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
  {state.items.map((item, index) => (
    <Card
      key={item.id}
      className="border-1 shadow-sm hover:shadow-xl transition-all duration-300 group border-gray-300"
    >
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="relative h-60 w-40">
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
              className="w-24 h-24 sm:w-28 sm:h-28 object-cover md:h-full md:w-full rounded-l-xl mx-auto sm:mx-0 shadow-md"
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-bold text-gray-900 text-lg mb-2">{item.name}</h3>
            <div className="flex justify-center sm:justify-start gap-2 mb-3">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">
                {item.color}
              </Badge>
              <Badge variant="outline" className="border-gray-300 text-gray-700">
                Size {item.size}
              </Badge>
            </div>
            <p className="text-2xl font-bold text-blue-400">
              ${item.price.toFixed(2)}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 hover:bg-blue-100 hover:text-blue-600 rounded-full"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center font-bold text-gray-900">
                {item.quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 hover:bg-blue-100 hover:text-blue-600 rounded-full"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <div className="text-center">
              <p className="font-bold text-gray-900 text-lg mb-2">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full w-8 h-8"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>


        {/* Summary */}
        <div>
          <Card className="border-0 shadow-xl hidden lg:block py-3"
      style={{ position: 'fixed', top: '5rem', right: '4rem', width: '320px' }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-gray-900">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({state.items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className={`font-semibold ${shippingCost === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
              </div>

              <Separator />
              
              <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>

              {shippingCost > 0 && (
                <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 border">
                  <CardContent className="p-4">
                    <p className="text-sm font-semibold text-blue-700 mb-3">
                      Free shipping on orders over $150
                    </p>
                    <div className="w-full bg-blue-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-blue-500 h-3 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${Math.min((state.total / 150) * 100, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-blue-600 mt-2 font-medium">
                      Add ${(150 - state.total).toFixed(2)} more for free shipping
                    </p>
                  </CardContent>
                </Card>
              )}

              <div className="flex flex-col gap-2 pt-2 ">
                <Link href="/checkout">
                  <Button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 py-6 font-semibold">
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors py-6"
                  onClick={() => router.push("/customer/category/products")}
                >
                  Continue Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}