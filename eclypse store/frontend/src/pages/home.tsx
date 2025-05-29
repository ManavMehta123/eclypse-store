import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface Product {
  id: number;
  name: string;
  image: string;
  size: string[];
}

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: "Style 1", image: "https://source.unsplash.com/random/300x300?fashion,1", size: ["S", "M"] },
    { id: 2, name: "Style 2", image: "https://source.unsplash.com/random/300x300?fashion,2", size: ["M", "L"] },
    { id: 3, name: "Style 3", image: "https://source.unsplash.com/random/300x300?fashion,3", size: ["S", "L"] }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesSize = sizeFilter === "" || sizeFilter === "all" || product.size.includes(sizeFilter);
    return matchesSearch && matchesSize;
  });

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleCheckout = () => {
    alert(`Checking out ${cartItems.length} items.`);
    setCartItems([]);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="flex justify-between items-center p-4 border-b border-gray-800">
        <h1 className="text-3xl font-bold">Eclypse</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">Cart ({cartItems.length})</a>
        </nav>
      </header>

      <main className="p-4 space-y-10">
        <section className="text-center">
          <img src="https://source.unsplash.com/random/800x400?fashion,model" alt="Hero" className="mx-auto rounded-lg" />
          <h2 className="text-xl mt-4">A new era of quiet luxury</h2>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3"
          />
          <Select value={sizeFilter} onValueChange={(value) => setSizeFilter(value)}>
            <SelectTrigger className="w-full md:w-1/3">
              <SelectValue placeholder="Select Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sizes</SelectItem>
              <SelectItem value="S">Small</SelectItem>
              <SelectItem value="M">Medium</SelectItem>
              <SelectItem value="L">Large</SelectItem>
            </SelectContent>
          </Select>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-white text-black">
              <CardContent>
                <img src={product.image} alt={product.name} className="rounded mb-2" />
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-sm">Sizes: {product.size.join(", ")}</p>
                <Button className="mt-2 w-full" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="text-center">
          <Button className="mt-4">Explore the Collection</Button>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <img src="https://source.unsplash.com/random/600x800?fashion,coat" alt="Model" className="rounded-lg" />
          <Card className="bg-white text-black p-4">
            <CardContent>
              <h3 className="text-2xl font-semibold mb-2">Red Trench Coat</h3>
              <p className="mb-2 text-lg">₹7,000</p>
              <div className="flex gap-2 mb-4">
                <Button variant="outline">S</Button>
                <Button variant="outline">M</Button>
                <Button variant="outline">L</Button>
              </div>
              <Button className="w-full" onClick={() => handleAddToCart(products[0])}>Add to Cart</Button>
            </CardContent>
          </Card>
        </section>

        <section className="bg-gray-800 p-4 rounded">
          <h3 className="text-xl mb-2">Cart Summary</h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-400">Your cart is empty.</p>
          ) : (
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <li key={index} className="text-white">{item.name}</li>
              ))}
            </ul>
          )}
          <Button onClick={handleCheckout} className="mt-4 w-full" disabled={cartItems.length === 0}>Checkout</Button>
        </section>

        <section className="space-y-4">
          <details>
            <summary className="font-medium">Size Guide</summary>
            <p className="text-gray-400">Detailed size guide for perfect fit.</p>
          </details>
          <details>
            <summary className="font-medium">Delivery & Returns</summary>
            <p className="text-gray-400">Free returns within 30 days.</p>
          </details>
          <details>
            <summary className="font-medium">How This Was Made</summary>
            <p className="text-gray-400">Sustainably made with care.</p>
          </details>
        </section>

        <section className="bg-gray-900 p-4 rounded">
          <h4 className="text-xl mb-2">Review</h4>
          <p className="text-gray-300">“Understated, but unforgettable. It feels like it was made for me.”</p>
          <p className="text-sm text-gray-500 mt-1">- Customer</p>
        </section>
      </main>

      <footer className="text-center py-4 border-t border-gray-800">
        <p className="text-sm text-gray-500">© 2025 Eclypse</p>
      </footer>
    </div>
  );
};

export default HomePage;
