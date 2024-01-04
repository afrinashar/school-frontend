import "./Home.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";
 import { Cards } from "./component/Cards";
import { History } from "./component/History";
import { Acheivment } from "./component/Acheivment";
import { Container } from "react-bootstrap";
import { Video } from "./assets/Video";
import CountUp from 'react-countup';
const Home = () => {
  return (
    <>
    <Header /> 
     
     
    <Video className="fluid"/>
      <Container className="d-flex flex-column justify-content-end  w-100">
      <Carousel
        style={{
          height: "25rem",
          width: "45rem",
          alignItems: "centre",
          margin: "10px",
        }}
        fade
      >
        
        <Carousel.Item>
          <img
            className="d-block m-5 w-100"
            src="http://tnfindia.org/wp-content/uploads/2018/09/DSC01862s1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>our rinter</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block m-5 w-100"
            alt="Second slide"
            src="https://1847884116.rsc.cdn77.org/tamil/home/10th12th-2492020m1.jpg"
          />

          <Carousel.Caption>
            <h3>Second </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-blockm-5 w-100"
            src="https://s4.scoopwhoop.com/anj/indian_students/898748994.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      <div className="d-inline">
        {" "}
        <button type="button" class="btn m-5 btn-danger">
          <Link to={"/students"}>Students</Link>
        </button>
        <button type="button" class="btn m-5 p-3 lg btn-danger">
          <Link to={"/teachers"}>Teachers</Link>
        </button>
        <button type="button" class="btn m-5 btn-danger">
          <Link to={"/more"}>more</Link>
        </button>
      </div>
     <Acheivment/>
    <History/>
      <div className="object" style={{ color: "#001f54" }}></div>
      <h1 style={{ color: "#001f54" }}>Objectives</h1>
      <ul style={{ color: "#001f54" }}>
        <li>Ensuring100% access to all children</li>
        <li>Provide a conduciveleaningenvironment to students</li>
        <li>Educate social movments</li>
      </ul>

      <h1 style={{ color: "#001f54" }}>Directorate of Education</h1>
      <div
        className="Directorate "
        style={{ backgroundColor: "#001f54", color: "white",margin:"10px" }}
      >
        <ul className="d-flex list-unstyled m-3 d-flex justify-content-around"> 
        <li><h3>Students</h3></li>
         <li><h3> alumni</h3></li>
         <li><h3>  courses</h3></li> </ul>
      <ul className="d-flex list-unstyled m-3 p-5 d-flex justify-content-around"> <li><h2> <CountUp end={198} duration={5} /> </h2></li>
      <li><h2> <CountUp end={10045} duration={5} /></h2></li>
      <li><h2> <CountUp end={14} duration={5} /></h2></li>
    </ul>   </div>
     <Cards/>
    
    </Container> <Footer></Footer></>
  );
};
export default Home;
