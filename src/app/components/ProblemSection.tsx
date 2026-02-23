import { TrendingUp, FileX, PhoneOff, Users, Unplug } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const problems = [
  {
    icon: TrendingUp,
    title: "고령화 & 만성질환 확대",
    desc: "고령 가구가 급증하고 복합 만성질환이 확대되면서 가정 내 재가 돌봄에 대한 수요가 폭발적으로 증가하고 있습니다.",
  },
  {
    icon: Users,
    title: "재가 돌봄 수요 급증",
    desc: "독거 고령자의 증가와 함께 시설 중심이 아닌 재가 돌봄 서비스에 대한 사회적·정책적 요구가 높아지고 있습니다.",
  },
  {
    icon: FileX,
    title: "일상 건강 데이터 비구조화",
    desc: "병원 밖에서 발생하는 중요한 건강 정보가 기록되지 않고 사라져, 데이터 기반 의사결정이 불가능합니다.",
  },
  {
    icon: Unplug,
    title: "보호자-기관 간 정보 단절",
    desc: "보호자와 돌봄 기관 사이의 실시간 소통이 부재하여, 위급 상황 대응과 일상적 건강 관리에 사각지대가 발생합니다.",
  },
  {
    icon: PhoneOff,
    title: "디지털 접근성 격차",
    desc: "대부분의 헬스케어 서비스가 앱을 요구하지만, 관리가 필요한 고령자들은 스마트폰 사용에 큰 어려움을 겪습니다.",
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-[80px] md:py-[120px] bg-[#fafafa] border-y border-gray-100"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 bg-red-50 text-red-500 font-[700] rounded-full text-[13px] mb-5 tracking-wide">
              Problem
            </div>
            <h2 className="text-[26px] md:text-[34px] font-[700] leading-[1.35] text-[#313131]">
              병원 밖의 건강 데이터는 비어 있습니다.
            </h2>
          </div>
        </SectionReveal>

        {/* Top row: 3 cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {problems.slice(0, 3).map((p, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div className="bg-white p-7 md:p-8 rounded-[20px] card-shadow border border-gray-100 hover:border-gray-200 transition-all h-full">
                <div className="w-12 h-12 bg-[#e6faef] rounded-[14px] flex items-center justify-center mb-5">
                  <p.icon className="text-[#00b859]" size={22} />
                </div>
                <h4 className="text-[18px] font-[700] mb-3 text-[#313131]">
                  {p.title}
                </h4>
                <p className="text-[#666] text-[15px] leading-[1.65]">
                  {p.desc}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
        {/* Bottom row: 2 cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {problems.slice(3).map((p, i) => (
            <SectionReveal key={i + 3} delay={(i + 3) * 0.1}>
              <div className="bg-white p-7 md:p-8 rounded-[20px] card-shadow border border-gray-100 hover:border-gray-200 transition-all h-full">
                <div className="w-12 h-12 bg-[#e6faef] rounded-[14px] flex items-center justify-center mb-5">
                  <p.icon className="text-[#00b859]" size={22} />
                </div>
                <h4 className="text-[18px] font-[700] mb-3 text-[#313131]">
                  {p.title}
                </h4>
                <p className="text-[#666] text-[15px] leading-[1.65]">
                  {p.desc}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
