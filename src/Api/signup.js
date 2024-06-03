import axios from "axios"

export const memberApi = axios.create({
  baseURL: "https://hufs-mutsa-12th.store/"
})