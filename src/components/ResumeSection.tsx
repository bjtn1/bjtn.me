import { motion } from "framer-motion";
import { FileText } from "lucide-react"; // Removed Download import
import MotionWrapper from "./MotionWrapper";
import { useEffect, useState } from "react";

interface FileInfo {
  lastUpdated: Date;
  fileSize: string;
}

async function getFileInfo(path: string): Promise<FileInfo> {
  try {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error('File not found');
    
    const lastModified = response.headers.get('last-modified');
    const contentLength = response.headers.get('content-length');
    
    return {
      lastUpdated: lastModified ? new Date(lastModified) : new Date(NaN),
      fileSize: contentLength ? formatFileSize(parseInt(contentLength)) : 'N/A'
    };
  } catch (error) {
    console.error('Error fetching file info:', error);
    return {
      lastUpdated: new Date(NaN),
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
  if (isNaN(date.getTime())) {
    return Math.floor(Date.now() / 1000).toString();
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default function ResumeSection() {
  const [standardResumeInfo, setStandardResumeInfo] = useState<FileInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFileInfo = async () => {
      setIsLoading(true);
      try {
        const standard = await getFileInfo('/BrandonJose_TenorioNoguera_Resume.pdf');
        setStandardResumeInfo(standard);
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
          <div className="grid grid-cols-1 gap-6">
            <MotionWrapper>
              <div className="border rounded-lg p-6 flex flex-col h-full min-h-[300px] animate-pulse">
                <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
              </div>
            </MotionWrapper>
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

        <div className="grid grid-cols-1 gap-6">
          {/* Standard Resume - Entire card is clickable */}
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
                  <h3 className="text-lg font-medium">BrandonJose_TenorioNoguera_Resume.pdf</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-muted-foreground text-sm mb-4">
                    Concise 1-page resume with key highlights (click to preview!)
                  </p>
                  {standardResumeInfo && (
                    <p className="text-xs text-muted-foreground mb-4">
                      Last updated: {formatDate(standardResumeInfo.lastUpdated)}
                    </p>
                  )}
                </div>
                <div className="mt-auto">
                  {standardResumeInfo && (
                    <p className="text-xs text-muted-foreground">
                      PDF • {standardResumeInfo.fileSize}
                    </p>
                  )}
                </div>
              </div>
            </motion.a>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
