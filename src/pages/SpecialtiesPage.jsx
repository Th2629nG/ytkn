const SPECIALTIES = [
  {
    name: 'Kẹo dừa Bến Tre',
    tag: 'Quà biếu',
    desc: 'Vị béo ngọt tự nhiên từ nước cốt dừa và mạch nha, có nhiều vị như lá dứa, sầu riêng, ca cao.',
  },
  {
    name: 'Bánh tráng Mỹ Lồng',
    tag: 'Làng nghề',
    desc: 'Bánh tráng pha nước cốt dừa thơm béo, nướng lên phồng giòn rụm.',
  },
  {
    name: 'Bánh phồng Sơn Đốc',
    tag: 'Truyền thống',
    desc: 'Làm từ nếp sáp và nước cốt dừa, khi nướng nở đều và dậy mùi thơm đặc trưng.',
  },
];

export default function SpecialtiesPage() {
  return (
    <section className="container">
      <h1 className="section-title">Đặc sản Xứ Dừa</h1>
      <p className="section-lead">
        Những thức quà mang đậm hương vị quê hương có thể thưởng thức tại chỗ hoặc mang về làm quà.
      </p>

      <div className="grid-3">
        {SPECIALTIES.map((item) => (
          <div key={item.name} className="card">
            <span className="card-badge">{item.tag}</span>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}