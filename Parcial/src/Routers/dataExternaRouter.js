import { Router } from "express";
import { getExternalData } from "../controllers/dataExternaController.js";

const externalDataRouter = Router();

externalDataRouter.get("/data_externa", getExternalData);

export{externalDataRouter}