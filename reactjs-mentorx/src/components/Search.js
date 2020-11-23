import React, { useState } from "react";
import styled from "styled-components";

export const StyleSearch = styled.div`
margin-top:30px;
input{
  height:35px;
  color:#121212;
  
  padding:5px 0px 5px 15px;
  font-size:15px;
}
button{
  background-color:transparent;
  color:#121212;
  text-align:center;
  padding:5px 10px;
}
`;

const Search = ({ closeModule, onSearch }) => {
  const [value, setValue] = useState("");

  function handleInput(e) {
    setValue(e.target.value);
  }

  return (
    <StyleSearch>
      <div>
        <input
          value={value}
          onChange={handleInput}
        />
        <button onClick={() => onSearch(value)}>Search</button>
      </div>
    </StyleSearch>
  );
};

export default Search;
