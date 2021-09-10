import db from "../../db/db.json";
import { getMaxPrice } from "../../utils/utils";

const initialState = {
  searchedText: "Search by city",
  isLoading: false,
  hasError: false,
  foundProperties: [],
  filteredQuery: "",
  filters: {
    condition: { new: false, good: false, reform: false },
    type: {
      "flat/apartment": false,
      duplex: false,
      house: false,
      penthouse: false,
    },
    room: { 0: false, 1: false, 2: false, 3: false, fourOrMore: false },
    bath: { 1: false, 2: false, threeOrMore: false },
    //size: 0,
    minPrice: 0,
    maxPrice: getMaxPrice(db.properties),
    pet: false,
    lift: false,
    garden: false,
    air_conditioning: false,
    swimming_pool: false,
    terrace: false,
    publication_date: "",
    equipment: "",
  },
};
export default initialState;
