import { Briefcase, Eye, CheckCircle2, ArrowUpRight } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const models = [
  {
    tag: "B2C",
    title: "보호자 대상 월 구독형 건강관리 서비스",
    desc: "자녀가 부모님의 건강 상태를 직접 관리",
    color: "from-[#00b859] to-[#10d266]",
  },
  {
    tag: "B2G",
    title: "지자체 통합돌봄 및 노인맞춤돌봄 연계",
    desc: "공공 돌봄 인력의 모니터링 효율성 극대화",
    color: "from-[#0891b2] to-[#22d3ee]",
  },
  {
    tag: "B2B",
    title: "의료·헬스케어 파트너 협업 모델",
    desc: "구조화된 데이터를 활용한 제휴 서비스 개발",
    color: "from-[#7c3aed] to-[#a78bfa]",
  },
];

const visions = [
  "AI 기반 건강 스코어링 시스템",
  "예측 기반 이상 징후 감지 모델",
  "전국 단위 확장 가능한 디지털 돌봄 플랫폼",
  "고령자 건강 데이터 표준화",
];

export function BusinessVisionSection() {
  return (
    <section className="py-[80px] md:py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20">
          {/* Business Model */}
          <SectionReveal>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 bg-[#f4fcf8] rounded-[12px] flex items-center justify-center">
                  <Briefcase className="text-[#00b859]" size={22} />
                </div>
                <h2 className="text-[26px] md:text-[28px] font-[700] text-[#313131]">
                  Business Model
                </h2>
              </div>
              <div className="space-y-4">
                {models.map((m, i) => (
                  <div
                    key={i}
                    className="group p-5 rounded-[18px] border border-gray-100 bg-[#fafafa] hover:bg-white hover:shadow-md transition-all flex items-center gap-5"
                  >
                    <div
                      className={`w-14 h-14 rounded-[14px] bg-gradient-to-br ${m.color} flex items-center justify-center text-white font-[800] text-[13px] shrink-0 shadow-sm`}
                    >
                      {m.tag}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-[700] text-[#313131] text-[15px] mb-0.5 flex items-center gap-1">
                        {m.title}
                        <ArrowUpRight
                          size={14}
                          className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </h4>
                      <p className="text-[13px] text-[#888]">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Vision */}
          <SectionReveal delay={0.12}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 bg-[#f4fcf8] rounded-[12px] flex items-center justify-center">
                  <Eye className="text-[#00b859]" size={22} />
                </div>
                <h2 className="text-[26px] md:text-[28px] font-[700] text-[#313131]">
                  Vision
                </h2>
              </div>
              <h3 className="text-[22px] md:text-[24px] font-[700] text-[#00b859] mb-5 leading-[1.4]">
                데이터 기반 돌봄의 표준을 만듭니다.
              </h3>
              <p className="text-[#888] mb-8 leading-[1.7] text-[15px]">
                우리의 궁극적인 목표는 단순한 자동화를 넘어, 누적된 데이터를 통해
                선제적으로 위험을 예측하고 관리하는 생태계를 구축하는 것입니다.
              </p>
              <ul className="space-y-3">
                {visions.map((v, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 p-4 bg-[#f4fcf8] rounded-[14px] border border-[#e6faef] hover:border-[#00b859]/30 transition-colors"
                  >
                    <CheckCircle2
                      className="text-[#10d266] shrink-0"
                      size={20}
                    />
                    <span className="font-[600] text-[#313131] text-[15px]">
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
