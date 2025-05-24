import "./Value.css";

function Value() {
  const values = [
    {
      title: "Đối với học sinh",
      content: [
        "Nâng cao nhận thức và trách nhiệm trong việc giữ an toàn cho bản thân và bạn bè.",
        <br />,
        "Nắm vững kiến thức và kỹ năng tự vệ cần thiết để ứng phó với các tình huống nguy hiểm như tai nạn thương tích, bạo lực xâm hại.",
      ],
      image: "/images/icon/hs.png",
    },
    {
      title: "Đối với cán bộ, giáo viên nhà trường",
      content: [
        "Nâng cao nhận thức, vai trò trách nhiệm trong việc đảm bảo an toàn học đường.",
        <br />,
        "Trang bị kiến thức và kỹ năng để phòng ngừa, ứng phó và xử lý các tình huống nguy hiểm.",
        <br />,
        "Phối hợp hiệu quả với phụ huynh và cộng đồng trong công tác bảo vệ trẻ em.",
      ],
      image: "/images/icon/gv.png",
    },
    {
      title: "Đối với phụ huynh",
      content: [
        "Nâng cao nhận thức về an toàn học đường và trách nhiệm bảo vệ.",
        <br />,
        "Nắm vững kiến thức và kỹ năng giáo dục an toàn học đường.",
        <br />,
        "Phối hợp chặt chẽ với nhà trường trong giáo dục và bảo vệ trẻ em.",
        <br />,
        "Tham gia hoạt động cộng đồng đảm bảo an toàn cho trẻ.",
      ],
      image: "/images/icon/gd.png",
    },
    {
      title: "Đối với cộng đồng và xã hội",
      content: [
        "Nâng cao nhận thức về an toàn trường học và trách nhiệm cộng đồng.",
        <br />,
        "Chủ động tuyển truyền, giáo dục phòng chống tai nạn, bạo lực, xâm hại trẻ em.",
        <br />,
        "Hỗ trợ nhà trường và phụ huynh bảo vệ con em.",
        <br />,
        "Xây dựng môi trường cộng đồng an toàn, lành mạnh cho trẻ.",
      ],
      image: "/images/icon/cd.png",
    },
  ];

  return (
    <section
      className="value-section container py-5"
      data-aos="fade-up"
      data-aos-delay="200"
      style={{ marginBottom: "3%" }}
    >
      <h1
        style={{
          color: "#fff",
          textShadow: "2px 2px 4px #000000",
          marginBottom: "3%",
        }}
      >
        Giá trị hướng đến
      </h1>
      <div className="value-grid">
        {values.map((val, index) => (
          <div
            className={`value-box ${index % 2 !== 0 ? "staggered" : ""}`}
            key={index}
          >
            <img src={val.image} alt={val.title} className="value-icon" />
            <h4>{val.title}</h4>
            <p style={{ textAlign: "justify" }}>{val.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Value;
