import { ExternalLink } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

export function ProductSection() {
  return (
    <section id="product" className="py-[80px] md:py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <div className="text-center">
            <div className="inline-block px-4 py-1.5 bg-[#e6faef] text-[#00b859] font-[700] rounded-full text-[13px] mb-5 tracking-wide">
              MedicareCall
            </div>
            <h2 className="text-[26px] md:text-[34px] font-[700] leading-[1.35] text-[#313131] mb-5">
              AI 음성통화 기반 시니어 건강 모니터링 솔루션
            </h2>
            <p className="text-[17px] font-[400] leading-[1.7] text-[#666] max-w-[680px] mx-auto mb-10">
              메디케어콜은 AI가 직접 전화를 통해 고령자의 일상 건강 상태를
              확인하고, 그 대화를 데이터로 구조화하는 AI 음성통화 기반 디지털
              헬스케어 솔루션입니다.
            </p>
            <a
              href="https://medicarecall.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button text-white px-10 py-4 font-[700] text-[17px] shadow-lg hover:shadow-xl inline-flex items-center gap-2.5"
            >
              서비스 소개 보기
              <ExternalLink size={18} />
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}