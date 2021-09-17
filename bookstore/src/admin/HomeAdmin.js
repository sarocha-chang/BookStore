import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function Delete(bookid){
    console.log("Delete");
    return(
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    )
}
function HomeAdmin ({className,data}){
    return(
        <tr className={className} >
            <td>
                <img src={data.imageUrl } alt={data.name} className="imgBook"/>
            </td>
            <td>{data.name}</td>
            <td>{data.author}</td>
            <td className="des">
                <span class="text-overflow">{data.description}</span>
            </td>
            <td>{data.type}</td>
            <td>{data.price}</td>
            <td>{data.quantity}</td>
            <td>{data.status}</td>
            <td><Link to ="./EditBook.js"><box-icon name='edit'></box-icon></Link><box-icon  name='trash' type='solid' color='#f04e4e'></box-icon></td>
        </tr>
    )
    
}                  

HomeAdmin.propTypes = {
    className: PropTypes.string.isRequired,
}
export default styled(HomeAdmin)`
    border-bottom: 1px solid #e0e0e0;
    td.des{
        width: 200px;

        span.text-overflow {
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    .imgBook{
        width: 100px;
    }

    box-icon{
        width: 50px;
    }
`;
