import { LibrosController } from "../controllers/LibrosController.js";
import { Router } from "express";

const librosRouter = Router();

librosRouter.get("/json_file", LibrosController.GetAll)
librosRouter.get("/book/:id", LibrosController.getById)
librosRouter.post("/book/", LibrosController.CreateLibro)
librosRouter.put("/book/:id", LibrosController.UpdateLibroById)
librosRouter.delete("/book/:id", LibrosController.DeleteLibro)


export {librosRouter}