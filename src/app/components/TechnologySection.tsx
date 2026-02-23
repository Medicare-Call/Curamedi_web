import {
  Server,
  Cpu,
  ShieldAlert,
  Check,
  Radio,
  CalendarClock,
  AudioLines,
  MessageSquareMore,
  GitBranch,
  ScanSearch,
  Database,
  LayoutDashboard,
} from "lucide-react";
import { SectionReveal } from "./SectionReveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const infraItems = [
  { icon: Server, text: "자체 IP-PBX 망 구축" },
  { icon: CalendarClock, text: "통화 세션 제어 및 발신 스케줄링 시스템" },
  { icon: AudioLines, text: "STT–LLM–TTS 순차 처리 파이프라인" },
  { icon: MessageSquareMore, text: "Turn-based 대화 처리 구조" },
  { icon: GitBranch, text: "조건부 프롬프트 로직 설계" },
  { icon: ScanSearch, text: "이상 응답 감지 알고리즘" },
  { icon: Database, text: "구조화 데이터 저장 및 분석 시스템" },
  { icon: LayoutDashboard, text: "보호자 대시보드 연동" },
];

export function TechnologySection() {
  return (
    <section
      id="technology"
      className="py-[80px] md:py-[140px] text-white relative overflow-hidden"
    >
      {/* Dark background with image overlay */}
      <div className="absolute inset-0 bg-[#0a0f1a]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1737998245935-8bc0eefebd92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBibHVlJTIwbmV0d29yayUyMGNvbm5lY3Rpb25zfGVufDF8fHx8MTc3MTg3NjQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tech Background"
          className="w-full h-full object-cover opacity-[0.08]"
        />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/80 via-transparent to-[#0a0f1a]/90" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-white/10 text-[#10d266] font-[700] rounded-full text-[13px] mb-5 tracking-wide border border-white/10">
              Technology
            </div>
            <h2 className="text-[26px] md:text-[34px] font-[700] leading-[1.35] text-white mb-6">
              AI 분석 엔진과 통신 인프라를 결합한
              <br className="hidden md:block" />
              디지털 헬스케어 아키텍처
            </h2>
            <p className="text-[17px] text-[#999] max-w-[680px] mx-auto leading-[1.7]">
              CURAMEDI는 단순 API 결합형 서비스가 아니라,{" "}
              <strong className="text-white font-[600]">
                자체 통신 인프라와 AI 분석 엔진을 결합한 통합 디지털 헬스케어
                시스템
              </strong>
              을 구축합니다.
            </p>
          </div>
        </SectionReveal>

        {/* Infrastructure Grid */}
        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {infraItems.map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/[0.08] rounded-[16px] p-5 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <item.icon
                    size={20}
                    className="text-[#10d266] shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-[14px] text-[#ccc] font-[500] leading-[1.4]">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Architecture Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          <SectionReveal delay={0.15}>
            <div className="bg-white/[0.05] border border-white/[0.1] p-8 rounded-[20px] backdrop-blur-sm hover:bg-white/[0.08] transition-all h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-[12px] bg-[#10d266]/15 flex items-center justify-center">
                  <Radio className="text-[#10d266]" size={22} />
                </div>
                <h3 className="text-[19px] font-[700]">통신 인프라 제어</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-[#aaa]">
                  <Check className="w-5 h-5 text-[#10d266] shrink-0 mt-0.5" />
                  <span className="text-[15px] leading-[1.5]">
                    자체 IP-PBX 망 구축 및 통신 인프라 운용
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-[#aaa]">
                  <Check className="w-5 h-5 text-[#10d266] shrink-0 mt-0.5" />
                  <span className="text-[15px] leading-[1.5]">
                    통화 세션 제어 및 발신 스케줄링 시스템 설계
                  </span>
                </li>
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="bg-white/[0.05] border border-white/[0.1] p-8 rounded-[20px] backdrop-blur-sm hover:bg-white/[0.08] transition-all h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-[12px] bg-[#10d266]/15 flex items-center justify-center">
                  <Cpu className="text-[#10d266]" size={22} />
                </div>
                <h3 className="text-[19px] font-[700]">AI 대화 파이프라인</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-[#aaa]">
                  <Check className="w-5 h-5 text-[#10d266] shrink-0 mt-0.5" />
                  <span className="text-[15px] leading-[1.5]">
                    STT–LLM–TTS 순차 처리 최적화 파이프라인
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-[#aaa]">
                  <Check className="w-5 h-5 text-[#10d266] shrink-0 mt-0.5" />
                  <span className="text-[15px] leading-[1.5]">
                    Turn-based 대화 처리 및 조건부 프롬프트 로직
                  </span>
                </li>
              </ul>
            </div>
          </SectionReveal>
        </div>

        {/* Full-width card */}
        <SectionReveal delay={0.25}>
          <div className="mt-5 bg-gradient-to-r from-[#10d266]/10 to-white/[0.04] border border-white/[0.1] p-8 rounded-[20px] backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-14 h-14 rounded-[16px] bg-[#10d266]/15 flex items-center justify-center shrink-0">
                <ShieldAlert className="text-[#10d266]" size={28} />
              </div>
              <div>
                <h3 className="text-[19px] font-[700] mb-2">
                  데이터 분석 및 서비스 연동
                </h3>
                <p className="text-[#999] leading-[1.65] text-[15px]">
                  이상 응답 감지 알고리즘을 통해 위험 상황을 실시간 판별하고,
                  추출된 비정형 텍스트를 정형화하여 구조화 데이터베이스에
                  저장합니다. 처리된 데이터는 보호자용 앱 및 기관용 관리자
                  대시보드와 실시간 연동됩니다.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
