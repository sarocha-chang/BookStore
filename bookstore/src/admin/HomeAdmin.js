import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import React from "react";
import Context from "../Context";

function HomeAdmin({ className, data }) {
	const [id] = React.useState(data._id);
	const [books, setBook] = React.useContext(Context);

	function delete_book() {
		return Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("Deleted!", "Your file has been deleted.", "success");
				axios.delete(`http://localhost:3001/delete_book/${id}`).then((data) => {
					const book = [...books];
					book.splice(
						book.findIndex((item) => item._id === id),
						1,
					);
					setBook(book);
				});
			}
		});
	}

	return (
		<tr className={className}>
			<td>
				<img src={data.imageUrl} alt={data.name} className="imgBook" />
			</td>
			<td>{data.name}</td>
			<td>{data.author}</td>
			<td className="des">
				<span className="text-overflow">{data.description}</span>
			</td>
			<td>{data.type}</td>
			<td>{data.price}</td>
			<td>{data.quantity}</td>
			<td>{data.status}</td>
			<td>
				<Link to={`./EditBookAdmin/${data._id}`}>
					<box-icon name="edit" />
				</Link>
				<box-icon
					name="trash"
					type="solid"
					color="#f04e4e"
					onClick={delete_book}
				/>
			</td>
		</tr>
	);
}

HomeAdmin.propTypes = {
	className: PropTypes.string.isRequired,
};

export default styled(HomeAdmin)`
	border-bottom: 1px solid #e0e0e0;
	td.des {
		width: 200px;

		span.text-overflow {
			display: block;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
	.imgBook {
		width: 100px;
	}

	box-icon {
		width: 50px;
	}
`;
