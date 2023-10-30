import { Request, Response, Router } from "express";
import productsRouterGetId from "./products-get-id.routes";
import productsRouterPost from "./products-post.routes";
import productsRouterPut from "./products-put.routes";
import productsRouterDelete from "./products-delete.routes";
import cors from "cors";
import productController from "../controllers/productController";

const routes = Router();

const asyncHandle = (fn: any) => (req: Request, res: Response) => {
  Promise.resolve(fn(req, res));
};

routes.get("/products", cors(), asyncHandle(productController.index));
routes.use("/products/search", cors(), productsRouterGetId);
routes.use("/products", cors(), productsRouterPost);
routes.use("/products", cors(), productsRouterPut);
routes.use("/products", cors(), productsRouterDelete);

export default routes;
