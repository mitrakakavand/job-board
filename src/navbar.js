
const Navbar = () => {
  return (
    <nav className="navbar" dir="rtl">
      <div className="navbar-content">
        <ul className="navbar-menu">
          <li className="navbar-item active">صفحه اصلی</li>
          <li className="navbar-item">شغل</li>
          <li className="navbar-item">تماس با ما</li>
          <li className="navbar-item">درباره ما</li>
        </ul>
        <div className="navbar-actions">
          <button className="register-btn">ثبت نام</button>
          <span className="login-link">ورود</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
