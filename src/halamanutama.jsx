import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./halamanutama.css";

export default function halamanutama({ musicOn, toggleMusic }) {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false); // Tutup menu setelah navigasi
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
            <button className="about-nav-btn active" onClick={() => navigate("/utama")}>
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

            {/* MAIN CONTENT */}
            <div className="container">

                {/* MAIN IMAGE */}
                <img src="/sdgs.jpeg" alt="EcoScan Banner" className="main-image" />

                {/* DESCRIPTION */}
                <p className="description">
                    SDG 8 (Pekerjaan Layak dan Pertumbuhan Ekonomi) bertujuan mendorong
                    pertumbuhan ekonomi yang inklusif dan berkelanjutan dengan menyediakan
                    pekerjaan yang layak bagi semua. Poin-poin pentingnya antara lain
                    meningkatkan produktivitas, menciptakan lapangan kerja penuh dan
                    produktif (terutama untuk pemuda), menghapus pekerja anak dan
                    perbudakan modern, serta melindungi hak-hak tenaga kerja.
                    <br />
                    <br />
                    SDG 11 (Kota dan Komunitas Berkelanjutan) berfokus pada pembangunan
                    perkotaan yang inklusif, aman, dan tangguh. Tujuan utamanya adalah
                    menyediakan akses terhadap perumahan layak dan transportasi umum yang
                    berkelanjutan, mengentaskan kawasan kumuh, melestarikan warisan budaya,
                    serta meningkatkan kualitas lingkungan hidup dan pengelolaan sampah di
                    kota.
                    <br />
                    <br />
                    SDG 12 (Konsumsi dan Produksi yang Bertanggung Jawab) menjadi kunci
                    penghubung dengan menekankan pola ekonomi yang efisien dan ramah
                    lingkungan. Poin kuncinya adalah mengelola sumber daya alam secara
                    berkelanjutan, mengurangi separuh limbah makanan, menangani limbah dan
                    bahan kimia dengan aman, serta mendorong perusahaan dan masyarakat untuk
                    menerapkan praktik daur ulang dan gaya hidup berkelanjutan.
                    <br />
                    <br />
                    Ketiganya saling terkait erat; pertumbuhan ekonomi (SDG 8) harus
                    didukung oleh model produksi-konsumsi berkelanjutan (SDG 12) dan
                    diwujudkan dalam kota-kota yang layak huni (SDG 11).
                </p>

                {/* SDG CARDS SECTION */}
                <div className="sdgs-container">
                    <div className="sdg-card">
                        <img src="/sdgs8.jpeg" alt="SDG 8" className="sdg-icon" />
                        <div className="sdg-label">SDG 8: Pekerjaan Layak</div>
                    </div>
                    <div className="sdg-card">
                        <img src="/sdgs11.jpeg" alt="SDG 11" className="sdg-icon" />
                        <div className="sdg-label">SDG 11: Kota Berkelanjutan</div>
                    </div>
                    <div className="sdg-card">
                        <img src="/sdgs12.jpeg" alt="SDG 12" className="sdg-icon" />
                        <div className="sdg-label">SDG 12: Konsumsi Bertanggung Jawab</div>
                    </div>
                </div>

                {/* OPTIONS SECTION */}
                <div className="opsi-container">
                    <h3>Pilih Jenis Sampah</h3>
                    <div className="opsi-grid">
                        <button className="opsi-btn" onClick={() => navigate("/organik")}>
                            🌱 Organik
                        </button>
                        <button className="opsi-btn" onClick={() => navigate("/anorganik")}>
                            ♻️ Anorganik
                        </button>
                        <button className="opsi-btn" onClick={() => navigate("/b3")}>
                            ⚠️ B3
                        </button>
                        <button className="opsi-btn" onClick={() => navigate("/kertas")}>
                            📄 Kertas
                        </button>
                        <button className="opsi-btn" onClick={() => navigate("/residu")}>
                            🗑️ Residu
                        </button>
                    </div>
                </div>

                {/* QUOTE SECTION */}
                <h2 className="go-green">
                    🌱 Jadilah pahlawan bagi Bumi dengan mengurangi plastik sekali pakai
                    dan memilih produk yang ramah lingkungan. 🌍
                </h2>

                {/* BACK BUTTON */}
                <div className="back-button">
                    <button onClick={() => navigate("/")}>
                        Kembali ke Halaman Awal
                    </button>
                </div>
            </div>
        </div>
    );
}