import "./Activity.css";

function Activity() {
  return (
    <>
      <section>
        <div className="container py-5" style={{ textAlign: "center" }}>
          <section className="container py-5">
            <div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "3%",
                  color: "#fff",
                  textShadow: "2px 2px 4px #000000",
                }}
              >
                <h1>
                  Ra mắt chương trình "An Toàn Học Đường" trực tuyến miễn phí
                  cho học sinh, sinh viên
                </h1>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="container py-5" style={{ textAlign: "center" }}>
        <div
          className="row title-image"
          style={{ objectFit: "cover", marginTop: "10%" }}
        >
          <img
            className="col-md-4 mb-4"
            src="/images/activity/a1.webp"
            alt="Triển khai chương trình An toàn học đường"
            height={"100%"}
            width={"100%"}
          />
          <img
            className="col-md-4 mb-4"
            src="/images/activity/a3.webp"
            alt="Triển khai chương trình An toàn học đường"
            height={"100%"}
            width={"100%"}
          />
          <img
            className="col-md-4 mb-4"
            src="/images/activity/a2.webp"
            alt="Triển khai chương trình An toàn học đường"
            height={"100%"}
            width={"100%"}
          />
        </div>
      </section>
    </>
  );
}

export default Activity;
