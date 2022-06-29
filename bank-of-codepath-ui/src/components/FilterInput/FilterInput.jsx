import { PinDropSharp } from "@material-ui/icons";
import * as React from "react";
import "./FilterInput.css";

export default function FilterInput(props) {
  return (
    <div className="filter-input">
      <i className="material-icons">search</i>
      <input
        type="text"
      
        placeholder="Search transactions"
        input=""
      value={props.inputValue}
      onChange={props.handleOnChange}
      />
    </div>
  );
}
