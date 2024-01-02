import { Container,Row,Col } from "react-bootstrap"
import { Location } from "../src/assets/Location"
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";

const Footer=()=>{
    return(<>
    <Container fluid className=" text-light bg-secondary mt-5 p-5">
 <Row>
    <Col>
    
    <Row className="m-5 p-5 ">
   <p> <CiLocationOn size={20} className=" rounded-circle   font-weight-bold bg-danger  border border-light" /> 16/18 church Street <br/>
   Moolaikadu,<br/>
   Tirunelveli-627113
</p>
<p> <IoMdCall  size={20} className=" rounded-circle p-1 font-weight-bold bg-success   border border-light"/> 7403222333
</p>
<p><CiMail size={20} className=" rounded-circle p-1 font-weight-bold bg-success   border border-light" />peters@gmail.com
</p>
    </Row>
    <Row></Row> </Col>
<Col><Location></Location> </Col></Row>
    </Container>
    
    </>)
}
export default Footer