import { NavLink, useLocation } from "react-router-dom";
// import ServicesDropdown from "./ServicesDropdown";
import { useEffect, useRef } from "react";

function Navbar() {
  const collapseRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Scroll về đầu trang sau khi navigate
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Đóng collapse menu nếu đang mở trên màn hình nhỏ
    if (collapseRef.current && window.innerWidth < 992) {
      const bsCollapse = bootstrap.Collapse.getInstance(collapseRef.current);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  }, [location]);

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      data-aos="fade-down"
      style={{ zIndex: "1030" }}
    >
      <div className="container position-relative">
        {/* Icon Đăng nhập trên responsive (bên trái nút collapse)
        <NavLink className="d-lg-none me-2" to="/login">
          <i
            className="bi bi-person-circle"
            style={{ fontSize: "2rem", color: "#fff" }}
          ></i>
        </NavLink> */}

        {/* Logo */}
        <NavLink className="navbar-brand" to="/home">
          <img
            src="/images/logo/logo_athd.png"
            alt="Justivalaw"
            height="45"
            width="150"
          />
        </NavLink>

        {/* Nút collapse */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{
            backgroundColor: "#04a853",
            outline: "none",
            boxShadow: "none",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu chính */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={collapseRef}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/home"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(
                      collapseRef.current
                    );
                    if (bsCollapse) bsCollapse.hide();
                  }
                }}
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(
                      collapseRef.current
                    );
                    if (bsCollapse) bsCollapse.hide();
                  }
                }}
              >
                Về chúng tôi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/program"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(
                      collapseRef.current
                    );
                    if (bsCollapse) bsCollapse.hide();
                  }
                }}
              >
                Về chương trình
              </NavLink>
            </li>
            {/* <ServicesDropdown /> */}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/activity"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(
                      collapseRef.current
                    );
                    if (bsCollapse) bsCollapse.hide();
                  }
                }}
              >
                Hoạt động
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/expertise"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(
                      collapseRef.current
                    );
                    if (bsCollapse) bsCollapse.hide();
                  }
                }}
              >
                Chuyên môn
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={() => {
                  if (window.innerWidth < 992) {
                    const bsCollapse = bootstrap.Collapse.getInstance(
                      collapseRef.current
                    );
                    if (bsCollapse) bsCollapse.hide();
                  }
                }}
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Nút Đăng nhập/Đăng ký ở góc phải tuyệt đối trên desktop
      <div
        className="d-none d-lg-flex align-items-center"
        style={{
          position: "absolute",
          right: "1rem",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <NavLink
          className="btn btn-outline-primary"
          to="/login"
          onClick={() => {
            if (window.innerWidth < 992) {
              const bsCollapse = bootstrap.Collapse.getInstance(
                collapseRef.current
              );
              if (bsCollapse) bsCollapse.hide();
            }
          }}
        >
          Đăng nhập/Đăng ký
        </NavLink>
      </div> */}
    </nav>
  );
}

export default Navbar;
