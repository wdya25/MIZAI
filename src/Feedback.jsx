import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Feedback.css";

export default function Feedback() {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [musicOn, setMusicOn] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMusic = () => {
        setMusicOn(!musicOn);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="app">
            {/* Background Circles */}
            <div className="bg-circles">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
                <div className="circle circle-5"></div>
            </div>

           {/* TOPBAR - SAME AS MAIN PAGE */}
          <header className="about-topbar">
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
            <button className="about-nav-btn" onClick={() => navigate("/About")}>
              About
            </button>
            <button className="about-nav-btn" onClick={() => navigate("/Edukasi")}>
              Edukasi
            </button>
            <button className="about-nav-btn" onClick={() => navigate("/Portofolio")}>
              Portofolio
            </button>
            <button className="about-nav-btn active" onClick={() => navigate("/Feedback")}>
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

            <main className="feedback-main">
                {/* Hero Section */}
                <div className="feedback-hero">
                    <h1>💬 Feedback & Saran</h1>
                    <p>Kami sangat menghargai pendapat Anda untuk meningkatkan kualitas layanan kami</p>
                </div>

                {/* Barcode Section - FULL WIDTH */}
                <div className="barcode-full-section">
                    <div className="barcode-card">
                        <h2>📱 Scan Barcode untuk Memberikan Feedback</h2>
                        <p className="barcode-description">
                            Gunakan barcode di bawah ini untuk mengisi feedback secara cepat dan mudah melalui smartphone Anda
                        </p>
                        
                        <div className="barcode-container">
                            {/* Gambar Barcode yang Sudah Ada */}
                            <img 
                                src="/barcode.png" 
                                alt="Barcode Feedback" 
                                className="barcode-image"
                            />
                        </div>

                        <div className="barcode-instruction">
                            <h3>📋 Cara Menggunakan:</h3>
                            <div className="instruction-steps">
                                <div className="step">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <strong>Buka Kamera Smartphone</strong>
                                        <p>Buka aplikasi kamera di smartphone Anda</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <strong>Scan Barcode</strong>
                                        <p>Arahkan kamera ke barcode di atas</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <strong>Isi Feedback</strong>
                                        <p>Anda akan diarahkan ke form feedback</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="step-number">4</div>
                                    <div className="step-content">
                                        <strong>Kirim</strong>
                                        <p>Isi dan kirim feedback Anda dengan mudah</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="barcode-note">
                            <p><strong>💡 Tips:</strong> Pastikan koneksi internet Anda stabil untuk pengalaman terbaik</p>
                            <p><strong>📱 Kompatibel:</strong> Bekerja dengan semua smartphone modern</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="foot">© {new Date().getFullYear()} Mizai - #BumiButuhAksi</footer>
        </div>
    );
}