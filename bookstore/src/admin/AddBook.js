import PropTypes from "prop-types";
import { useEffect } from "react";
import axios from "axios";

const AddBook = () => {
  const AddBook = (body) => {
      axios.post("http://localhost:3001/add_book", body)

  return (
    <div>
      <button
        onClick={AddBook({
          name: "เศษใจเหลือเหลือ",
          price: 200,
          quantity: 2,
          description: "ใจบางๆของเราหรือจะสู้ ใจของเขา",
          Image: "โง่",
        })}
      >
        Get
      </button>
    </div>
  );
    }
}
AddBook.propTypes = {};
export default AddBook;