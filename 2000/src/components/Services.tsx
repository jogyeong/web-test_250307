import React from 'react';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { TreePine, Trophy, Shrub, ShieldCheck } from 'lucide-react';

const iconMap = {
  TreePine: TreePine,
  Golf: Trophy,
  Trees: Shrub,
  ShieldCheck: ShieldCheck
};

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">주요 사업 내용</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">조경 설계부터 시공, 사후 관리까지 통합 솔루션을 제공합니다.</p>
        </div>
        
        <div className="services-grid">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
