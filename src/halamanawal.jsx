import React from "react";
import { useNavigate } from "react-router-dom";
import "./halamanawal.css";

export default function HalamanAwal({ musicOn, toggleMusic, audioRef }) {
    const navigate = useNavigate();

    return (
        <div className="app landing-page">
            {/* Header Minimalis: Logo + Volume */}
            <header className="minimal-header">
                <div className="logo">
                    <img src="/logo_removebg.png" alt="MIZAI Logo" />
                    <h1>MIZAI</h1>
                </div>
                <button className="icon-btn volume-btn" onClick={toggleMusic}>
                    {musicOn ? "🔊" : "🔈"}
                </button>
            </header>

<div className="bg-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-5"></div>
    </div>

            {/* Hero Section seperti referensi */}
            <main className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h2>KEBERLANJUTAN DIMULAI DARI ALAM</h2>
                        <h1>BUMI BUTUH AKSI</h1>
                        <h4>SELANGKAH LEBIH HIJAU MENUJU SDGs 11</h4>
                    </div>
                    
                    <div className="cta-section">
                        <p className="tagline">Solusi Hijau untuk Anda</p>
                        <button className="start-btn" onClick={() => navigate("/utama")}>
                            MULAI EKPLORASI
                        </button>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/background2.jpg" alt="Eco Illustration" />
                </div>
            </main>

            {/* Features Section */}
            <section className="features">
                <div className="feature-card">
                    <h3>🌱 SOLUSI</h3>
                    <p>Edukasi langkah demi langkah untuk pemula</p>
                </div>
                <div className="feature-card">
                    <h3>♻️ TANTANGAN</h3>
                    <p>Untuk 10 tahun kemudian, dari kita yang memulai.</p>
                </div>
                <div className="feature-card">
                    <h3>📱 SURVEY</h3>
                    <p>Saran dan solusi untuk memulai perubahan</p>
                </div>
            </section>

            <footer className="minimal-footer">
                © {new Date().getFullYear()} Mizai - #BumiButuhAksi
            </footer>

            <audio ref={audioRef} src="/music.mp3" loop />
        </div>
    );
}