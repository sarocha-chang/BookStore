import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Cart({ className, data }) {
  return (
    <h5>
      {data.Book.name}
      <span>{data.Buy.total} THB</span>
    </h5>
  );
}

Cart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object
};

export default styled(Cart)`
  h5 {
    width: 20px;
  }
`;
