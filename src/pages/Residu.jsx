import React from "react";
import { useNavigate } from "react-router-dom";
import "./pages.css";

const Residu = ({ musicOn, toggleMusic }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/utama"); // 👈 kembali ke halaman utama
  };

  return (
    <div className="app">
      {/* ✅ TOPBAR - SERAGAM DENGAN FEEDBACK */}
      <header className="topbar">
        <div className="nav-center">
          <button className="nav-btn" onClick={() => navigate("/utama")}>
            Home
          </button>
          <button className="nav-btn" onClick={() => navigate("/About")}>
            About
          </button>
          <button className="nav-btn" onClick={() => navigate("/Portofolio")}>
            Portofolio
          </button>
          <button className="nav-btn" onClick={() => navigate("/Feedback")}>
            Feedback
          </button>
          <button className="nav-btn" onClick={() => navigate("/Edukasi")}>
            Edukasi
          </button>

          {/* 🔊 Tombol Musik */}
          <button className="icon-btn" onClick={toggleMusic}>
            {musicOn ? "🔊" : "🔈"}
          </button>
        </div>
      </header>

      {/* ✅ KONTEN HALAMAN */}
      <div className="page-container">
        <h1>Sampah Residu</h1>

        <section>
          <h2>Pengertian</h2>
          <p>
            Sampah residu adalah sisa sampah yang sulit diolah atau didaur ulang,
            seperti popok, tisu bekas, atau kemasan multilayer.
          </p>
        </section>

        <section>
          <h2>Jenis</h2>
          <ul>
            <li>Popok sekali pakai, pembalut, tisu, styrofoam</li>
            <li>Kemasan makanan berlapis plastik dan aluminium</li>
          </ul>
        </section>

        <section>
          <h2>Dampak</h2>
          <p>
            Menumpuknya sampah residu menyebabkan pencemaran tanah dan air,
            serta sulit diurai dalam jangka panjang.
          </p>
        </section>

        <section>
          <h2>Cara Mengelola</h2>
          <ol>
            <li>Pisahkan residu dari jenis sampah lain.</li>
            <li>
              Kurangi penggunaannya dengan memilih barang yang bisa dipakai ulang.
            </li>
            <li>
              Buang ke tempat penampungan akhir sesuai prosedur sanitasi.
            </li>
          </ol>
        </section>

        {/* ✅ VIDEO EDUKASI */}
        <div className="video-section">
          <h3>Video Edukasi</h3>
          <iframe
            width="600"
            height="350"
            src="https://www.youtube.com/embed/kaaykflQOvo"
            title="Cara Mengelola Sampah Residu"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Residu;
