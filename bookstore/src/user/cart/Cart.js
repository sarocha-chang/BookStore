import styled from "styled-components"

function Cart({className}){
    return (
        <div className={className}>
            <h1>Cart</h1>
        </div>
    )
}
export default styled(Cart)`
    h1{
        color: red;
    }
`;