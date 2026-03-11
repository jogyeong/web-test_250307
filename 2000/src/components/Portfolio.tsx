import React from 'react';
import { PORTFOLIO } from '../data/content';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">시공 포트폴리오</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">이천조경의 정성이 담긴 대표적인 현장들을 소개합니다.</p>
        </div>
        
        <div className="portfolio-grid">
          {PORTFOLIO.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-img-wrapper">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <span className="category">{item.category}</span>
                  <h3 className="portfolio-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
