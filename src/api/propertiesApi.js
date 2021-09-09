import { API } from "../constants/routes";

const axios = require("axios").default;

function makePropertiesApi() {
  return axios.create({ baseURL: `${API.MAIN}${API.PROPERTIES}` });
}

export function getAllProperties(api = makePropertiesApi()) {
  return api.get("");
}

export function getSearched(searched, api = makePropertiesApi()) {
  return api.get(`?q=${searched}`);
}

export function getProperty(productId, api = makePropertiesApi()) {
  return api.get(`/${productId}`);
}

export function getFilteredProperties(
  searched,
  query,
  api = makePropertiesApi()
) {
  return api.get(`?q=${searched}?${query}`);
}
