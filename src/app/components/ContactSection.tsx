import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

type InquiryType = "도입 문의" | "협업 제안" | "투자 문의";

export function ContactSection() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("도입 문의");
  const [org, setOrg] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!org || !name || !contact || !message) {
      alert("모든 필수 항목을 입력해주세요.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setOrg("");
      setName("");
      setContact("");
      setMessage("");
    }, 3000);
  };

  return (
    <section id="contact" className="py-[80px] md:py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionReveal>
          <div className="bg-gradient-to-br from-[#f4fcf8] to-[#eef9f2] rounded-[30px] p-6 md:p-16 lg:p-20 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#00b859]/5 rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#10d266]/5 rounded-full" />

            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 bg-white text-[#00b859] font-[700] rounded-full text-[13px] mb-5 tracking-wide shadow-sm">
                Contact
              </div>
              <h2 className="text-[26px] md:text-[34px] font-[700] leading-[1.35] text-[#313131] mb-4">
                함께 혁신을 만들어갈 파트너를 찾습니다
              </h2>
              <p className="text-[17px] font-[400] leading-[1.7] text-[#666] mb-12">
                기술 연동, 돌봄 서비스 도입, 또는 비전에 동참할 투자 문의를
                남겨주세요.
              </p>

              <div className="max-w-[800px] mx-auto space-y-6 text-left bg-white p-6 md:p-10 lg:p-12 rounded-[22px] shadow-lg border border-gray-100/50">
                {/* Inquiry Type */}
                <div className="space-y-3 mb-2">
                  <label className="font-[600] text-[#313131] text-[16px]">
                    문의 유형 <span className="text-[#10d266]">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {(
                      ["도입 문의", "협업 제안", "투자 문의"] as InquiryType[]
                    ).map((type) => (
                      <label
                        key={type}
                        className={`flex items-center p-4 border-[1.5px] rounded-[14px] cursor-pointer transition-all group ${
                          inquiryType === type
                            ? "border-[#00b859] bg-[#f4fcf8] shadow-sm"
                            : "border-gray-200 hover:border-[#00b859]/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="inquiryType"
                          checked={inquiryType === type}
                          onChange={() => setInquiryType(type)}
                          className="w-[18px] h-[18px] mr-3 accent-[#00b859]"
                        />
                        <span
                          className={`font-[600] text-[14px] ${
                            inquiryType === type
                              ? "text-[#00b859]"
                              : "text-[#666] group-hover:text-[#313131]"
                          }`}
                        >
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="font-[600] text-[#313131] text-[15px]">
                      소속 / 기관명 <span className="text-[#10d266]">*</span>
                    </label>
                    <input
                      type="text"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder="소속을 입력해주세요"
                      className="w-full h-[54px] border-[1.5px] border-gray-200 rounded-[12px] px-4 focus:outline-none focus:border-[#00b859] focus:ring-2 focus:ring-[#00b859]/10 transition-all bg-white text-[15px] placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-[600] text-[#313131] text-[15px]">
                      담당자 성함 <span className="text-[#10d266]">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="성함을 입력해주세요"
                      className="w-full h-[54px] border-[1.5px] border-gray-200 rounded-[12px] px-4 focus:outline-none focus:border-[#00b859] focus:ring-2 focus:ring-[#00b859]/10 transition-all bg-white text-[15px] placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-[600] text-[#313131] text-[15px]">
                    이메일 <span className="text-[#10d266]">*</span>
                  </label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="회신 받으실 연락처 또는 이메일"
                    className="w-full h-[54px] border-[1.5px] border-gray-200 rounded-[12px] px-4 focus:outline-none focus:border-[#00b859] focus:ring-2 focus:ring-[#00b859]/10 transition-all bg-white text-[15px] placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-[600] text-[#313131] text-[15px]">
                    문의 내용 <span className="text-[#10d266]">*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="제안 및 문의하실 내용을 상세히 적어주세요"
                    className="w-full h-[150px] border-[1.5px] border-gray-200 rounded-[12px] p-4 focus:outline-none focus:border-[#00b859] focus:ring-2 focus:ring-[#00b859]/10 resize-none transition-all bg-white text-[15px] placeholder:text-gray-400"
                  />
                </div>

                {submitted ? (
                  <div className="w-full h-[56px] bg-[#10d266] text-white font-[700] text-[17px] mt-4 rounded-[12px] flex items-center justify-center gap-2 shadow-lg">
                    <CheckCircle2 size={20} />
                    문의가 접수되었습니다!
                  </div>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="cta-button w-full h-[56px] text-white font-[700] text-[17px] mt-4 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    문의 남기기
                  </button>
                )}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
