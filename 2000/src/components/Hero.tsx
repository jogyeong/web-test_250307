import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="hero-subtitle">Premium Landscaping Service</h2>
          <h1 className="hero-title">
            {COMPANY_INFO.tagline}
          </h1>
          <p className="hero-description">
            30년의 경험과 전문성으로 당신의 공간에 자연의 생명력을 불어넣습니다.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              무료 견적 상담 받기 <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-outline">
              사업 내용 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
