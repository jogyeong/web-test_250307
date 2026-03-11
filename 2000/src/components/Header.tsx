import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { Menu, Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <a href="/">
            <h1>{COMPANY_INFO.name}</h1>
          </a>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#about">회사소개</a></li>
            <li><a href="#services">주요사업</a></li>
            <li><a href="#portfolio">포트폴리오</a></li>
            <li><a href="#contact">견적문의</a></li>
          </ul>
        </nav>
        <div className="header-contact">
          <a href={`tel:${COMPANY_INFO.phone}`} className="phone-btn">
            <Phone size={18} />
            <span>{COMPANY_INFO.phone}</span>
          </a>
          <button className="menu-toggle">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
