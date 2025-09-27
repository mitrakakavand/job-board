


import React from "react";
import "./index.css";


function Home() {
  return (
    <div className="home-container">
      <div className="hero-header">
        <h1>شعار تیم ......</h1>
        <p>معرفی کوتاه</p>
      </div>
      <div className="search-bar-wrapper">
        <form className="search-bar">
          <div className="search-input-group">
            <input type="text" className="search-input" placeholder="عنوان شغلی، نام شرکت، مهارت یا ..." />
            <span className="search-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#FFD600" strokeWidth="2"/><line x1="16.2929" y1="16.7071" x2="20" y2="20.4142" stroke="#FFD600" strokeWidth="2" strokeLinecap="round"/></svg>
            </span>
          </div>
          <div className="search-select-group">
            <select className="search-select">
              <option>همه‌ی استان‌ها</option>
              <option>تهران</option>
              <option>اصفهان</option>
              <option>شیراز</option>
            </select>
            <span className="search-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 5 13.5 5 9.5C5 6.46243 7.46243 4 10.5 4C13.5376 4 16 6.46243 16 9.5C16 13.5 12 21 12 21Z" stroke="#FFD600" strokeWidth="2"/><circle cx="12" cy="9.5" r="2" fill="#FFD600"/></svg>
            </span>
          </div>
          <div className="search-select-group">
            <select className="search-select">
              <option>همه‌ی دسته‌بندی‌ها</option>
              <option>برنامه‌نویسی</option>
              <option>طراحی</option>
              <option>مدیریت</option>
            </select>
            <span className="search-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="2" fill="#FFD600"/><rect x="14" y="3" width="7" height="7" rx="2" fill="#FFD600"/><rect x="14" y="14" width="7" height="7" rx="2" fill="#FFD600"/><rect x="3" y="14" width="7" height="7" rx="2" fill="#FFD600"/></svg>
            </span>
          </div>
          <button type="submit" className="search-btn search-btn-yellow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#0B2640" strokeWidth="2"/><line x1="16.2929" y1="16.7071" x2="20" y2="20.4142" stroke="#0B2640" strokeWidth="2" strokeLinecap="round"/></svg>
            جستجو
          </button>
        </form>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 24 }}>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ background: '#FFD600', borderRadius: '50%', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_1_368" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                <path d="M0 1.90735e-06H28V28H0V1.90735e-06Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_368)">
                <path d="M24.7552 5.39583C24.7552 7.77178 22.8291 9.69788 20.4531 9.69788C18.0771 9.69788 16.151 7.77178 16.151 5.39583C16.151 3.01988 18.0771 1.09373 20.4531 1.09373C22.8291 1.09373 24.7552 3.01988 24.7552 5.39583Z" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.8625 10.7885C17.889 10.0997 19.1242 9.69792 20.4534 9.69792C24.0172 9.69792 26.9063 12.587 26.9063 16.1508V18.3021H1.09399" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.8488 5.39583C11.8488 7.77178 9.92263 9.69788 7.54667 9.69788C5.17072 9.69788 3.24463 7.77178 3.24463 5.39583C3.24463 3.01988 5.17072 1.09373 7.54667 1.09373C9.92263 1.09373 11.8488 3.01988 11.8488 5.39583Z" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.09399 18.3021V16.1508C1.09399 12.587 3.98308 9.69792 7.5469 9.69792C8.87597 9.69792 10.1111 10.0998 11.1377 10.7884" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.3023 14C18.3023 16.376 16.3762 18.3021 14.0002 18.3021C11.6242 18.3021 9.69812 16.376 9.69812 14C9.69812 11.6241 11.6242 9.69792 14.0002 9.69792C16.3762 9.69792 18.3023 11.6241 18.3023 14Z" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.4534 26.9062V24.755C20.4534 21.1911 17.5643 18.3021 14.0004 18.3021C10.4366 18.3021 7.54749 21.1911 7.54749 24.755V26.9062H20.4534Z" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
          <div style={{ fontWeight: 700, fontSize: 20 }}>18,400</div>
          <div style={{ fontSize: 15, opacity: 0.85 }}>شرکت‌ها</div>
        </div>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ background: '#FFD600', borderRadius: '50%', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_334)">
                <mask id="mask0_1_334" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                  <path d="M28 0H0V28H28V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_1_334)">
                  <mask id="mask1_1_334" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
                    <path d="M0 1.90735e-06H28V28H0V1.90735e-06Z" fill="white" />
                  </mask>
                  <g mask="url(#mask1_1_334)">
                    <path d="M27.1797 27.1797H0.820312V25.5877C0.820312 24.0559 2.06205 22.8142 3.59384 22.8142H24.4062C25.938 22.8142 27.1797 24.0559 27.1797 25.5877V27.1797Z" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M11.5432 5.74214V0.820267H24.3766V22.8142H11.5432" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M3.62354 5.83336H16.4569V22.8143H3.62354V5.83336Z" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M7.99854 9.58423V13.0842" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M12.0818 9.58423V13.0842" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M7.99854 15.7821V19.2821" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M12.0818 15.7821V19.2821" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M20.0015 9.58423V13.0842" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M20.0015 15.7821V19.2821" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M20.0015 3.38635V6.88635" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="10" />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_334">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div style={{ fontWeight: 700, fontSize: 20 }}>10,250</div>
          <div style={{ fontSize: 15, opacity: 0.85 }}>رزومه ها</div>
        </div>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ background: '#FFD600', borderRadius: '50%', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px auto' }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_391)">
                <path d="M7.65625 6.67188V4.23675C7.65625 3.26758 8.44922 2.47461 9.41839 2.47461H18.5816C19.5508 2.47461 20.3438 3.26758 20.3438 4.23675V6.67188" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26.0859 14.5469V23.8848C26.0859 24.7869 25.3475 25.5254 24.4453 25.5254H3.55469C2.65251 25.5254 1.91406 24.7871 1.91406 23.8848V14.6016" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.8125 17.3086C6.02716 16.9778 0.820312 15.3234 0.820312 12.3455V8.46289C0.820312 7.55929 1.55728 6.82227 2.46094 6.82227H25.5391C26.4427 6.82227 27.1797 7.55934 27.1797 8.46289V12.3455C27.1797 15.3421 21.907 16.9985 16.0781 17.3147" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M11.9766 15.6816H16.0234V17.5684C16.0234 18.6061 15.1744 19.4551 14.1367 19.4551H13.8633C12.8256 19.4551 11.9766 18.6061 11.9766 17.5684V15.6816Z" stroke="#0B2640" strokeWidth="2" strokeMiterlimit="22.9256" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1_391">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div style={{ fontWeight: 700, fontSize: 20 }}>25,850</div>
          <div style={{ fontSize: 15, opacity: 0.85 }}>موفقیت شغلی</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
