// API query
export function getQuery(object) {
  let query = "";
  let typeArr = [];
  let conditionArr = [];
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
          if (property === "room") {
            let roomsArr = [];
            for (const roomNumber in object.room) {
              if (
                object.room[roomNumber] === true &&
                roomNumber !== "fourOrMore"
              ) {
                roomsArr.push(roomNumber);
              }
            }

            if (!query.includes("room=") && roomsArr.length !== 0) {
              query += `&${property}=${roomsArr}`;
            }

            // Checking if the "four or more" option is selected
            if (object[property]["fourOrMore"] === true) {
              // query += `&${property}=${roomsArr}`;
              if (!query.includes("room_gte")) {
                query += `&${property}_gte=4`;
              }
            }

            // Properties bath filter
          } else if (property === "bath") {
            let bathsArr = [];
            for (const bathNumber in object.bath) {
              if (
                object.bath[bathNumber] === true &&
                bathNumber !== "threeOrMore"
              ) {
                bathsArr.push(bathNumber);
              }
            }

            if (!query.includes("bath=") && bathsArr.length !== 0) {
              query += `&${property}=${bathsArr}`;
            }

            // Checking if the "three or more" option is selected
            if (object[property]["threeOrMore"] === true) {
              if (!query.includes("bath_gte")) {
                query += `&${property}_gte=3`;
              }
            }
          } else {
            let typeQuery = "";
            let conditionQuery = "";
            if (property === "type") {
              for (const innerProperty in object[property]) {
                if (object[property][innerProperty] === true) {
                  typeArr.push(`${innerProperty}`);
                }
              }
              typeQuery += `&${property}=${typeArr}`;
              if (!query.includes("type")) {
                query += typeQuery;
              }
            } else if (property === "condition") {
              for (const innerProperty in object[property]) {
                if (object[property][innerProperty] === true) {
                  conditionArr.push(`${innerProperty}`);
                }
              }
              conditionQuery += `&${property}=${conditionArr}`;
              if (!query.includes("condition")) {
                query += conditionQuery;
              }
            }
          }
        }
      }
    }
  }
  console.log("Final query ---> ", query);
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
