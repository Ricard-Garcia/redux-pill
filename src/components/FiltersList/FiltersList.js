import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RangeSlider } from "@ui5/webcomponents-react";

import Searchbar from "../../components/Searchbar";
import CustomCheckbox from "../../components/CustomCheckbox";
import { getQuery } from "../../utilities/getQuery";

import "./FiltersList.scss";

function FiltersList({ foundProperties }) {
  const search = useSelector((state) => state.search.searchedText);
  const stateFilters = useSelector((state) => state.search.filters);
  const dispatch = useDispatch();

  let [query, setQuery] = useState(
    useSelector((state) => state.search.filteredQuery)
  );

  const [filters, setFilters] = useState(stateFilters);

  useEffect(() => {
    getQuery(filters);
  }, [filters]);

  function handleFilters(e) {
    const filterName = e.target.name;
    const filterValue = e.target.value;
    let stateField = filters[filterName];
    if (
      typeof stateField === "object" &&
      stateField !== null &&
      !Array.isArray(stateField)
    ) {
      stateField[filterValue] = e.target.checked;
      console.log(filters);
      setFilters({ ...filters });
    } else if (e.target.type === "checkbox") {
      setFilters({ ...filters, [filterValue]: e.target.checked });
    } else if (e.target.type === "select-one") {
      setFilters({ ...filters, [filterName]: filterValue });
    } else {
      //Range slider function goes here
    }
  }

  // Do function to get the highest price

  return (
    <div className="row filters-block bg-light border rounded g-4 mt-5 mb-5 p-3 pb-5">
      <div className="col col-4 filter-column">
        {/* Searchbar */}
        <div className="row mb-4 px-2 filter-wrapper">
          <div className="fs-p mb-2 filter-title">Searchbar</div>
          <Searchbar classes="mb-3" />
        </div>
        <hr />
        {/* Type */}
        <div className="row mb-4 px-2 filter-wrapper">
          <div className="fs-p mb-2 filter-title">Type of home</div>
          <div className="row row-cols-1 row-cols-md-2">
            <CustomCheckbox
              onChange={handleFilters}
              title="Flat/Aparment"
              name="type"
              value="flat/apartment"
            />
            <CustomCheckbox
              onChange={handleFilters}
              title="Duplex"
              name="type"
              value="duplex"
            />
            <CustomCheckbox
              onChange={handleFilters}
              title="House"
              name="type"
              value="house"
            />
            <CustomCheckbox
              onChange={handleFilters}
              title="Penthouse"
              name="type"
              value="penthouse"
            />
          </div>
        </div>

        <hr />
        {/* Condition */}
        <div className="mb-4 px-2 filter-wrapper">
          <div className="fs-p mb-2 filter-title">Condition</div>
          <div className="row row-cols-2">
            <CustomCheckbox
              onChange={handleFilters}
              title="New homes"
              name="condition"
              value="new"
            />
            <CustomCheckbox
              onChange={handleFilters}
              title="Good condition"
              name="condition"
              value="good"
            />
            <CustomCheckbox
              onChange={handleFilters}
              title="Needs reform"
              name="condition"
              value="reform"
            />
            {/* !!! TODO to be solved */}
            <p className="col"></p>
          </div>
        </div>
      </div>

      <div className="col col-4 filter-column">
        {/* Bedrooms */}
        <div className="row mb-4 px-2 filter-wrapper">
          <div className="fs-p mb-2 filter-title">Bedrooms</div>
          <div
            className="btn-group"
            role="group"
            aria-label="Bedrooms checkboxes"
          >
            <input
              type="checkbox"
              onChange={handleFilters}
              className="btn-check"
              id="bedroom0"
              autoComplete="off"
              name="room"
              value={0}
            />
            <label className="btn btn-outline-dark" htmlFor="bedroom0">
              0 (Studio flat)
            </label>

            <input
              type="checkbox"
              onChange={handleFilters}
              className="btn-check"
              id="bedroom1"
              autoComplete="off"
              name="room"
              value={1}
            />
            <label className="btn btn-outline-dark" htmlFor="bedroom1">
              1
            </label>

            <input
              type="checkbox"
              onChange={handleFilters}
              className="btn-check"
              id="bedroom2"
              autoComplete="off"
              name="room"
              value={2}
            />
            <label className="btn btn-outline-dark" htmlFor="bedroom2">
              2
            </label>
            <input
              type="checkbox"
              onChange={handleFilters}
              className="btn-check"
              id="bedroom3"
              autoComplete="off"
              name="room"
              value={3}
            />
            <label className="btn btn-outline-dark" htmlFor="bedroom3">
              3
            </label>
            <input
              type="checkbox"
              onChange={handleFilters}
              className="btn-check"
              id="bedroom4"
              autoComplete="off"
              name="room"
              value="fourOrMore"
            />
            <label className="btn btn-outline-dark" htmlFor="bedroom4">
              4 or +
            </label>
          </div>
        </div>
        <hr />
        {/* Bathrooms */}
        <div className="row mb-4 px-2 filter-wrapper">
          <div className="fs-p mb-2 filter-title">Bathrooms</div>
          <div
            className="btn-group"
            role="group"
            aria-label="Bathroom checkboxes"
          >
            <input
              type="checkbox"
              onChange={handleFilters}
              className="btn-check"
              id="bathroom1"
              autoComplete="off"
              name="bath"
              value={1}
            />
            <label className="btn btn-outline-dark" htmlFor="bathroom1">
              1
            </label>

            <input
              type="checkbox"
              onChange={handleFilters}
              className="btn-check"
              id="bathroom2"
              autoComplete="off"
              name="bath"
              value={2}
            />
            <label className="btn btn-outline-dark" htmlFor="bathroom2">
              2
            </label>

            <input
              type="checkbox"
              onChange={handleFilters}
              className="btn-check"
              id="bathroom3"
              autoComplete="off"
              name="bath"
              value="threeOrMore"
            />
            <label className="btn btn-outline-dark" htmlFor="bathroom3">
              3 or +
            </label>
          </div>
        </div>
        <hr />
        {/* Price range */}
        <div className="row mb-4 px-2 g-3 filter-wrapper">
          <div className="fs-p mb-2 filter-title">Price range</div>
          <div className="col col-6 text-center text-muted d-flex align-items-center justify-content-center">
            <p className="m-0 border rounded w-100">Lowest price</p>
          </div>
          <div className="col col-6 text-center text-muted d-flex align-items-center justify-content-center">
            <p className="m-0 border rounded w-100">Highest price</p>
          </div>
          <RangeSlider
            className=""
            max={500000}
            onChange={handleFilters}
            onInput={function noRefCheck() {}}
            slot=""
            style={{
              padding: "0 20px",
            }}
            tooltip=""
          />
        </div>
      </div>

      <div className="col col-4 filter-column">
        {/* Publication date */}
        <div className="row mb-4 px-2 filter-wrapper">
          <div className="fs-p mb-2 filter-title">Publication date</div>
          <select
            className="form-select"
            aria-label="Publication select"
            name="publication_date"
            onChange={handleFilters}
          >
            <option defaultValue>Select a date</option>
            <option value="2">Last 48 hours</option>
            <option value="7">Last week</option>
            <option value="30">Last month</option>
          </select>
        </div>
        <hr />
        {/* Equipment */}
        <div className="row mb-4 px-2 filter-wrapper">
          <div className="fs-p mb-2 filter-title">Equipment</div>
          <select
            className="form-select"
            aria-label="Equipment select"
            disabled
          >
            <option defaultValue>Select equipment</option>
            <option value="1">Test 1</option>
            <option value="2">Test 2</option>
            <option value="3">Test 3</option>
          </select>
        </div>
        <hr />
        {/* MoreFilters */}
        <div className="row mb-4 px-2 filter-wrapper">
          <div className="fs-p mb-2 filter-title">MoreFilters</div>
          <div className="row row-cols-1 row-cols-md-2">
            <CustomCheckbox
              onChange={handleFilters}
              title="Pet friendly"
              name="pet"
              value="pet"
            />
            <CustomCheckbox
              onChange={handleFilters}
              title="Air conditioning"
              name="air_conditioning"
              value="air_conditioning"
            />
            <CustomCheckbox
              onChange={handleFilters}
              title="Swimming pool"
              name="swimming_pool"
              value="swimming_pool"
            />
            <CustomCheckbox
              onChange={handleFilters}
              title="Garden"
              name="garden"
              value="garden"
            />
            <CustomCheckbox
              onChange={handleFilters}
              title="Terrace"
              name="terrace"
              value="terrace"
            />
            <CustomCheckbox
              onChange={handleFilters}
              title="Lift"
              name="lift"
              value="lift"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltersList;
