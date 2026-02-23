export function Footer() {
  return (
    <footer className="py-10 md:py-12 bg-[#fafafa] border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="text-[22px] font-[700] text-gray-300 tracking-tight select-none">
            CURAMEDI
          </div>
          <div className="text-[#999] text-[13px] font-[500]">
            &copy; 2026 CURAMEDI. All rights reserved.
          </div>
          <div className="flex space-x-6 text-[#aaa] text-[13px]">
            <a
              href="#"
              className="hover:text-[#00b859] transition-colors font-[500]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[#00b859] transition-colors font-[500]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
