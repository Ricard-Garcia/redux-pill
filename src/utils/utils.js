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
        query += `&${property}=${object[property]}`;
      }
    } else {
      for (const innerProperty in object[property]) {
        if (object[property][innerProperty] === true) {
          if (innerProperty === "fourOrMore") {
            query += "&room_gte=4";
          } else if (innerProperty === "threeOrMore") {
            query += "&room_gte=3";
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
