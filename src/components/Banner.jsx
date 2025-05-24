import "./Banner.css";
import {
  FaShieldAlt,
  FaLightbulb,
  FaUsers,
  FaBookOpen,
  FaHandPaper,
} from "react-icons/fa";

function Banner() {
  return (
    <section className="banner container py-5">
      <div style={{ textAlign: "right", color: "#ffffff", marginBottom: "3%" }}>
        <h1 style={{ textShadow: "2px 2px 4px #000000" }}>
          Mục đích của chương trình
        </h1>
      </div>
      <div className="custom-grid">
        <div className="left-grid">
          <div className="grid-two-cols">
            <div
              className="box blue"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <FaShieldAlt className="icon" />
              <h4>Bảo vệ toàn diện</h4>
              <p>Tăng cường bảo vệ và đảm bảo an toàn cho trẻ em.</p>
            </div>
            <div
              className="box orange"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <FaLightbulb className="icon" />
              <h4>Nâng cao nhận thức</h4>
              <p>
                Nâng cao nhận thức về tầm quan trọng của công tác đảm bảo an
                toàn trường học, phòng chống tai nạn thương tích và xâm hại trẻ
                em.
              </p>
            </div>
          </div>
          <div
            className="box green full-width"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <FaBookOpen className="icon" />
            <h4>Bổ sung kỹ năng</h4>
            <p>
              Cung cấp kiến thức và kỹ năng cần thiết để phòng ngừa, ứng phó và
              xử lý các tình huống nguy hiểm.
            </p>
          </div>
        </div>
        <div
          className="box purple right-grid align-center"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <FaUsers className="icon" />
          <h4>Phối hợp hiệu quả</h4>
          <p>
            Tăng cường sự phối hợp giữa nhà trường, gia đình và cộng đồng trong
            công tác bảo vệ trẻ em.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
