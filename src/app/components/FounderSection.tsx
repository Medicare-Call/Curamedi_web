import { User } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

export function FounderSection() {
  return (
    <section className="py-[80px] md:py-[120px] bg-[#fafafa] border-t border-gray-100">
      <div className="max-w-[900px] mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 bg-white text-[#00b859] font-[700] rounded-full text-[13px] mb-5 tracking-wide shadow-sm">
              Founder
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-8 md:p-12 card-shadow-lg flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#f4fcf8] to-transparent rounded-bl-full" />

            <div className="relative">
              <div className="w-36 h-36 md:w-40 md:h-40 bg-gradient-to-br from-[#e6faef] to-[#f4fcf8] rounded-full shrink-0 overflow-hidden flex items-center justify-center border-4 border-white shadow-lg">
                <User className="text-[#00b859] opacity-40" size={72} />
              </div>
            </div>

            <div className="relative text-center md:text-left">
              <div className="mb-4">
                <h4 className="text-[24px] font-[700] text-[#313131]">
                  김재훈{" "}
                  <span className="text-[18px] font-[500] text-[#888]">
                    Jaehun Kim
                  </span>
                </h4>
                <div className="text-[#00b859] font-[700] text-[15px] mt-1">
                  Founder & CEO, MEDICARE LAB
                </div>
              </div>
              <p className="text-[15px] text-[#555] leading-[1.75] mb-4">
                AI 기반 디지털 헬스케어 솔루션 기업 메디케어랩의 창업자이자 대표입니다.
                컴퓨터공학 전공을 바탕으로, AI 분석 엔진과 통신 인프라를 결합한 헬스케어 시스템을 직접 설계·구현하고 있습니다.
              </p>
              <p className="text-[15px] text-[#555] leading-[1.75] mb-5">
                고령자의 일상 건강 데이터를 구조화하고, 보호자와 기관이 활용 가능한 디지털 돌봄 인프라를 구축하는 것을 목표로 합니다.
              </p>
              <div className="bg-[#f4fcf8] border border-[#e6faef] rounded-[14px] px-4 py-3 mb-5 text-left">
                <p className="text-[13px] text-[#444] leading-[1.7]">
                  첫 번째 솔루션{" "}
                  <span className="font-[700] text-[#00b859]">AI 음성통화 기반 건강 모니터링 시스템 '메디케어콜'</span>의
                  기술 아키텍처 및 인프라 설계를 주도하고 있습니다.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-[#f4fcf8] text-[#313131] px-4 py-2 rounded-full text-[13px] font-[500] border border-[#e6faef]">
                  컴퓨터공학 전공
                </span>
                <span className="bg-[#f4fcf8] text-[#313131] px-4 py-2 rounded-full text-[13px] font-[500] border border-[#e6faef]">
                  AI 헬스케어 전문가
                </span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}