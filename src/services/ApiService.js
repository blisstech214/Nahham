// services/ApiService.js
import axios from "axios";
import { toast } from "react-toastify";

const ApiService = {
  api: null,

  createApiInstance() {
    const user = localStorage.getItem("user");
    const token = user ? JSON.parse(user).auth_token : null;

    const apiUrl = process.env.REACT_APP_API_URL;

    this.api = axios.create({
      baseURL: apiUrl,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error.response?.status;
        const data = error.response?.data;

        if (status === 401) {
          toast.error("Unauthorized access");
          // Optional redirect or logout can go here
        } else if (status === 500) {
          toast.error("An internal server error occurred.");
        } else if (status === 422) {
          toast.error(data?.message || "Validation error.");
        } else {
          toast.error(data?.message || "Something went wrong");
        }

        return Promise.reject(error);
      }
    );
  },

  /**
   * Generic request method for making API calls.
   * @param {object} config - Axios request configuration.
   * @returns {Promise} - Axios response promise.
   */
  request(config) {
    this.createApiInstance(); // Always use fresh token
    return this.api.request(config);
  },

  /**
   * GET request.
   * @param {string} url - The endpoint URL.
   * @param {object} [params] - Optional query parameters.
   * @returns {Promise}
   */
  get(url, params = {}) {
    return this.request({ method: "GET", url, params });
  },

  /**
   * POST request.
   * @param {string} url - The endpoint URL.
   * @param {object} data - The request payload.
   * @returns {Promise}
   */
  post(url, data) {
    return this.request({ method: "POST", url, data });
  },

  /**
   * PUT request.
   * @param {string} url - The endpoint URL.
   * @param {object} data - The request payload.
   * @returns {Promise}
   */
  put(url, data) {
    return this.request({ method: "PUT", url, data });
  },

  /**
   * DELETE request.
   * @param {string} url - The endpoint URL.
   * @returns {Promise}
   */
  delete(url) {
    return this.request({ method: "DELETE", url });
  },
};

export default ApiService;
