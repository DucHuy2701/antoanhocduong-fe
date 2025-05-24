import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="100">
          Liên hệ
        </h2>
        <div className="row">
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="200">
            <h4>Thông tin liên hệ</h4>
            <p>
              <i className="bi bi-geo-alt"></i> Trụ sở: Số 7A - 9, Đường số 12,
              KP 37, P.Bình Chiểu, TP.Thủ Đức, TP.HCM, Việt Nam
            </p>
            <p>
              <i className="bi bi-telephone"></i> &#40;+84&#41; 0945 737 186
            </p>
            <p>
              <i className="bi bi-envelope"></i> service@power5techlonoly.com
            </p>
            {/* googlemap */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.129046851189!2d106.74634651719667!3d10.877788191822438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d80b386d8be7%3A0x245e2b804eaf11ad!2zOSDEkC4gU-G7kSAxMiwgQsOsbmggQ2hp4buDdSwgVGjhu6cgxJDhu6ljLCBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1747789925767!5m2!1svi!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-right" data-aos-delay="300">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
