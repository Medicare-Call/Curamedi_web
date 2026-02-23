import { Award, Rocket, Trophy, Star, Globe, Cpu, Server, Smartphone, Database } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const awards = [
  {
    year: "2025",
    title: "창업유망팀 300+ 성장트랙 선정",
    sub: "교육부 장관 인증",
    featured: true,
  },
  { title: "ICT 스마트 디바이스 공모전 우수상", icon: Star },
  { title: "AI 아이디어톤 대상 수상", icon: Trophy },
  { title: "CES 2026 글로벌 스타트업 탐방 선정", icon: Globe },
];

const techResults = [
  {
    title: "자체 IP-PBX 망 구축 및 운용",
    desc: "외부 API 의존 없이 통신 인프라 자체 제어권 확보",
    icon: Server,
    featured: true,
  },
  {
    title: "AI 음성 분석 파이프라인 직접 설계",
    desc: "실시간 대화 처리를 위한 아키텍처 최적화 완료",
    icon: Cpu,
  },
  {
    title: "서버 기반 건강 데이터 구조화 시스템",
    desc: "비정형 대화의 정형화 모델 및 DB 스키마 구축",
    icon: Database,
  },
  {
    title: "보호자용 Android 앱 MVP 구현",
    desc: "실사용자 연동 및 대시보드 리포트 시각화 적용",
    icon: Smartphone,
  },
];

export function TractionSection() {
  return (
    <section id="traction" className="py-[80px] md:py-[120px] bg-[#f4fcf8]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 bg-white text-[#00b859] font-[700] rounded-full text-[13px] mb-5 tracking-wide shadow-sm">
              Traction
            </div>
            <h2 className="text-[26px] md:text-[34px] font-[700] leading-[1.35] text-[#313131]">
              증명된 실행력과 성과
            </h2>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {/* Awards Column */}
          <SectionReveal>
            <div>
              <h3 className="text-[18px] font-[700] mb-6 flex items-center gap-2.5 text-[#313131]">
                <div className="w-9 h-9 rounded-[10px] bg-[#00b859] flex items-center justify-center">
                  <Award className="text-white" size={18} />
                </div>
                주요 수상 및 선정
              </h3>
              <div className="space-y-3">
                {awards.map((a, i) =>
                  a.featured ? (
                    <div
                      key={i}
                      className="p-6 bg-white rounded-[18px] card-shadow-lg border-l-[5px] border-[#00b859] relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-[#f4fcf8] rounded-bl-[40px] flex items-end justify-start p-3">
                        <Trophy size={18} className="text-[#00b859]" />
                      </div>
                      <div className="text-[13px] text-[#00b859] font-[700] mb-1">
                        {a.year}
                      </div>
                      <div className="font-[700] text-[17px] text-[#313131] pr-16">
                        {a.title}
                      </div>
                      <div className="text-[13px] text-gray-500 mt-1 italic">
                        {a.sub}
                      </div>
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="p-5 bg-white rounded-[16px] card-shadow flex items-center gap-3 hover:shadow-md transition-shadow"
                    >
                      {a.icon && (
                        <a.icon size={18} className="text-[#00b859] shrink-0" />
                      )}
                      <span className="text-[#313131] font-[600] text-[15px]">
                        {a.title}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </SectionReveal>

          {/* Tech Column */}
          <SectionReveal delay={0.12}>
            <div>
              <h3 className="text-[18px] font-[700] mb-6 flex items-center gap-2.5 text-[#313131]">
                <div className="w-9 h-9 rounded-[10px] bg-[#00b859] flex items-center justify-center">
                  <Rocket className="text-white" size={18} />
                </div>
                기술 실행 성과
              </h3>
              <div className="space-y-3">
                {techResults.map((t, i) =>
                  t.featured ? (
                    <div
                      key={i}
                      className="p-6 bg-gradient-to-r from-[#00b859] to-[#10d266] text-white rounded-[18px] shadow-lg relative overflow-hidden"
                    >
                      <div className="absolute -right-4 -bottom-4 opacity-10">
                        <t.icon size={80} />
                      </div>
                      <div className="font-[700] text-[17px] mb-2">
                        {t.title}
                      </div>
                      <p className="text-[14px] text-white/85">{t.desc}</p>
                    </div>
                  ) : (
                    <div
                      key={i}
                      className="p-5 bg-white rounded-[16px] card-shadow hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-1.5">
                        <t.icon size={16} className="text-[#00b859] shrink-0" />
                        <span className="font-[700] text-[#313131] text-[15px]">
                          {t.title}
                        </span>
                      </div>
                      <p className="text-[13px] text-gray-500 ml-7">
                        {t.desc}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
