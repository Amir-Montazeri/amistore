import axios from "axios";

export const products = axios.create({
	baseURL: "https://fakestoreapi.com/products",
});
