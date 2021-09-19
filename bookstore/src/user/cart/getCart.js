import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../app/actions"

function Cart({ className, data }) {
  const [quantity] = useState(data.Buy.quantity);
  const [buyId] = useState(data.Buy.Buy_id);

  const cart = useSelector((state) => state.books);
  const dispatch = useDispatch();

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
          .delete(`/delete_cart_item/${buyId}`)
          .then((response) => {
            Swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            ).then(() => {
                window.location.reload();
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }

  function add_quan(id, quan) {
    const data = {
      quantity: parseInt(quan),
    };
    axios
      .put(`http://localhost:3001/change_quantity_in_cart/${id}`, data)
      .then((response) => {
      })
      .catch((error) => {
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
          onChange={(event) => add_quan(data.Buy.Buy_id, event.target.value)}
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
