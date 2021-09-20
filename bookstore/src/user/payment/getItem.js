import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Cart({ className, data }) {
  return (
    <h5>
      {data.Book.name}
      <span>{data.Buy.total} THB</span>
    </h5>
  );
}
export default styled(Cart)`
  h5 {
    width: 20px;
  }
`;
