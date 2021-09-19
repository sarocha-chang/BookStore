import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

function Cart({ className, data }) {
  const [quantity, setQuantity] = useState(data.Buy.quantity);
  const [buyId, setBuyId] = useState(data.Buy.Buy_id);

  function delete_item() {
    axios.delete(`http://localhost:3001/delete_cart_item/${buyId}`).
    then((response) => {
        window.location.reload();
    }).catch((error) => {
        console.log(error);
    });

  }
  
  function add_quan(id,quan){
   const data={
       quantity:parseInt(quan)
   }
    axios.put(`http://localhost:3001/change_quantity_in_cart/${id}`,data).
    then((response) => {
    }).catch((error) => {
        console.log(error);
    });
  }

  return (
    <tr className={className}>
      <td>
        <img src={data.Book.imageUrl} alt={data.name} className="imgBook" />
      </td>
      <td>{data.Book.name}</td>
      <td>{data.Book.price}</td>
      <td>
        <input
          type="number"
          className="quantity"
          min="1"
          max="100"
        value={quantity}
          onChange={(event) => add_quan(data.Buy.Buy_id,event.target.value)}
        />
      </td>
      <td>{data.Buy.total}</td>
      <td>
        <box-icon
          name="trash"
          type="solid"
          color="#f04e4e"
          onClick={delete_item}
        />
      </td>
    </tr>
  );
}

export default styled(Cart)`
  img {
    width: 80px;
    box-shadow: 0px 0px 6px black;

  }
  input {
    text-align: center;
  }
`;
