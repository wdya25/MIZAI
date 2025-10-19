import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

export default function About({ musicOn, toggleMusic }) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Tutup menu setelah navigasi
  };

  const features = [
    "Edukasi Pengelolaan Sampah",
    "Konten Interaktif & Menyenangkan", 
    "Mendukung SDGs No. 11",
    "Berbasis Teknologi Modern"
  ];

  return (
    <div className="about-container">
      {/* Floating geometric elements */}
      <div className="geometric-element"></div>
      <div className="geometric-element"></div>

      <div className="bg-circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
                <div className="circle circle-5"></div>
            </div>

      {/* TOPBAR - SAME AS MAIN PAGE */}
      <header className="about-topbar">
        {/* Hamburger Menu untuk Mobile */}
        <button 
          className={`about-hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Center (Desktop) */}
        <div className="about-nav-center">
          <button className="about-nav-btn" onClick={() => navigate("/utama")}>
            Home
          </button>
          <button className="about-nav-btn active" onClick={() => navigate("/About")}>
            About
          </button>
          <button className="about-nav-btn" onClick={() => navigate("/Edukasi")}>
            Edukasi
          </button>
          <button className="about-nav-btn" onClick={() => navigate("/Portofolio")}>
            Portofolio
          </button>
          <button className="about-nav-btn" onClick={() => navigate("/Feedback")}>
            Feedback
          </button>
          <div className="about-music-control">
            <button className="about-icon-btn" onClick={toggleMusic} title="Toggle Music">
              {musicOn ? "🔊" : "🔈"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`about-mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <button 
            className="about-mobile-nav-btn" 
            onClick={() => handleNavigation("/utama")}
          >
            Home
          </button>
          <button 
            className="about-mobile-nav-btn active" 
            onClick={() => handleNavigation("/About")}
          >
            About
          </button>
          <button 
            className="about-mobile-nav-btn" 
            onClick={() => handleNavigation("/Edukasi")}
          >
            Edukasi
          </button>
          <button 
            className="about-mobile-nav-btn" 
            onClick={() => handleNavigation("/Portofolio")}
          >
            Portofolio
          </button>
          <button 
            className="about-mobile-nav-btn" 
            onClick={() => handleNavigation("/Feedback")}
          >
            Feedback
          </button>
        </div>
      </header>

      <div className="about-card">

        <div className="about-header">
          <h1 className="about-title">Tentang Website Ini</h1>
          <p className="about-subtitle">
            Platform Edukasi Pengelolaan Sampah yang Interaktif dan Menyenangkan
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <div className="content-card">
              <div className="card-header">
                <div className="card-icon">🎯</div>
                <h3>Tujuan Pembuatan</h3>
              </div>
              <p>
                Website ini dibuat sebagai proyek <strong>UTS mata kuliah Bahasa Indonesia (UM142-K)</strong>.
                Tujuannya adalah untuk memperkenalkan cara pengelolaan sampah melalui media yang
                <strong> interaktif dan menyenangkan</strong>, sehingga pembelajaran menjadi lebih efektif.
              </p>
            </div>

            <div className="content-card">
              <div className="card-header">
                <div className="card-icon">📚</div>
                <h3>Materi Pembelajaran</h3>
              </div>
              <p>
                Melalui website ini, pengguna dapat belajar mengenai <strong>pengelolaan sampah</strong> —
                mulai dari pengenalan <strong>jenis-jenis sampah</strong>, cara pengolahan yang benar,
                hingga bagaimana upaya kecil yang kita lakukan dapat berkontribusi terhadap
                <strong> keberlanjutan lingkungan</strong>.
              </p>
            </div>

            <div className="content-card">
              <div className="card-header">
                <div className="card-icon">🌍</div>
                <h3>Tujuan Pembangunan Berkelanjutan</h3>
              </div>
              <p>
                Proyek ini juga terhubung dengan <strong>Tujuan Pembangunan Berkelanjutan (SDGs) nomor 11</strong>,
                yaitu "Kota dan Permukiman yang Berkelanjutan". Dengan memahami cara mengelola sampah dengan baik,
                kita turut membantu menciptakan lingkungan yang lebih bersih, sehat, dan nyaman bagi semua.
              </p>
            </div>

            <div className="content-card">
              <div className="card-header">
                <div className="card-icon">👥</div>
                <h3>Fokus Kelompok</h3>
              </div>
              <p>
                Kelompok kami berfokus pada tema <strong>"Belajar tentang Pengelolaan Sampah dengan Cara yang Menyenangkan"</strong>.
                Melalui pendekatan edukatif dan interaktif, kami berharap masyarakat—terutama pelajar—dapat lebih sadar
                dan peduli terhadap pentingnya mengelola sampah dengan benar.
              </p>
            </div>
          </div>

          <div className="about-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-image-container">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4281/4281775.png"
                  alt="Ilustrasi pengelolaan sampah"
                />
              </div>
              
              <h3>Fitur Utama</h3>
              
              <div className="sidebar-features">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="sidebar-quote">
                "Ayo hijaukan, dan hidupkan Dunia! - Floryn MLBB"
              </div>
            </div>
          </div>
        </div>

        <div className="about-footer">
          <div className="footer-content">
            <div className="footer-icons">
              <div className="footer-icon">🌱</div>
              <div className="footer-icon">♻️</div>
              <div className="footer-icon">🌍</div>
            </div>
            <p>
              <span>✨ Dibuat dengan semangat dan sepenuh hati untuk bumi yang lebih baik</span>
            </p>
            <div className="footer-decoration">
              <span>🌿</span>
              <span>💚</span>
              <span>🌎</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}