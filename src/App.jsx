import React, { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import HalamanAwal from "./halamanawal";
import About from "./About";
import Portofolio from "./Portofolio";
import Feedback from "./Feedback";
import HalamanUtama from "./halamanutama";
import Edukasi from "./Edukasi";

// Import halaman-halaman sampah
import OrganikPage from "./pages/Organik";
import AnorganikPage from "./pages/Anorganik";
import B3Page from "./pages/B3";
import KertasPage from "./pages/Kertas";
import ResiduPage from "./pages/Residu";

export default function App() {
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  // Fungsi toggle musik yang lebih smooth
  function toggleMusic() {
    if (!musicOn) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setMusicOn(true);
          })
          .catch((err) => {
            console.log("Autoplay diblokir:", err);
            // Fallback: user interaction required
            alert("Klik tombol music sekali lagi untuk memutar audio");
          });
      }
    } else {
      audioRef.current.pause();
      setMusicOn(false);
    }
  }

  return (
    <>
      {/* Audio player tersembunyi */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/music.mp3" type="audio/mpeg" />
        <source src="/music.ogg" type="audio/ogg" />
        Browser Anda tidak mendukung elemen audio.
      </audio>

      <Routes>
        {/* Halaman Awal */}
        <Route
          path="/"
          element={<HalamanAwal musicOn={musicOn} toggleMusic={toggleMusic} />}
        />

        {/* Halaman Utama */}
        <Route
          path="/utama"
          element={<HalamanUtama musicOn={musicOn} toggleMusic={toggleMusic} />}
        />

        {/* Halaman About */}
        <Route 
          path="/About" 
          element={<About musicOn={musicOn} toggleMusic={toggleMusic} />} 
        />

        {/* Halaman Portofolio */}
        <Route 
          path="/Portofolio" 
          element={<Portofolio musicOn={musicOn} toggleMusic={toggleMusic} />} 
        />

        {/* Halaman Feedback */}
        <Route 
          path="/Feedback" 
          element={<Feedback musicOn={musicOn} toggleMusic={toggleMusic} />} 
        />

        {/* Halaman Edukasi */}
        <Route 
          path="/Edukasi" 
          element={<Edukasi musicOn={musicOn} toggleMusic={toggleMusic} />} 
        />

        {/* Halaman untuk tiap jenis sampah */}
        <Route
          path="/organik"
          element={<OrganikPage musicOn={musicOn} toggleMusic={toggleMusic} />}
        />
        <Route
          path="/anorganik"
          element={<AnorganikPage musicOn={musicOn} toggleMusic={toggleMusic} />}
        />
        <Route
          path="/b3"
          element={<B3Page musicOn={musicOn} toggleMusic={toggleMusic} />}
        />
        <Route
          path="/kertas"
          element={<KertasPage musicOn={musicOn} toggleMusic={toggleMusic} />}
        />
        <Route
          path="/residu"
          element={<ResiduPage musicOn={musicOn} toggleMusic={toggleMusic} />}
        />

        {/* Fallback route untuk 404 */}
        <Route 
          path="*" 
          element={
            <div style={{ 
              padding: '100px 20px', 
              textAlign: 'center',
              background: 'linear-gradient(135deg, #2B3E34 0%, #3F4E40 100%)',
              minHeight: '100vh',
              color: 'white',
              fontFamily: 'Poppins, sans-serif'
            }}>
              <h1>404 - Halaman Tidak Ditemukan</h1>
              <p>Halaman yang Anda cari tidak ada.</p>
              <button 
                onClick={() => window.location.href = '/'}
                style={{
                  background: 'linear-gradient(135deg, #B5B89B 0%, #7E8A6D 100%)',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '25px',
                  color: '#2B3E34',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '20px'
                }}
              >
                Kembali ke Home
              </button>
            </div>
          } 
        />
      </Routes>
    </>
  );
}