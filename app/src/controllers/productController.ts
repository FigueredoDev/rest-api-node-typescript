import { Request, Response } from "express";
import connection from "../database/connection";

class ProductController {
  async index(request: Request, response: Response) {
    const products = await connection("products").select("*");

    return response.json(products);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    try {
      if (id) {
        const selectedProduct = await connection("products").where("id", id).first();

        if (!selectedProduct) {
          return response.status(400).json({ error: "Product not found!" });
        }
      }

      const results = await connection("products").where("id", id).first();

      return response.json(results);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal server error" });
    }
  }
}

// Singleton Pattern
export default new ProductController();
