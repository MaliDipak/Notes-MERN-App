import express from "express";
import NoteController from "../controllers/Note.controller.js";

const NoteRouter = express.Router();

NoteRouter.get("/", NoteController.get);
NoteRouter.post("/", NoteController.add);
NoteRouter.delete("/:id", NoteController.delete);
NoteRouter.patch("/:id", NoteController.update);

export default NoteRouter;
