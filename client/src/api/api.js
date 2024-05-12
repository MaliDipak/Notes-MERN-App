import axios from "axios";

const SERVER_BASE_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export class Note {
  static save = async (title, message) => {
    const new_note = {
      title,
      message,
    };
    try {
      const response = await api.post("/api/note", new_note);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static get = async () => {
    try {
      const response = await api.get("/api/note");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static delete = async (id) => {
    try {
      const response = await api.delete(`/api/note/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
}
