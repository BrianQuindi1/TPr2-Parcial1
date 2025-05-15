import express from "express";
import { config } from "./config/config.js";
import { librosRouter } from "./Routers/LibrosRouter.js";
import { externalDataRouter } from "./Routers/dataExternaRouter.js";
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", librosRouter);
app.use("/api", externalDataRouter)

app.listen(config.PORT, () => {
	const message = `🚀 SERVER is UP at http://${config.HOST}:${config.PORT}`;
	console.log(message);
});
