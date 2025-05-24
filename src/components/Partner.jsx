import "./Partner.css";

function Partner() {
  return (
    <section
      className="gratitude-section"
      style={{
        marginTop: "3%",
      }}
    >
      <div className="gratitude-header">
        <h1
          style={{
            fontWeight: "bold",
            color: "#ffffff",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          Tri ân
        </h1>
        <p style={{ color: "#ffffff", textShadow: "2px 2px 4px #000000" }}>
          Công ty CP Đầu tư và Phát triển công nghệ Power 5 cùng chương trình
          “An Toàn trường học – Nâng bước tương lai ” trân trọng tri ân và vinh
          danh các tổ chức và cá nhân đã/đang đồng hành cùng chương trình.
        </p>
      </div>

      <div className="gratitude-grid">
        <a
          href="https://justivalaw.com"
          target="_blank"
          rel="noopener noreferrer"
          className="gratitude-card-link"
        >
          <div className="gratitude-card">
            <img src="/images/partner/jlf_logo.png" alt="Justivalaw" />
            <div className="card-content">
              <h4>CÔNG TY LUẬT TNHH JUSTIVA LAW</h4>
              <p>Đơn vị đồng hành tài trợ về nội dung chương trình.</p>
            </div>
          </div>
        </a>

        <a
          href="https://alfacens.com"
          target="_blank"
          rel="noopener noreferrer"
          className="gratitude-card-link"
        >
          <div className="gratitude-card">
            <img src="/images/partner/alfacens.png" alt="Alfacens" />
            <div className="card-content">
              <h4>CÔNG TY CP QUẢN LÝ VỐN ĐẦU TƯ ALFACENS</h4>
              <p>Đơn vị đồng hành tài trợ tài chính và công nghệ.</p>
            </div>
          </div>
        </a>

        <a
          href="https://hrwis.io"
          target="_blank"
          rel="noopener noreferrer"
          className="gratitude-card-link"
        >
          <div className="gratitude-card">
            <img src="/images/partner/hrwis.png" alt="HrWis" />
            <div className="card-content">
              <h4>CÔNG TY TNHH HR WIS</h4>
              <p>
                Đơn vị đồng tài trợ về nền tảng công nghệ để triển khai chương
                trình.
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Partner;
