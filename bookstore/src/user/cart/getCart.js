import styled from "styled-components"
import { useState, useEffect } from "react";

function Cart({className,data}) {
    
    const [cart, setCart] = useState(data);
    console.log(cart);

    function delete_item(){
        console.log("delete_item");
    }

    return (
            <tr className={className}>
                <td>{data.Buy.quantity}</td>
                <td>{data.Buy.total}</td>
            </tr>
    )
}

export default styled(Cart)`
         
`;