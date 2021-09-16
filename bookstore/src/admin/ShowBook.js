import PropTypes from "prop-types";
import styled from "styled-components";
import {useState, useEffect } from "react";
import axios from "axios";
import HomeAdmin from "./HomeAdmin";

function Books({className}) {
    const [books, setBook] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:3001/show").then((res) => {
			setBook(res.data);
		});
	}, []);
  return (
      <>
      <div className={className}>
          <h1>ข้อมูลหนังสือ</h1>
          <table className="ShowBook">
            <thead>
                <td className="Topic">รูป</td>
                <td className="Topic">ชื่อหนังสือ</td>
                <td className="Topic">ชื่อผู้แต่ง</td>
                <td className="Topic">คำอธิบาย</td>
                <td className="Topic">ประเภท</td>
                <td className="Topic"> ราคา</td>
                <td className="Topic">จำนวน</td>
                <td className="Topic">สถานะ</td>
                <td className="Topic"></td>
            </thead>
            <tbody>
            {books ?
                books.map((data) => {
                    return <HomeAdmin key={data._id} data={data} />
                })
            :(
				<div>Loading products....</div>
			)}
        </tbody>
        </table>
        </div>
    </>
  );
}

Books.propTypes={
    className: PropTypes.string.isRequired,
    books: PropTypes.object.isRequired
}

export default styled(Books)`
margin-bottom: 50px;
    width: 98%;
    h1{
        font-size: 26px;
        text-align: center;
        margin-bottom: 4rem;
    }
    .ShowBook{
            border-collapse: collapse;
            border-radius: 15px;
            width: 100%;
            table-layout: fixed;
            
            td.Topic{
                text-align: center;
                font-size: 18px;
                font-weight: bold;    
                padding-bottom: 30px;
            }
        
            td{
                color: black;
                font-size: 14px;
                text-align:center;
                padding: 5px 10px 5px 10px;
            }
        }
    `;