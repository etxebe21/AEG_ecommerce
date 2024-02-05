"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";


const links = [
  {name: 'HOME',  href: '/'},
  {name: 'SHOES',   href: '/SHOES'},
  {name: 'PANTS', href: '/PANTS'},
  {name: 'COATS', href: '/COATS'},
  {name: 'CONTACT', href: '/CONTACT'},
]

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  return (
    <header className="bg-secondary bg-opacity-85 pb-6 sm:pb-8 lg:pb-1">
    <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl" style={{ fontFamily: 'helvetica' }}>
      <Link href="/">
        <h1 className="text-2xl md:text-4xl font-bold">
          MOA<span style={{ color: 'white' }}>Commerce</span>
        </h1>
      </Link>

      <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className={`text-lg font-semibold text-primary ${link.name !== 'Home' ? 'bg-background hover:bg-background' : ''} transition duration-100 rounded-full px-4 py-2`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className={`text-lg font-semibold text-gray-600 ${link.name !== 'Home' ? 'hover:text-primary hover:bg-background hover:bg-opacity-50' : ''} transition duration-100 rounded-full px-4 py-2`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

      <div className="flex divide-x border-r sm:border-l">
        <Button
          variant={'outline'}
          onClick={() => handleCartClick()}
          className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none bg-primary text-white border border-brown-800 hover:border-black-300 hover:bg-black-300"
        >
          <ShoppingBag />
          <span className="hidden text-xs font-semibold sm:block">
            Cart
          </span>
        </Button>
      </div>
    </div>
  </header>
  );
}

