import { client } from "@/api/services.gen";

client.instance.interceptors.request.use((config) => {
  return config;
});

client.instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
