import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./pages.css";

const Organik = () => {
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const toggleMusic = () => {
    if (musicOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
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

      {/* 🎵 Elemen audio */}
      <audio ref={audioRef} loop>
        <source src="/music/bgm.mp3" type="audio/mpeg" />
        Browser Anda tidak mendukung pemutar audio.
      </audio>

      {/* ✅ Konten Halaman Organik */}
      <div className="page-container organik">
        <h1>Sampah Organik</h1>

        <section>
          <h2>Pengertian</h2>
          <p>
            Sampah organik adalah sampah yang berasal dari sisa makhluk hidup,
            seperti tumbuhan dan hewan, yang dapat terurai secara alami oleh
            mikroorganisme. Contohnya adalah sisa makanan, daun kering, dan
            kulit buah.
          </p>
        </section>

        <section>
          <h2>Jenis</h2>
          <ul>
            <li>Sampah organik basah (misal: sisa makanan, sayuran, buah-buahan)</li>
            <li>Sampah organik kering (misal: ranting, daun kering, kayu)</li>
          </ul>
        </section>

        <section>
          <h2>Dampak</h2>
          <p>
            Jika tidak dikelola dengan baik, sampah organik dapat menimbulkan
            bau tidak sedap dan menjadi sarang lalat. Namun, jika diolah, dapat
            menjadi pupuk kompos yang bermanfaat untuk tanaman.
          </p>
        </section>

        <section>
          <h2>Cara Mengelola</h2>
          <ol>
            <li>Pisahkan sampah organik dari jenis lainnya.</li>
            <li>Gunakan wadah tertutup untuk menghindari bau.</li>
            <li>Olah menjadi kompos menggunakan metode takakura atau biopori.</li>
          </ol>
        </section>

        {/* ✅ Video Edukasi */}
        <div className="video-section">
          <h3>Video Edukasi</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WI4pRrTDhUs"
            title="Cara Mengelola Sampah Organik"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Organik;