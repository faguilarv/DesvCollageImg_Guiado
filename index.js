import express from "express";
import dotenv from "dotenv";
import fileUploadConfig from "./util/fileUploadConfig.js";
import imageRoutes from "./routers/imageRoutes.js";

const app = express();
dotenv.config();

app.use(express.static("public"));

app.use(fileUploadConfig);

app.use("/", imageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Srv_Conectado exitosamente al puerto ${PORT}`);
});
