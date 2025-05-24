import "./VerticalTabs.css";

const contentData = [
  {
    title: "Giới thiệu chương trình",
    text: `Chương trình "An toàn trường học - Nâng bước tương lai" là một sáng kiến cộng đồng nhằm trang bị cho các em học sinh những kiến thức và kỹ năng cần thiết để phòng tránh các nguy hiểm trong cuộc sống. Được tài trợ HOÀN TOÀN MIỄN PHÍ, chương trình được thực hiện bởi Công ty CP Đầu tư và Phát triển công nghệ Power 5, cùng với sự đồng hành của công ty Luật TNHH Justiva Law, công ty CP Quản lý vốn đầu tư Alfacens và công ty TNHH HR Wis.`,
  },
  {
    title: "Vì sao chúng tôi bắt đầu?",
    text: `Bạn có từng xót xa khi chứng kiến những em nhỏ bị tổn thương thể chất, tinh thần hoặc mất đi sinh mệnh vì tai nạn thương tích, đuối nước hay xâm hại? Và nếu nạn nhân đó là người thân của chúng ta thì sao? Những câu hỏi đau lòng này đã thôi thúc chúng tôi tạo ra chương trình "An Toàn trường học – Nâng bước tương lai”`,
  },
  {
    title: "Mục tiêu chính",
    text: `Chương trình tập trung vào việc truyền dạy các kỹ năng sống thiết yếu như: phòng chống đuối nước, phòng chống xâm hại, xử lý tình huống nguy hiểm và những kỹ năng sống khác... Qua đó, chúng tôi mong muốn được góp sức để các em không chỉ được bảo vệ về thể chất, tinh thần mà còn được trang bị những kiến thức để tự tin đối mặt với những thử thách trong cuộc sống.`,
  },
];

function VerticalTabs() {
  return (
    <section
      className="steps-container container py-5"
      data-aos="fade-right"
      data-aos-delay="150"
    >
      {contentData.map((item, index) => (
        <div className={`step-box step-${index + 1}`} key={index}>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default VerticalTabs;
