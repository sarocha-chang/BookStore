import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { useSelector, useDispatch } from "react-redux";
import { deleteReceipt,updateReceipt,fetchReceipts } from "../../app/Receipt/actions"

function Cart({ className, data }) {
  const [quantity] = useState(data.Buy.quantity);
  const [user] = useState(JSON.parse(localStorage.getItem("InLogin")));

  const receipt = useSelector((state) => state.receipts);
  const dispatch = useDispatch();

  React.useEffect(() =>{
		const get_cart = (id) => {
			axios.get(`/get_cart/${id}`).then((res) => {
				dispatch(fetchReceipts(res.data));
			});
		};
    get_cart(user._id)
  },[dispatch, receipt, user._id])

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
                window.location.reload()
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
        console.log(response.data);
        dispatch()
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
