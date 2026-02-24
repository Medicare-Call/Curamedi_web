import { Cpu, Mic, GitBranch, BarChart2 } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const cards = [
  { icon: Cpu, title: "AI 기반\n건강 데이터 분석" },
  { icon: Mic, title: "음성 인터랙션\n설계" },
  { icon: GitBranch, title: "조건부 로직 기반\n대화 구조화" },
  { icon: BarChart2, title: "헬스케어 데이터\n시각화 시스템" },
];

export function IdentitySection() {
  return (
    <section id="identity" className="py-[80px] md:py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#e6faef] text-[#00b859] font-[700] rounded-full text-[13px] mb-5 tracking-wide">
              Company Identity
            </div>
            <h2 className="text-[26px] md:text-[34px] font-[700] leading-[1.35] text-[#313131] mb-6">
              우리는 무엇을 만드는가
            </h2>
            <p className="text-[17px] font-[400] leading-[1.7] text-[#666] max-w-[640px] mx-auto">
              메디케어랩은{" "}
              <span className="text-[#00b859] font-[700]">
                AI 기술 기반 디지털 헬스케어 솔루션
              </span>
              을 제작하는 기업입니다.
              <br className="hidden md:block" />
              일상 속에서 생성되는 데이터를 구조화하여 건강 의사결정을
              지원합니다.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="group p-7 md:p-8 rounded-[20px] bg-[#f4fcf8] border border-[#e6faef] hover:border-[#00b859] transition-all duration-300 card-shadow hover:card-shadow-lg hover:-translate-y-1 h-full">
                <div className="w-14 h-14 bg-white rounded-[16px] flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                  <c.icon className="text-[#00b859]" size={24} />
                </div>
                <h3 className="text-[16px] md:text-[17px] font-[700] text-[#313131] whitespace-pre-line leading-[1.5]">
                  {c.title}
                </h3>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
