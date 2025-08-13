// components/Navbar.tsx
"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, ShoppingBag, User, UserCog, SearchIcon, Filter, LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "./ui/dropdown-menu"
import { DialogTitle } from "./ui/dialog"
import { Separator } from "./ui/separator"
import Image from "next/image"
import dp from "@/public/professional-profile.jpg"

export default function Navbar() {
  const [isopenmenu, setisopenmenu] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: "Products", href: "/customer/category/products" },
    { name: "Men", href: "/customer/category/men" },
    { name: "Women", href: "/customer/category/women" },
    { name: "Kids", href: "/customer/category/kids" },
    { name: "Accessories", href: "/customer/category/accessories" },
  ]

  const settingsLinks = [
    {name : "My Cart", href: "#"},
    {name : "Favourite", href: "#"},
    {name : "My Order", href: "#"},
    {name : "Refund", href: "#"},
  ]

  const settings = [
    {name : "Profile", href: "#"},
    {name : "Settings", href: "#"},
  ]

  // Scroll listener for showing navbar for 3 sec when bottom reached
  useEffect(() => {
    function handleScroll() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if (atBottom) {
        setVisible(true);

        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-gray-100 backdrop-blur-lg shadow-sm transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6 text-blue-400" />
          <span className="text-xl font-bold italic text-blue-400 tracking-tight">NOLIMIT</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-pink-600"
            >
              <h1 className="text-lg">{link.name}</h1>
            </Link>
          ))}
        </nav>
        
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="lg" className="border-2 rounded-full hover:text-pink-400 cursor-pointer">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <DropdownMenu open={isSettingsOpen} onOpenChange={setSettingsOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="lg" aria-label="User menu" className="border-2 rounded-full hover:text-pink-400 cursor-pointer">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="bottom" className="w-30">
              <DropdownMenuItem onSelect={() => alert("Profile clicked")}><UserCog/>Profile</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => alert("Settings clicked")}><Settings/>Settings</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => alert("Logout clicked")}><LogOut/>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Image src={dp} alt="dp" height={40} width={40} className="hidden md:block rounded-full"/>
          <h1 className="hidden md:block">Hello<br/> Jenothan!</h1>

          {/* Mobile Menu */}
          <Sheet open={isopenmenu} onOpenChange={setisopenmenu}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-6 overflow-auto">
              <div className="flex items-center justify-between mb-3">
                <Link href="/" className="flex items-center space-x-2">
                  <ShoppingBag className="h-6 w-6 text-blue-400" />
                  <span className="text-xl font-bold italic text-blue-400 tracking-tight">NOLIMIT</span>
                </Link>
              </div>
              <Separator/>
              <DialogTitle className="text-gray-600">Navigation Menu</DialogTitle>
              <nav className="flex flex-col space-y-4 pl-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-pink-600"
                    onClick={() => setisopenmenu(false)}
                  >
                    <h1>{link.name}</h1>
                  </Link>
                ))}
              </nav>
              <Separator/>
              <DialogTitle className="text-gray-600">Products Details</DialogTitle>
              <nav className="flex flex-col space-y-4 pl-3">
                {settingsLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-pink-600"
                    onClick={() => setisopenmenu(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <Separator/>
              <DialogTitle className="text-gray-600">Profile</DialogTitle>
              <div>
                <nav className="flex flex-row pl-3 gap-2">
                  <Image src={dp} alt="new" width={60} height={60} className="rounded-full mt-2"/>
                  <Separator orientation="vertical"/>
                  <div className="flex flex-col space-y-4 px-3">
                    {settings.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-gray-700 hover:text-pink-600"
                        onClick={() => setisopenmenu(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </nav>
                <Separator/>
                <Button className="bg-blue-400 mx-17 my-4 hover:bg-none" onClick={() => alert("User Logout")}>
                  Logout
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
