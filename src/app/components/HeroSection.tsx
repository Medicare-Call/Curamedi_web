import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronDown } from "lucide-react";

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 62;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] md:min-h-[800px] flex items-center pt-[62px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-gradient z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1766747161366-9a30e15b9fe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmUlMjBuYXR1cmUlMjBmb3Jlc3QlMjBncmVlbiUyMG1vcm5pbmclMjBsaWdodHxlbnwxfHx8fDE3NzE4NzY0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-20 text-center w-full py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 text-white font-[600] rounded-full text-[13px] mb-8 backdrop-blur-md border border-white/20"
        >
          <span className="w-2 h-2 rounded-full bg-[#10d266] animate-pulse" />
          AI Healthcare Technology
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[34px] md:text-[52px] font-[700] leading-[1.35] text-white mb-8"
        >
          AI 기술로
          <br />
          <span className="text-[#10d266]">
            일상 건강 데이터를 구조화합니다.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[17px] md:text-[18px] text-[#d2d2d2] leading-[1.7] mb-12 max-w-2xl mx-auto"
        >
          메디케어랩은 AI 기반 분석 엔진을 통해
          <br className="hidden md:block" />
          고령자의 일상 데이터를 해석하고
          <br className="hidden md:block" />
          디지털 헬스케어 솔루션을 개발합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#product"
            onClick={(e) => scrollTo(e, "#product")}
            className="cta-button text-white px-8 py-4 font-[600] text-[17px] shadow-xl"
          >
            솔루션 보기
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="border-[1.5px] border-white text-white px-8 py-4 rounded-[10px] font-[600] text-[17px] hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            도입 문의
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "#contact")}
            className="border-[1.5px] border-white/40 text-white/80 px-8 py-4 rounded-[10px] font-[600] text-[17px] hover:bg-white/10 hover:text-white hover:border-white/60 transition-all backdrop-blur-sm"
          >
            협업 제안
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#identity"
            onClick={(e) => scrollTo(e, "#identity")}
            className="text-white/50 hover:text-white/80 transition-colors"
          >
            <ChevronDown size={28} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
