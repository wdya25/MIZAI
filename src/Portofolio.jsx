import React, { useState } from "react";
import "./Portofolio.css";
import { useNavigate } from "react-router-dom";

const developers = [
  {
    name: "Shalomita A.C Lasamahu",
    role: "Backend Developer, Quality Assurance",
    jurusan: "Informatika",
    angkatan: "2024",
    description:
      "Saya adalah mahasiswa semester 3 jurusan IT di Universitas Multimedia Nusantara yang sangat antusias dalam dunia teknologi. Selama kuliah, saya menyadari bahwa IT adalah passion saya, terutama dalam pengembangan website dan game berbasis web. Saya memiliki pengalaman sebagai QA, terbiasa melakukan pengecekan bug dan memastikan kualitas sistem. Selain itu, saya juga mampu merancang base atau struktur dari suatu website, mulai dari perencanaan hingga implementasi. Saat ini saya memiliki keahlian di bidang backend, database, QA, serta pembuatan dan hosting website/game. Ke depannya, saya berkomitmen untuk terus mengembangkan skill dan memperdalam kemampuan saya di dunia teknologi.",
    image: "/public/shalomita.jpg",
    social: {
      instagram: "https://www.instagram.com/mitalasamahu?igsh=OXNtYnBocDduY3Rq",
      github: "https://github.com/ShalomitaLasamahu",
      linkedin: "https://www.linkedin.com/in/shalomita-a-c-lasamahu-8b0222325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Zahra Ariestya Sennova",
    role: "Fullstack Developer, UI/UX Designer",
    jurusan: "Informatika",
    angkatan: "2024",
    description:
      "Saya Zahra, mahasiswi Informatika Universitas Multimedia Nusantara angkatan 2024 yang memiliki ketertarikan pada Frontend Development dan UI/UX Design. Saya menyukai dunia desain dan editing, serta berpengalaman menempati berbagai peran dalam proyek pengembangan web dengan memanfaatkan HTML, CSS, JavaScript, React, Bootstrap, dan Tailwind CSS untuk menciptakan tampilan antarmuka yang menarik, responsif, dan fungsional.",
    image: "/public/zahra.jpg",
    social: {
      instagram: "https://www.instagram.com/zahrariestyaa?igsh=eG05YjFsenlueDho&utm_source=qr",
      github: "https://github.com/4Godness",
      linkedin: "https://www.linkedin.com/in/zahra-ariestya-sennova-74a143325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  },
  {
    name: "Widya Ayu Safitri",
    role: "UI/UX Designer, Frontend Developer",
    jurusan: "Informatika",
    angkatan: "2024",
    description:
      "Saya Widya, seorang mahasiswi Informatika Universitas Multimedia Nusantara angkatan 2024. Saya memiliki ketertarikan yang kuat pada bidang desain visual dan editing, dengan fokus utama yaitu UI/UX Design dan Frontend Development. Passion saya terletak dalam menciptakan desain yang kreatif serta mengimplementasikannya ke dalam sebuah website yang responsif menggunakan HTML, React, JavaScript, Tailwind, serta CSS. Saat ini, saya sedang aktif memperluas skill dengan mendalami teknologi modern untuk meningkatkan kemampuan dalam pengembangan proyek yang saya miliki.",
    image: "/public/widya.jpg",
    social: {
      instagram: "https://www.instagram.com/widiay._?igsh=eDA1Ync1ZWxqd21i",
      github: "https://github.com/wdya25",
      linkedin: "https://www.linkedin.com/in/widya-ayu-safitri-415260316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Keisha Aria Lai",
    role: "Technical Writer / Documentation Specialist",
    jurusan: "Informatika",
    angkatan: "2024",
    description:
      "Saya Kei, mahasiswa jurusan Informatika di Universitas Multimedia Nusantara yang tertarik dengan dunia teknologi, terutama di bidang pengembangan web dan sistem. Selama kuliah, saya belajar banyak tentang cara kerja berbagai teknologi dan bagaimana semuanya bisa saling terhubung untuk menciptakan solusi yang bermanfaat. Saya juga senang mencoba hal-hal baru, mengasah kemampuan logika, dan terus belajar agar dapat berkembang serta menerapkan ilmu yang saya pelajari di kehidupan nyata.",
    image: "/public/keisha.jpg",
    social: {
      instagram: "https://www.instagram.com/keeishaaa._?igsh=ZHl2eGYxN240Mms5&utm_source=qr",
      github: "https://github.com/keishalaii",
      linkedin: "https://www.linkedin.com/in/keisha-lai-63459a311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  },
  {
    name: "Tamara Putri Salwa",
    role: "Technical Writer / Documentation Specialist",
    jurusan: "Informatika",
    angkatan: "2024",
    description:"Halo! Saya Tamara Putri Salwa, mahasiswi Universitas Multimedia Nusantara angkatan 2024, program studi Informatika. Sejak bergabung di dunia IT, saya memiliki ketertarikan besar pada bidang cybersecurity terutama bagaimana teknologi dapat digunakan untuk melindungi data, menjaga privasi, dan menciptakan sistem yang aman. Saya senang mempelajari hal-hal baru seputar keamanan digital, eksplorasi sistem, serta memahami cara kerja serangan dan pertahanan dalam dunia siber.",
    image: "/public/tamara.jpg",
    social: {
      instagram: "https://www.instagram.com/tamaratrislwa_?igsh=MW44ZG52cHI2YjBqbw==",
      github: "https://github.com/Tamaraptr",
      linkedin: "https://www.linkedin.com/in/tamara-putri-salwa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
];

const Portfolio = ({ musicOn, toggleMusic }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
            <button className="about-nav-btn" onClick={() => navigate("/About")}>
              About
            </button>
            <button className="about-nav-btn" onClick={() => navigate("/Edukasi")}>
              Edukasi
            </button>
            <button className="about-nav-btn active" onClick={() => navigate("/Portofolio")}>
              Portofolio
            </button>
            <button className="about-nav-btn " onClick={() => navigate("/Feedback")}>
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
      <div className="portfolio-container">
        <h1 className="portfolio-title">Tim Pengembang Website</h1>

        <div className="portfolio-list">
          {developers.map((dev, index) => (
            <div className="portfolio-item" key={index}>
              <img src={dev.image} alt={dev.name} className="profile-photo" />
              <div className="portfolio-info">
                <h2>{dev.name}</h2>
                <p className="role">{dev.role}</p>
                <p className="info">
                  {dev.jurusan} • Angkatan {dev.angkatan}
                </p>
                <p className="description">{dev.description}</p>
                <div className="social-links">
                  <a href={dev.social.instagram} target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={dev.social.github} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={dev.social.linkedin} target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;