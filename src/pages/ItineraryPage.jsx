const ITINERARIES = [
  {
    badge: 'Buổi sáng',
    title: 'Khởi đầu chậm rãi bên sông',
    desc: 'Ăn sáng hủ tiếu pate, thưởng thức cà phê cốt dừa rồi lên thuyền tham quan Cồn Phụng.',
  },
  {
    badge: 'Buổi trưa',
    title: 'Ẩm thực miệt vườn',
    desc: 'Thưởng thức cá tai tượng chiên xù, gỏi củ hủ dừa tôm thịt và nghỉ trưa trên võng dưới tán dừa.',
  },
  {
    badge: 'Buổi chiều',
    title: 'Làng nghề & hoàng hôn',
    desc: 'Ghé lò kẹo dừa thủ công, mua đặc sản làm quà và ngắm hoàng hôn bên bờ sông Hàm Luông.',
  },
];

export default function ItineraryPage() {
  return (
    <section className="container">
      <h1 className="section-title">Lịch trình gợi ý</h1>
      <p className="section-lead">
        Gợi ý lịch trình 1 ngày khám phá trọn vẹn nhịp sống và câu chuyện địa phương tại Bến Tre.
      </p>

      <div className="grid-3">
        {ITINERARIES.map((step) => (
          <div key={step.badge} className="card">
            <span className="card-badge">{step.badge}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}