import { Button, FormControl ,Container,Row,Col} from "react-bootstrap";
import "boxicons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function navbar_list({ className }) {
  return (
    <>
        <footer style={{background:"#e65100"}}>
            <Container>
                <Row>
                    <Col sm={5} style={{marginTop:"22px"}}>
                       <ul>
                          
                           <li style={{listStyleType:"none",color:"#fff"}}>
                           <box-icon name='location-plus' color='#005488' ></box-icon> ซอย สุโขทัย 5 สุเทพ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200
                           </li>
                           <li style={{listStyleType:"none",color:"#fff",marginRight:"295px",marginTop:"10px"}}>
                           <box-icon name='phone' color='#005488' ></box-icon> 053-120-446
                           </li>
                       </ul>
                    </Col>
                    <Col sm={3}>
                        <ul>
                            <li style={{listStyleType:"none",marginTop:"40px"}}>
                            <box-icon name='copyright' type='solid' color='#005488' ></box-icon>
                            </li>
                        </ul>
                    </Col> 
                    <Col sm={4} style={{marginTop:"8px"}}>
                        <ul>
                            <li style={{listStyleType:"none",color:"#fff"}}>
                            <box-icon name='instagram' type='logo' color='#de0eb4'  style={{marginTop:"5px"}}></box-icon>chachax_bookstore  
                            </li >
                            <li style={{listStyleType:"none",color:"#fff"}}>
                            <box-icon name='twitter' type='logo' color='#005488' ></box-icon>chachax_bookstore
                            </li>
                            <li style={{listStyleType:"none",color:"#fff"}}>
                            <box-icon name='internet-explorer' type='logo' color='#005488' ></box-icon> www.chachax.com
                            </li>
                        </ul>
                    </Col> 
                </Row>
            </Container>
            
        </footer>
    </>
  );
}
export default styled(navbar_list)`
  font-family: "IBM Plex Sans Thai", sans-serif;
  position: relative;
  .brand {
    font-size: 26px;
    font-weight: normal;
  }
  .nav-right {
    a.login {
      margin-bottom: 1rem;
      margin-right: 1rem;
    }
    .cart box-icon {
      margin-top: 1rem;
    }
    /*  li{
        list-style-type: none;
    } */
  }
`;
