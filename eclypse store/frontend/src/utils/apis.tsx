import axios from "axios";

export const fetchProducts = async () => {
  return [
    { id: 1, name: "Red Trench Coat", image: "https://source.unsplash.com/random/400x400?coat", size: ["S", "M", "L"] },
    { id: 2, name: "Elegant Jacket", image: "https://source.unsplash.com/random/400x400?jacket", size: ["M", "L"] }
  ];
};

export const addToCartAPI = async (product: any) => {
  const res = await axios.post("http://localhost:5000/api/cart", product);
  return res.data;
};

export const fetchCart = async () => {
  const res = await axios.get("http://localhost:5000/api/cart");
  return res.data;
};

export const checkoutAPI = async () => {
  const res = await axios.post("http://localhost:5000/api/cart/checkout");
  return res.data;
};
export const loginAPI = async (username: string, password: string) => {
  const res = await axios.post("http://localhost:5000/api/auth/login", { username, password });
  return res.data;
};