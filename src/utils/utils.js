import db from "../db/db.json";

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
        } else {
          query += `&${property}=${object[property]}`;
        }
      }
    } else {
      for (const innerProperty in object[property]) {
        if (object[property][innerProperty] === true) {
          // Porperties rooms filter
          let roomQuery = "";
          if (property === "room") {
            let roomsArr = [];
            for (const roomNumber in object.room) {
              if (object.room[roomNumber] === true) {
                roomsArr.push(roomNumber);
              }
            }
            // Checking if the "four or more" option is selected
            if (roomsArr.includes("fourOrMore")) {
              roomQuery += "&room_like=.*";
              for (let i = 0; i < 4; i++) {
                if (!roomsArr.includes(String(i))) {
                  roomQuery += `&room_ne=${i}`;
                }
              }
              // Avoids repeting code on the query
              if (!query.includes(roomQuery)) {
                query += roomQuery;
              }
              // If not process the query normally
            } else {
              query += `&${property}=${innerProperty}`;
            }

            // Properties bath filter
          } else if (property === "bath") {
            let bathQuery = "";
            let bathsArr = [];
            for (const bathNumber in object.bath) {
              if (object.bath[bathNumber] === true) {
                bathsArr.push(bathNumber);
              }
            }
            // Checking if the "three or more" option is selected
            if (bathsArr.includes("threeOrMore")) {
              bathQuery += "&bath_like=.*";
              if (!bathsArr.includes("1")) {
                bathQuery += "&bath_ne=1";
              } else if (!bathsArr.includes("2")) {
                bathQuery += "&bath_ne=2";
              }
              // Avoids repeting code on the query
              if (!query.includes(bathQuery)) {
                query += bathQuery;
              }

              // If not process the query normally
            } else {
              query += `&${property}=${innerProperty}`;
            }
          } else {
            query += `&${property}=${innerProperty}`;
          }
        }
      }
    }
  }
  console.log(query, "Final query");
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
