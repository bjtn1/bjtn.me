import { motion } from "framer-motion";
import { Download, FileText, FileSpreadsheet } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { useEffect, useState } from "react";

interface FileInfo {
  lastUpdated: Date;
  fileSize: string;
}

async function getFileInfo(path: string): Promise<FileInfo> {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('File not found');
    
    const lastModified = response.headers.get('last-modified');
    const contentLength = response.headers.get('content-length');
    
    return {
      lastUpdated: lastModified ? new Date(lastModified) : new Date(),
      fileSize: contentLength ? formatFileSize(parseInt(contentLength)) : 'N/A'
    };
  } catch (error) {
    console.error('Error fetching file info:', error);
    return {
      lastUpdated: new Date(),
      fileSize: 'N/A'
    };
  }
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function ResumeSection() {
  const [standardResumeInfo, setStandardResumeInfo] = useState<FileInfo | null>(null);
  const [extendedResumeInfo, setExtendedResumeInfo] = useState<FileInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFileInfo = async () => {
      setIsLoading(true);
      try {
        const [standard, extended] = await Promise.all([
          getFileInfo('/BrandonJose_TenorioNoguera_Resume.pdf'),
          getFileInfo('/resume-extended.pdf')
        ]);
        setStandardResumeInfo(standard);
        setExtendedResumeInfo(extended);
      } catch (error) {
        console.error('Error loading resume info:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFileInfo();
  }, []);

  if (isLoading) {
    return (
      <section id="resume" className="py-12 relative">
        <div className="container max-w-4xl mx-auto px-6 md:px-4">
          <MotionWrapper>
            <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
              resume
            </h2>
          </MotionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(2)].map((_, index) => (
              <MotionWrapper key={index} delay={index * 0.1}>
                <div className="border rounded-lg p-6 flex flex-col h-full min-h-[300px] animate-pulse">
                  <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="resume" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            resume
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Standard Resume */}
          <MotionWrapper>
            <motion.div 
              className="border rounded-lg p-6 hover:border-blue-500/30 transition-colors flex flex-col h-full min-h-[300px]"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-blue-500" />
                <h3 className="text-lg font-medium">standard version</h3>
              </div>
              <div className="flex-grow">
                <p className="text-muted-foreground text-sm mb-4">
                  Concise 1-page resume with key highlights
                </p>
                {standardResumeInfo && (
                  <p className="text-xs text-muted-foreground mb-4">
                    Last updated: {formatDate(standardResumeInfo.lastUpdated)}
                  </p>
                )}
              </div>
              <div>
                <div className="flex gap-3">
                  <motion.a
                    href="/BrandonJose_TenorioNoguera_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-blue-500/10 hover:bg-blue-500/20 rounded-md transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Download className="h-4 w-4" />
                    download
                  </motion.a>
                  <motion.a
                    href="/BrandonJose_TenorioNoguera_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-transparent hover:bg-blue-500/5 rounded-md transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FileText className="h-4 w-4" />
                    preview
                  </motion.a>
                </div>
                {standardResumeInfo && (
                  <p className="text-xs text-muted-foreground mt-2">
                    PDF • {standardResumeInfo.fileSize}
                  </p>
                )}
              </div>
            </motion.div>
          </MotionWrapper>

          {/* Extended Resume */}
          <MotionWrapper delay={0.1}>
            <motion.div 
              className="border rounded-lg p-6 hover:border-blue-500/30 transition-colors flex flex-col h-full min-h-[300px]"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileSpreadsheet className="h-6 w-6 text-blue-500" />
                <h3 className="text-lg font-medium">extended version</h3>
              </div>
              <div className="flex-grow">
                <p className="text-muted-foreground text-sm mb-4">
                  Detailed resume with all projects and experiences
                </p>
                {extendedResumeInfo && (
                  <p className="text-xs text-muted-foreground mb-4">
                    Last updated: {formatDate(extendedResumeInfo.lastUpdated)}
                  </p>
                )}
              </div>
              <div>
                <div className="flex gap-3">
                  <motion.a
                    href="/resume-extended.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-blue-500/10 hover:bg-blue-500/20 rounded-md transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Download className="h-4 w-4" />
                    download
                  </motion.a>
                  <motion.a
                    href="/resume-extended.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-transparent hover:bg-blue-500/5 rounded-md transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FileText className="h-4 w-4" />
                    preview
                  </motion.a>
                </div>
                {extendedResumeInfo && (
                  <p className="text-xs text-muted-foreground mt-2">
                    PDF • {extendedResumeInfo.fileSize}
                  </p>
                )}
              </div>
            </motion.div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
