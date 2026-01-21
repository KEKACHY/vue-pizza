import api from "./AxiosInstance";

export default class ApiService {
  async get(url) {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      console.error("GET error:", error);
      throw error;
    }
  }

  async post(url, payload) {
    try {
      const response = await api.post(url, payload);
      return response.data;
    } catch (error) {
      console.error("POST error:", error);
      throw error;
    }
  }

  async put(url, payload) {
    try {
      const response = await api.put(url, payload);
      return response.data;
    } catch (error) {
      console.error("PUT error:", error);
      throw error;
    }
  }

  async delete(url) {
    try {
      const response = await api.delete(url);
      return response.data;
    } catch (error) {
      console.error("DELETE error:", error);
      throw error;
    }
  }
}
