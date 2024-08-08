import { app } from "../../server";
import { CriaProduto } from "./cria-produto";
import { EditaProduto } from "./edita-produto";

export const ProductsRoutes = async () => {
  app.register(CriaProduto);
  app.register(EditaProduto);
};
