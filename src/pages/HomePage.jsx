import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="container">
        <h2 className="section-title">Vài điều nên biết về Bến Tre</h2>
        <p className="section-lead">
          Nằm ở hạ lưu sông Cửu Long, vùng đất xứ dừa được bao quanh bởi các nhánh
          sông Tiền như Ba Lai, Hàm Luông và Cổ Chiên. Phù sa bồi đắp nên ba dải cù
          lao lớn là An Hoá, Bảo và Minh — nơi lưu giữ nét văn hoá miệt vườn đặc trưng.
        </p>

        <div className="grid-3">
          <Link to="/kham-pha/quan-an" className="card">
            <span className="card-badge">Khám phá</span>
            <h3>Ẩm thực & Quán ăn</h3>
            <p>Bánh xèo ốc gạo, cơm dừa, hủ tiếu pate và các quán ruột của người bản địa.</p>
          </Link>

          <Link to="/vong-quay" className="card">
            <span className="card-badge">Tương tác</span>
            <h3>Vòng quay Xứ Dừa</h3>
            <p>Chưa biết hôm nay đi đâu hay ăn gì? Quay thử một lượt để nhận gợi ý ngẫu nhiên.</p>
          </Link>

          <Link to="/lich-trinh" className="card">
            <span className="card-badge">Gợi ý</span>
            <h3>Lịch trình trọn vẹn</h3>
            <p>Lộ trình 1 ngày hoặc 2 ngày 1 đêm đi xuồng, thăm cồn và thưởng thức đặc sản.</p>
          </Link>
        </div>
      </section>
    </>
  );
}