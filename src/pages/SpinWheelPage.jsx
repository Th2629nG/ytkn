import { useState } from 'react';

const OPTIONS = [
  'Ăn bánh xèo ốc gạo & uống nước dừa xiêm',
  'Ngồi cà phê ven sông ngắm hoàng hôn',
  'Đi xuồng chèo qua rạch dừa nước',
  'Ghé lò kẹo dừa ăn thử kẹo nóng mới ra lò',
  'Thưởng thức chuối đập nước cốt dừa buổi chiều',
  'Dạo chợ đêm & khám phá ẩm thực đường phố',
];

export default function SpinWheelPage() {
  const [result, setResult] = useState('Nhấn nút bên dưới để quay gợi ý!');
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    if (spinning) return;
    setSpinning(true);

    let count = 0;
    const interval = setInterval(() => {
      const randomItem = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
      setResult(randomItem);
      count++;

      if (count >= 12) {
        clearInterval(interval);
        setSpinning(false);
      }
    }, 90);
  };

  return (
    <section className="container">
      <div className="wheel-box">
        <h1 className="section-title">Vòng quay Xứ Dừa</h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Không biết hôm nay đi đâu, ăn gì? Để vòng quay quyết định giúp bạn.
        </p>

        <div className="wheel-result">{result}</div>

        <button className="btn btn-green" onClick={handleSpin} disabled={spinning}>
          {spinning ? 'Đang quay...' : 'Quay ngay'}
        </button>
      </div>
    </section>
  );
}