import axios from "axios";

export const BASE_URL_API = "https://jigoindia.in/api";
export const IMAGE_URL = "https://jigoindia.in/";

export const EMAIL_URL = "https://jigo-email-server.onrender.com/api/v1";

export const instance = axios.create({
  baseURL: BASE_URL_API,
});

export const sendEmail = async (email: string, number: string, data: any) => {
  const response = await axios.post(`${EMAIL_URL}/sendMail`, {
    email,
    number,
    data,
  });
  return response;
};
