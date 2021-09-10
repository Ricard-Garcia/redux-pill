import db from "../../db/db.json";

// API query
export function getQuery(object) {
  let query = "";
  for (const property in object) {
    if (typeof object[property] !== "object" && object[property] !== false) {
      if (object[property] === true) {
        // Boolean properties
        query += `&${property}=${object[property]}`;
      } else if (
        object[property] !== 0 &&
        typeof object[property] === "number"
      ) {
        // Numbers (price)
        if (property === "minPrice") {
          query += `&price_gte=${object[property]}`;
        } else {
          query += `&price_lte=${object[property]}`;
        }
      } else if (object[property] !== "") {
        // Empty strings
        if (object[property] === "Select a date") {
          return;
        } else if (property === "publication_date") {
          const searchedTime = timeFilter(object[property]);
          query += `&publication_date_gte=${searchedTime}`;
          console.log(object[property]);
        } else {
          query += `&${property}=${object[property]}`;
        }
      }
    } else {
      for (const innerProperty in object[property]) {
        if (object[property][innerProperty] === true) {
          if (innerProperty === "fourOrMore") {
            query += `&room_like=[4-${getMaxRooms()[0]}]`;
          } else if (innerProperty === "threeOrMore") {
            query += "&bath_gte=3";
          } else {
            query += `&${property}=${innerProperty}`;
          }
        }
      }
    }
  }
  // console.log(query, "Final query");
  return query;
}

// Range slider
export function getMaxPrice(array) {
  let maxPriceArr = [];
  array.map((property) => {
    maxPriceArr.push(property.price);
  });

  return Math.max(...maxPriceArr);
}

// Publication date selector
function timeFilter(publicationDate = 2) {
  const actualDate = new Date();
  const substractedDate = new Date(
    actualDate.setDate(actualDate.getDate() - publicationDate)
  );

  const month = String(substractedDate.getMonth() + 1);
  const formatedMonth = month.length === 1 ? "0" + month : month;

  const day = String(substractedDate.getDate());
  const formatedDay = day.length === 1 ? "0" + day : day;

  const searchedDate =
    substractedDate.getFullYear() +
    "/" +
    formatedMonth +
    "/" +
    formatedDay +
    substractedDate.getHours() +
    ":" +
    substractedDate.getMinutes() +
    ":" +
    substractedDate.getSeconds();

  return searchedDate;
}

// Getting max rooms and baths
export const getMaxRooms = function (data = db.properties) {
  let maxRoomsArr = [];
  let maxBathsArr = [];

  data.map((property) => {
    maxRoomsArr.push(property.room);
    maxBathsArr.push(property.bath);
  });

  return [Math.max(...maxRoomsArr), Math.max(...maxBathsArr)];
};
