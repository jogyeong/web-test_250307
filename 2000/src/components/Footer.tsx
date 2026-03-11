import React from 'react';
import { COMPANY_INFO } from '../data/content';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">{COMPANY_INFO.name}</h2>
            <p className="footer-tagline">{COMPANY_INFO.tagline}</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">회사소개</a></li>
                <li><a href="#services">주요사업</a></li>
                <li><a href="#portfolio">포트폴리오</a></li>
                <li><a href="#contact">견적문의</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="company-details">
            <p>상호명: {COMPANY_INFO.fullName} | 대표자: {COMPANY_INFO.ceo}</p>
            <p>사업자등록번호: {COMPANY_INFO.registrationNumber} | 주소: {COMPANY_INFO.address}</p>
            <p>대표전화: {COMPANY_INFO.phone} | 이메일: {COMPANY_INFO.email}</p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
