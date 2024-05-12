import NoteModel from "../models/Note.model.js";

class NoteController {
  static add = async (req, res) => {
    const { title, message } = req.body;
    try {
      const newDoc = new NoteModel({ title, message });
      const result = await newDoc.save();
      res.send({ status: "pass", result: result });
    } catch (error) {
      console.log(error);
      res.send({ status: "failed", message: "Unable to save note" });
    }
  };

  static get = async (req, res) => {
    try {
      const collection = await NoteModel.find();
      res.send({ status: "pass", result: collection });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Unable to fetch notes collection",
      });
    }
  };

  static delete = async (req, res) => {
    const id = req.params.id;
    try {
      const response = await NoteModel.deleteOne({ _id: id });
      res.send({ status: "pass", result: response });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Unable to delete note",
      });
    }
  };
}

export default NoteController;
