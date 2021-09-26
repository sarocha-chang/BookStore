import React from "react";
import styled from "styled-components";
import { useState, useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteReceipt,updateReceipt } from "../../app/Receipt/actions"

function Cart({ className, data }) {
  const [quantity,SetQuantity] = useState(data.Buy.quantity);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
   SetQuantity(data.Buy.quantity)
  },[data.Buy.quantity])




  function delete_item() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
        .delete(`/delete_cart_item/${data.Buy.Buy_id}`)
        .then(() => {
          Swal.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
            ).then(() => {
              dispatch(deleteReceipt(data.Buy.Buy_id))
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }

  function add_quantity(id, quantity) {
    const data = {
      quantity: parseInt(quantity),
    };
    SetQuantity(quantity)
    dispatch(updateReceipt({id,quantity}))
    axios.put(`/change_quantity_in_cart/${id}`, data)
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
          onChange={(event) => add_quantity(data.Buy.Buy_id, event.target.value)}
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
Cart.propTypes = {
	className: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default styled(Cart)`
  img {
    width: 80px;
    box-shadow: 0px 0px 6px black;
  }
  input {
    text-align: center;
  }
`;
