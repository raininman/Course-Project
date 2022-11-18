import axios from "axios";
import config from "@/config.js";

export const HTTP = axios.create({
  baseURL: config.MOCK,
});

export default {
  async getPopularFilms() {
    try {
      const response = await HTTP.get("/popular");
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
  async getCategories() {
    try {
      const response = await HTTP.get("/category");
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};