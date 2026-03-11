import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=800" alt="조경 현장" className="main-img" />
          <div className="experience-badge">
            <span className="years">30+</span>
            <span className="label">Years Experience</span>
          </div>
        </div>
        <div className="about-content">
          <h2 className="section-title">자연과 사람이 조화를 이루는 공간</h2>
          <p className="about-intro">
            {COMPANY_INFO.fullName}은 30년 이상의 풍부한 현장 경험과 전문 기술력을 바탕으로 최상의 조경 서비스를 제공합니다.
          </p>
          <div className="about-features">
            <div className="feature-item">
              <CheckCircle className="feature-icon" />
              <div>
                <h4>전문 조경기사 및 특급기술자 보유</h4>
                <p>골프장 경영협회 정회원 및 조경수 관리 시방서 집필 전문가가 직접 관리합니다.</p>
              </div>
            </div>
            <div className="feature-item">
              <CheckCircle className="feature-icon" />
              <div>
                <h4>특허받은 친환경 방제 기술</h4>
                <p>수목 병충해 비살포 방제 및 방역 방법에 대한 고유 특허를 보유하고 있습니다.</p>
              </div>
            </div>
            <div className="feature-item">
              <CheckCircle className="feature-icon" />
              <div>
                <h4>맞춤형 토지 개발 컨설팅</h4>
                <p>비업무용 토지신탁 개발 및 컨설팅을 통해 자산 가치를 극대화합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
