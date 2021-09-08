import React from "react";
import { RangeSlider } from "@ui5/webcomponents-react";

import Searchbar from "../../components/Searchbar";
import CustomCheckbox from "../../components/CustomCheckbox";

import "./FiltersList.scss";

function FiltersList({ foundProperties }) {
  // console.log(foundProperties, "Found properties!");

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
            <CustomCheckbox name="Flat/Aparment" />
            <CustomCheckbox name="Duplex" />
            <CustomCheckbox name="House" />
            <CustomCheckbox name="Penthouse" />
          </div>
        </div>

        <hr />
        {/* Condition */}
        <div className="mb-4 px-2 filter-wrapper">
          <div className="fs-p mb-2 filter-title">Condition</div>
          <div className="row row-cols-2">
            <CustomCheckbox name="New homes" />
            <CustomCheckbox name="Good condition" />
            <CustomCheckbox name="Needs reform" />
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
              className="btn-check"
              id="bedroom0"
              autoComplete="off"
            />
            <label className="btn btn-outline-dark" htmlFor="bedroom0">
              0 (Studio flat)
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="bedroom1"
              autoComplete="off"
            />
            <label className="btn btn-outline-dark" htmlFor="bedroom1">
              1
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="bedroom2"
              autoComplete="off"
            />
            <label className="btn btn-outline-dark" htmlFor="bedroom2">
              2
            </label>
            <input
              type="checkbox"
              className="btn-check"
              id="bedroom3"
              autoComplete="off"
            />
            <label className="btn btn-outline-dark" htmlFor="bedroom3">
              3
            </label>
            <input
              type="checkbox"
              className="btn-check"
              id="bedroom4"
              autoComplete="off"
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
              className="btn-check"
              id="bathroom1"
              autoComplete="off"
            />
            <label className="btn btn-outline-dark" htmlFor="bathroom1">
              1
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="bathroom2"
              autoComplete="off"
            />
            <label className="btn btn-outline-dark" htmlFor="bathroom2">
              2
            </label>

            <input
              type="checkbox"
              className="btn-check"
              id="bathroom3"
              autoComplete="off"
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
            onChange={function noRefCheck() {}}
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
          <select className="form-select" aria-label="Publication select">
            <option defaultValue>Select a date</option>
            <option value="1">Last 48 hours</option>
            <option value="2">Last week</option>
            <option value="3">Last month</option>
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
            <CustomCheckbox name="Pet friendly" />
            <CustomCheckbox name="Air conditioning" />
            <CustomCheckbox name="Swimming pool" />
            <CustomCheckbox name="Garden" />
            <CustomCheckbox name="Terrace" />
            <CustomCheckbox name="Lift" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltersList;
