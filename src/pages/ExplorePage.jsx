import { useParams, Link } from 'react-router-dom';

const EXPLORE_DATA = {
  'quan-an': {
    title: 'Quán ăn địa phương',
    lead: 'Những món ngon đậm chất miền Tây được người bản địa gợi ý.',
    items: [
      { name: 'Bánh xèo ốc gạo Cồn Phú Đa', tag: 'Món mặn', desc: 'Vỏ giòn béo nước cốt dừa, ăn kèm rau vườn.' },
      { name: 'Hủ tiếu pate đường Nguyễn Huệ', tag: 'Ăn sáng', desc: 'Nước dùng ngọt thanh, pate tự làm béo thơm.' },
      { name: 'Chuối đập nước cốt dừa', tag: 'Ăn vặt', desc: 'Chuối xiêm nướng ép dẹp chấm cốt dừa nóng.' },
    ],
  },
  'quan-ca-phe': {
    title: 'Quán cà phê đẹp & chill',
    lead: 'Không gian xanh mát, gần sông hoặc ẩn mình dưới tán dừa.',
    items: [
      { name: 'Cà phê Ven Sông Hàm Luông', tag: 'View sông', desc: 'Gió mát rượi, lý tưởng để ngắm hoàng hôn.' },
      { name: 'Tiệm Cà Phê Vườn Dừa', tag: 'Sân vườn', desc: 'Không gian mở nhiều cây xanh, yên tĩnh.' },
      { name: 'Cà phê Cốt Dừa Xứ Dừa', tag: 'Đặc trưng', desc: 'Cà phê phin đậm đà kết hợp cốt dừa tươi.' },
    ],
  },
  'dia-diem': {
    title: 'Địa điểm du lịch nổi bật',
    lead: 'Trải nghiệm đi xuồng ba lá, thăm cồn và lắng nghe câu chuyện địa phương.',
    items: [
      { name: 'Cồn Phụng & Cồn Quy', tag: 'Sinh thái', desc: 'Đi thuyền trên sông Tiền, nghe đờn ca tài tử.' },
      { name: 'Làng nghề làm kẹo dừa', tag: 'Văn hoá', desc: 'Tận mắt xem quy trình sên kẹo và ăn kẹo dừa nóng.' },
      { name: 'Biển Thạnh Phú', tag: 'Biển', desc: 'Thưởng thức hải sản tươi và dạo bờ biển yên bình.' },
    ],
  },
};

export default function ExplorePage() {
  const { category } = useParams();
  const current = EXPLORE_DATA[category] || EXPLORE_DATA['dia-diem'];

  return (
    <section className="container">
      <div style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
        <Link to="/kham-pha/quan-an" className={`btn ${category === 'quan-an' ? 'btn-green' : ''}`}>
          Quán ăn
        </Link>
        <Link to="/kham-pha/quan-ca-phe" className={`btn ${category === 'quan-ca-phe' ? 'btn-green' : ''}`}>
          Quán cà phê
        </Link>
        <Link to="/kham-pha/dia-diem" className={`btn ${category === 'dia-diem' ? 'btn-green' : ''}`}>
          Địa điểm du lịch
        </Link>
      </div>

      <h1 className="section-title">{current.title}</h1>
      <p className="section-lead">{current.lead}</p>

      <div className="grid-3">
        {current.items.map((item) => (
          <article key={item.name} className="card">
            <span className="card-badge">{item.tag}</span>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}