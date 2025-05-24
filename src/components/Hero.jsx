function Hero() {
  return (
    <div
      className="container"
      data-aos="fade-down"
      data-aos-delay="100"
      style={{
        color: "#ffffff",
        textShadow: "4px 4px 4px #000",
        textAlign: "center",
        marginTop: "3%",
      }}
    >
      <h1 className="display-3 fw-bold">Chương trình An toàn học đường</h1>
      <p
        className="lead"
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          textShadow: "2px 2px 4px #000000",
          color: "#ffffff",
        }}
      >
        Dự án vì cộng đồng
        <br />
        "An toàn là nền tảng, hạnh phúc là đích đến"
      </p>
    </div>
  );
}

export default Hero;
