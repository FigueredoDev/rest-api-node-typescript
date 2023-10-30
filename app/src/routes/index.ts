import { Request, Response, Router } from "express";
import productsRouterPut from "./products-put.routes";
import productsRouterDelete from "./products-delete.routes";
import cors from "cors";
import productController from "../controllers/productController";

const routes = Router();

const asyncHandle = (fn: any) => (req: Request, res: Response) => {
  Promise.resolve(fn(req, res));
};

routes.get("/products", cors(), asyncHandle(productController.index));
routes.get("/products/:id", cors(), asyncHandle(productController.show));
routes.post("/products", cors(), asyncHandle(productController.create));
routes.use("/products", cors(), productsRouterPut);
routes.use("/products", cors(), productsRouterDelete);

export default routes;
