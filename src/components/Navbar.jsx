import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-title">XỨ DỪA</span>
          <span className="brand-sub">Local storyteller</span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                Trang chủ
              </NavLink>
            </li>

            <li
              className="nav-item"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <span
                className="nav-link"
                onClick={() => setOpenDropdown((prev) => !prev)}
              >
                Khám phá ▾
              </span>

              {openDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/kham-pha/quan-an"
                      className="dropdown-link"
                      onClick={() => setOpenDropdown(false)}
                    >
                      Quán ăn
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/kham-pha/quan-ca-phe"
                      className="dropdown-link"
                      onClick={() => setOpenDropdown(false)}
                    >
                      Quán cà phê
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/kham-pha/dia-diem"
                      className="dropdown-link"
                      onClick={() => setOpenDropdown(false)}
                    >
                      Địa điểm du lịch
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <NavLink to="/vong-quay" className="nav-link">
                Vòng quay
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/lich-trinh" className="nav-link">
                Lịch trình
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/dac-san" className="nav-link">
                Đặc sản
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
