import PropTypes from "prop-types";
import styled from "styled-components";

function HomeAdmin ({data}){
    console.log(data);
    return(
        <>
        <tr className="bookDetail">
                <td>{data.name}</td>
                <td>{data.name}</td>
                <td>{data.author}</td>
                <td className="des">
                <span class="text-overflow">{data.description}</span></td>
                <td>{data.type}</td>
                <td>{data.price}</td>
                <td>{data.quantity}</td>
                <td>{data.status}</td>
                </tr>
        </>
    )
}
HomeAdmin.propTypes = {
    className: PropTypes.string.isRequired,
}
export default styled(HomeAdmin)`
`;
