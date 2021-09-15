import { API } from "../constants/routes";

const axios = require("axios").default;

function makePropertiesApi() {
  return axios.create({
    baseURL: `${API.MAIN}${API.PROPERTIES}`,
    withCredentials: true,
  });
}

function authClient() {
  return axios.create({
    baseURL: `${API.MAIN}`,
    withCredentials: true,
  });
}

// export function getAllProperties(api = apiTest()) {
//   return api.get("");
// }

// export function getSearched(searched = "", api = apiTest()) {
//   return api.get(searched);
// }

/* export function getSearched(searched, api = makePropertiesApi()) {
  return api.get(`?q=${searched}`);
} */

// export function getProperty(productId, api = makePropertiesApi()) {
//   return api.get(`/${productId}`);
// }

export function getFilteredProperties(
  searched,
  query,
  api = makePropertiesApi()
) {
  // If there's searched text
  if (searched === "") {
    return api.get(`?${query}`);
  } else if (searched !== "Search by city" || query === true) {
    return api.get(`?q=${searched}${query}`);
  } else {
    return api.get(`?${searched}`);
  }
}

export async function setAuth(email, password, api = authClient()) {
  return api.get("/sanctum/csrf-cookie").then((response) => {
    return api
      .post("/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // console.log(response.data.data, "IN");
        return response;
      });
  });
}
