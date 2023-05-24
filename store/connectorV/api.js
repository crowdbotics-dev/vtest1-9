import axios from "axios"
import { CONNECTORV1_USERNAME, CONNECTORV1_PASSWORD } from "react-native-dotenv"
const connectorV = axios.create({
  baseURL: "https://cbdash-pr-4484.herokuapp.com/dashboard/app/9/connectors",
  auth: { username: CONNECTORV1_USERNAME, password: CONNECTORV1_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
