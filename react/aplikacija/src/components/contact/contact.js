import envelope from "./envelope.png";
import instagram from "./instagram.png";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <h2>Contact us here:</h2>
          <div className="d-flex gap-3 my-3">
            <img src={envelope} alt="envelope icon" />
            <p>info@travelwithruta.com</p>
          </div>
          <div className="d-flex gap-3 my-3">
            <img src={instagram} alt="instagram icon" />
            <p>@travel_with_ruta</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
