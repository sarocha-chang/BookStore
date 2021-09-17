import PropTypes from "prop-types";
import styled from "styled-components";

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
`;
