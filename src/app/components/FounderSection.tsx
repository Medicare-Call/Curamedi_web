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
                  Founder & CEO, CURAMEDI
                </div>
              </div>
              <div className="text-[#666] leading-relaxed italic mb-5 font-[500] text-[15px]">
                "AI 기반 디지털 헬스케어 창업가"
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-[#f4fcf8] text-[#313131] px-4 py-2 rounded-full text-[13px] font-[500] border border-[#e6faef]">
                  컴퓨터공학 전공
                </span>
                <span className="bg-[#f4fcf8] text-[#313131] px-4 py-2 rounded-full text-[13px] font-[500] border border-[#e6faef]">
                  통신 인프라 직접 설계형 창업가
                </span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}