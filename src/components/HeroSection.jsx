import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <span className="hero-tag">Xứ Dừa • Local Storyteller</span>
        <h1 className="hero-title">
          Bến Tre, nơi dừa mọc dọc theo những nhánh sông
        </h1>
        <p className="hero-desc">
          Khám phá những câu chuyện và trải nghiệm Bến Tre qua từng cù lao xanh,
          quán ăn địa phương, quán cà phê ven sông và nhịp sống chậm rãi miền Tây.
        </p>

        <div className="hero-actions">
          <Link to="/kham-pha/dia-diem" className="btn btn-primary">
            Xem địa điểm du lịch
          </Link>
          <Link to="/kham-pha/quan-ca-phe" className="btn btn-outline">
            Tìm quán cà phê
          </Link>
        </div>
      </div>

      {/* Đường cong chuyển màu sang nền #EFEFEF */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            d="M0,48 C240,90 480,10 720,48 C960,86 1200,14 1440,48 L1440,80 L0,80 Z"
            fill="#EFEFEF"
          />
        </svg>
      </div>
    </section>
  );
}