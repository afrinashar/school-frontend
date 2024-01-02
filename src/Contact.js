 import { Container,Row,Col } from "react-bootstrap"
const Contact=()=>{
 return (<> <Container className="text-secondary ">
 <Row>
   <Row>
     <Col>
       <h2>Contact Us</h2>
       <div className="grad"></div>
       <p>
         Transform your concepts into exceptional software solutions.
         Connect with us now, and let's embark on a journey to software
         success together. Our team of seasoned software engineers is
         passionate about creating innovative solutions that address
         real-world problems. We're always eager to take on new
         challenges and opportunities to make a difference and have a
         highly positive impact. Explore career opportunities and more by
         visiting Work With Us or mail your CV's to recruit@ssintek.com
       </p>
       <p>
        St Peter's Middle School
         <br />
         16/18 Church Street  <br />
          Moolaikadu <br /> Tamil Nadu - 627 113
       </p>{" "}
       <a href="mailto:hm@peter.com"> hm@peter.com</a>
       <br /> <a href="tel:+9750244489">+91 7502447888</a>
     </Col>
     <Col>   <p>
       Ready to take the first step? Reach out to us via our contact
       form.{" "}
     </p>
     <form className="row g-3">
       <div className="col-md-6">
         <label className="form-label">Name</label>
         <input type="text" className="form-control" id="name" />
       </div>{" "}
       <div className="col-md-6">
         <label className="form-label">Company Name</label>
         <input type="text" className="form-control" id="company" />
       </div>{" "}
       <div className="col-md-6">
         <label className="form-label">Email</label>
         <input type="email" className="form-control" id="inputEmail4" />
       </div>{" "}
       <div className="col-md-6">
         <label className="form-label">Number</label>
         <input type="text" className="form-control" id="inputEmail4" />
       </div>{" "}
       <div className="col-md-12">
         <label className="form-label">Write your question</label>
         <textarea
           type="textarea"
           className="form-control"
           id="inputEmail4"
         />
       </div>
       <button className="btn btn-primary sm" type="submit"> SUBMIT</button>
     </form>
    </Col>
   </Row>
    
 </Row>
</Container></>)
}
export default Contact