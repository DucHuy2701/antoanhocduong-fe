import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaEnvelope as FaEnvelopeSocial,
  FaArrowAltCircleRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="text-white py-5"
      data-aos="fade-up"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderTop: "2px solid #04a853",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <div className="row">
          {/* Cột 1: Justiva Law */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div style={{ objectFit: "cover" }}>
              <img
                src="/images/logo/logo_athd.png"
                alt="An toàn học đường"
                style={{
                  marginRight: "5%",
                  marginBottom: "7%",
                  maxWidth: "50%",
                  maxHeight: "25%",
                }}
              />
            </div>
            <p style={{ textAlign: "justify" }}>
              &emsp;&emsp; Chúng ta hãy cùng chung tay xây dựng một môi trường
              an toàn, lành mạnh để các em học sinh được phát triển toàn diện.
              Bởi vì, tương lai của đất nước chính là ở thế hệ trẻ. Hãy cùng
              đồng hành cùng chúng tôi và chương trình “An toàn học đường – Nâng
              bước tương lai”.
            </p>
            {/* Biểu tượng mạng xã hội */}
            <div className="social-icons mt-3">
              <a href="/home" className="text-white me-2">
                <FaFacebookF />
              </a>
              <a href="/home" className="text-white me-2">
                <FaTwitter />
              </a>
              <a href="/home" className="text-white">
                <FaEnvelopeSocial />
              </a>
            </div>
          </div>

          {/* Cột 2: Working Hours */}
          <div
            className="col-md-2 mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
            style={{ marginTop: "20px" }}
          ></div>
          {/* Cột 3: Liên hệ */}
          <div
            className="col-md-6 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ marginTop: "20px" }}
          >
            <h5 className="section-title text-white mb-3">Liên hệ</h5>
            <div style={{ textAlign: "left", paddingTop: "3%" }}>
              <p>
                <FaMapMarkerAlt className="me-2" /> Trụ sở: Số 9, Đường số 12,
                KP 6, P.Bình Chiểu, TP.Thủ Đức, TP.HCM, Việt Nam
              </p>
              <p>
                <FaPhone className="me-2" /> (+84) 0945 737 186
              </p>
              <p>
                <FaEnvelope className="me-2" /> service@power5techlonoly.com
              </p>
              <p>
                <FaArrowAltCircleRight className="me-2" />{" "}
                <strong>
                  <a href="https://power5technology.com/">
                    CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHỆ POWER 5
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="text-center mb-0">
          © 2025 Power 5 Techlonogy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
