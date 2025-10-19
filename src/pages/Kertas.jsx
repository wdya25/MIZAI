import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pages.css";

const Kertas = () => {
  const [musicOn, setMusicOn] = useState(false);
  const [audio] = useState(new Audio("/music/background-music.mp3"));
  const navigate = useNavigate();

  const toggleMusic = () => {
    if (musicOn) {
      audio.pause();
    } else {
      audio.play();
      audio.loop = true;
    }
    setMusicOn(!musicOn);
  };

  return (
    <div className="app">
      {/* ✅ TOPBAR SEDERHANA - SAMA DENGAN FEEDBACK */}
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

      {/* ✅ ISI HALAMAN KERTAS */}
      <div className="page-container kertas">
        <h1>Sampah Kertas</h1>

        <section>
          <h2>Pengertian</h2>
          <p>
            Sampah kertas berasal dari bahan dasar serat kayu yang bisa didaur
            ulang menjadi produk baru seperti buku, tisu, dan kertas daur ulang.
          </p>
        </section>

        <section>
          <h2>Jenis</h2>
          <ul>
            <li>Kertas putih, kertas koran, kertas karton</li>
            <li>Kertas berlapis plastik atau foil (tidak dapat didaur ulang)</li>
          </ul>
        </section>

        <section>
          <h2>Dampak</h2>
          <p>
            Jika dibuang sembarangan, kertas menambah volume sampah dan
            menyebabkan pemborosan sumber daya alam (pohon). Pembakaran kertas
            juga menghasilkan CO₂.
          </p>
        </section>

        <section>
          <h2>Cara Mengelola</h2>
          <ol>
            <li>Pisahkan kertas kering dari basah.</li>
            <li>Gunakan kembali untuk mencatat atau melapisi barang.</li>
            <li>Kirim ke tempat daur ulang atau bank sampah.</li>
          </ol>
        </section>

        {/* ✅ VIDEO EDUKASI */}
        <div className="video-section">
          <h3>Video Edukasi</h3>
          <iframe
            width="600"
            height="350"
            src="https://www.youtube.com/embed/QZhrxwNLFvU"
            title="Cara Mengelola Sampah Kertas"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Kertas;