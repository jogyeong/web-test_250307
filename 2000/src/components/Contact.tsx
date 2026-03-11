import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title">문의 및 상담</h2>
            <p className="contact-intro">조경 공사 견적 및 관리 문의를 남겨주시면 정성껏 상담해 드립니다.</p>
            
            <div className="contact-details">
              <div className="detail-item">
                <Phone className="detail-icon" />
                <div>
                  <h4>전화번호</h4>
                  <p><a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a></p>
                </div>
              </div>
              <div className="detail-item">
                <Mail className="detail-icon" />
                <div>
                  <h4>이메일</h4>
                  <p><a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a></p>
                </div>
              </div>
              <div className="detail-item">
                <MapPin className="detail-icon" />
                <div>
                  <h4>주소</h4>
                  <p>{COMPANY_INFO.address}</p>
                </div>
              </div>
              <div className="detail-item">
                <Clock className="detail-icon" />
                <div>
                  <h4>상담 시간</h4>
                  <p>평일 09:00 ~ 18:00 (주말/공휴일 휴무)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">성함/업체명</label>
                <input type="text" id="name" placeholder="홍길동" required />
              </div>
              <div className="form-group">
                <label htmlFor="tel">연락처</label>
                <input type="tel" id="tel" placeholder="010-0000-0000" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">문의 유형</label>
                <select id="subject">
                  <option>조경 설계 및 시공</option>
                  <option>유지관리 및 방역</option>
                  <option>수목 구매 및 관리</option>
                  <option>기타 문의</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">문의 내용</label>
                <textarea id="message" rows={5} placeholder="문의하실 내용을 상세히 적어주세요."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">상담 신청하기</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
