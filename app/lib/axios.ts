import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Gọi API refresh token ở đây
        // const { access_token } = await refreshTokenApi();
        // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        // return axiosClient(originalRequest);
      } catch (refreshError) {
        // Nếu refresh cũng lỗi thì đá ra trang login
        // window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
