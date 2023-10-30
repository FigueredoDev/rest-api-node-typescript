import { Request, Response } from "express";
import connection from "../database/connection";

class ProductController {
  async index(request: Request, response: Response) {
    const products = await connection("products").select("*");

    return response.json(products);
  }
}

// Singleton Pattern
export default new ProductController();
