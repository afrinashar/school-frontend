import "./Home.css";
import { Link } from "react-router-dom";
import Header from "./Header";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import ReactPlayer from 'react-player/lazy'
const Home = () => {
  return (
    <>
      <Header />
      <ReactPlayer
     width='100%'
     height='100%'

      url='https://youtu.be/7xCe2m0kiSg?si=_xTGOU9rXIoU6Mdo' />
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
      <h1>Acheivments</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h1>History</h1>
      <p>
        Article 45 of the Indian Constitution mandated the State to endeavor to
        provide, within a period of 10 years from the commencement of the
        Constitution, free and compulsory education for all children until they
        complete the age of 14 years. By the 86th Amendment Act 2002, Article
        21A of the Constitution was inserted declaring that right to education
        for all children from the age of 6 -14 is the fundamental right.
        Elementary Education refers to the first phase of compulsory education
        that children obtain from the age of 6 to 14 years. It provides students
        the basic understanding of various subjects and develops critical
        thinking skills which they require throughout their lives. In 2009
        Parliament enacted the Right of Children to free and compulsory
        Education Act 2009 (Act 35 of 2009) with the object of free and
        compulsory education to all the children from the age of 6 - 14 years.
        In order to implement the Right of Children to Free and Compulsory
        Education (RTE) Act, 2009 and to achieve the educational goals through
        Elementary Education, the Government of Tamil Nadu is taken lot of
        initiatives and introduced various welfare measures..
      </p>
      <div className="object" style={{ color: "#001f54" }}></div>
      <h1 style={{ color: "#001f54" }}>Objectives</h1>
      <ul style={{ color: "#001f54" }}>
        <li>Ensuring100% access to all children</li>
        <li>Provide a conduciveleaningenvironment to students</li>
        <li>Educate social movments</li>
      </ul>

      <h1 style={{ color: "#001f54" }}>Directorate of Education</h1>
      <div
        className="Directorate"
        style={{ backgroundColor: "#001f54", color: "white" }}
      >
        <h2>dd</h2>
        <h2>2550997 Students</h2>
        <h2>108537 Teachers</h2>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
