import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            resume
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 gap-6">
          <MotionWrapper>
            <motion.a
              href="/BrandonJose_TenorioNoguera_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
              whileHover={{ y: -5 }}
            >
              <div className="border rounded-lg p-6 hover:border-blue-500/30 transition-colors flex flex-col h-full min-h-[300px] cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-blue-500" />
                  <h3 className="text-lg font-medium truncate">
                    BrandonJose_TenorioNoguera_Resume.pdf
                  </h3>
                </div>
                <div className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-4">
                    Concise 1-page resume with key highlights
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Last updated: 2024-06-15
                  </p>
                </div>
                <div className="mt-auto">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer">
                    Click anywhere to preview!
                  </button>
                </div>
              </div>
            </motion.a>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
