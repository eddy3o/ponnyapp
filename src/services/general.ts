import axios from "axios";

// For environment variables
const globalUrl = process.env.NEXT_PUBLIC_API_URL;

async function login(data: unknown) {
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: globalUrl + "/login",
    headers: {},
    data: data,
  };
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    localStorage.setItem("token", response.data.token);
    window.location.href = "/web/home";
  } catch (error) {
    console.log(error);
  }
}

async function register(data: unknown) {
  console.log(globalUrl);
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: globalUrl + "/register",
    headers: {},
    data: data,
  };
  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    alert("Usuario registrado con éxito");
    window.location.href = "/signin";
  } catch (error) {
    alert("Error al registrar usuario");
    console.log(error);
  }
}

async function logout() {
  localStorage.removeItem("token");
  window.location.href = "/";
}

async function get(url: string) {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: globalUrl + url,
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    return error;
  }
}

async function post(url: string, data: unknown) {
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: globalUrl + url,
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function checkToken() {
  if (!localStorage.getItem("token")) {
    window.location.href = "/signin";
  }
}

export { get, post, login, register, logout, checkToken };
