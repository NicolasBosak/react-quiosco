import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "http://localhost:8000", // Cambia esto si tu API usa otra URL o puerto
});

export default clienteAxios;