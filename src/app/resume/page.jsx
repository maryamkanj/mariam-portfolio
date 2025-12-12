'use client';

import { useState, useEffect } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pdfExists, setPdfExists] = useState(false);
  const [fileInfo, setFileInfo] = useState(null);
  const [mounted, setMounted] = useState(false);

  const PDF_PATH = '/pdfs/Mariam_Kanj_CV.pdf';
  const DOWNLOAD_FILENAME = 'Mariam_Kanj_CV_Resume.pdf';

  const getPdfUrl = () => {
    return `${PDF_PATH}?t=${new Date().getTime()}`;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkPdfExists = async () => {
      try {
        const response = await fetch(getPdfUrl(), { method: 'HEAD' });

        if (response.ok) {
          setPdfExists(true);
          const size = response.headers.get('content-length');
          setFileInfo({
            size: size ? `${(size / 1024 / 1024).toFixed(1)} MB` : 'Unknown size',
            lastModified: response.headers.get('last-modified') || 'Recently',
          });
        } else {
          setPdfExists(false);
          setError(`Resume file not found (HTTP ${response.status})`);
        }
      } catch (err) {
        setPdfExists(false);
        setError('Unable to verify resume file availability');
      }
    };

    checkPdfExists();
  }, []);

  const handleDownload = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const pdfUrl = getPdfUrl();
      const headResponse = await fetch(pdfUrl, { method: 'HEAD' });

      if (!headResponse.ok) {
        throw new Error(`Resume file not available (HTTP ${headResponse.status})`);
      }

      const response = await fetch(pdfUrl);

      if (!response.ok) {
        throw new Error(`Download failed: ${response.status} ${response.statusText}`);
      }

      const blob = await response.blob();

      if (blob.type !== 'application/pdf') {
        throw new Error('Downloaded file is not a valid PDF');
      }

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = DOWNLOAD_FILENAME;
      link.style.display = 'none';
      link.setAttribute('aria-label', `Download ${DOWNLOAD_FILENAME}`);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);

    } catch (err) {
      const errorMsg = err.message || 'Download failed. Please try again.';
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewPdf = (e) => {
    e.preventDefault();
    window.open(getPdfUrl(), '_blank', 'noopener,noreferrer');
  };

  const handleRetry = () => {
    setError(null);
    const checkPdf = async () => {
      const response = await fetch(getPdfUrl(), { method: 'HEAD' });
      setPdfExists(response.ok);
    };
    checkPdf();
  };

  return (
    <div className="flex-grow bg-black-main min-h-screen px-4 sm:px-6 py-12 sm:py-16 relative overflow-hidden">
      {/* Background effects matching homepage */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-pink-500/5 to-transparent rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          <header className="text-center mb-6 sm:mb-8 lg:mb-12">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Mariam Kanj - <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg mb-2">Full-Stack Web Developer</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-pink-500 mx-auto rounded-full mb-4"></div>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto px-2">
              Results-driven Computer Science graduate with hands-on experience in full-stack web development,
              mobile app development, and data analysis.
            </p>
          </header>

          <div className="w-full p-6 sm:p-8 lg:p-12 bg-black-main/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 card-hover mb-6">

            {error && (
              <div className="mb-8 p-4 sm:p-6 bg-red-500/10 backdrop-blur-sm rounded-xl border border-red-500/30">
                <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left mb-3">
                  <svg className="w-6 h-6 text-red-400 mr-0 sm:mr-3 mb-2 sm:mb-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-red-400 font-semibold text-lg">Download Error</span>
                </div>
                <p className="text-red-300 text-center mb-4">{error}</p>
                <div className="flex justify-center">
                  <button
                    onClick={handleRetry}
                    className="px-6 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 border border-red-500/30 transition font-medium"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}

            {isLoading && (
              <div className="mb-8 flex justify-center">
                <div className="inline-flex flex-col sm:flex-row items-center px-4 sm:px-8 py-4 bg-primary/10 backdrop-blur-sm rounded-xl border border-primary/30 text-center sm:text-left">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mr-0 sm:mr-4 mb-2 sm:mb-0"></div>
                  <div>
                    <div className="text-primary font-semibold text-sm sm:text-base">Preparing your download...</div>
                    <div className="text-primary/80 text-xs sm:text-sm">This may take a moment</div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
              <button
                onClick={handleDownload}
                disabled={isLoading || !pdfExists}
                className={`
                  flex items-center justify-center
                  px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200
                  w-full lg:w-auto min-w-[200px] sm:min-w-[250px]
                  ${isLoading || !pdfExists
                    ? 'bg-white/10 text-white/40 border border-white/10 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-500 text-white shadow-lg hover:shadow-xl hover:shadow-primary/25 transform hover:scale-105 active:scale-95'
                  }
                `}
                aria-label={isLoading ? 'Downloading resume' : 'Download resume PDF'}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </>
                )}
              </button>

              <button
                onClick={handleViewPdf}
                disabled={!pdfExists || isLoading}
                className={`
                  flex items-center justify-center
                  px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 border
                  w-full lg:w-auto min-w-[200px] sm:min-w-[250px]
                  ${!pdfExists || isLoading
                    ? 'border-white/10 text-white/40 cursor-not-allowed'
                    : 'border-primary text-primary hover:bg-primary/10 hover:border-primary/70 hover:text-primary/90'
                  }
                `}
                aria-label="View resume PDF in new window"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View PDF
              </button>
            </div>

            {pdfExists && fileInfo && (
              <div className="p-4 sm:p-6 bg-green-500/10 backdrop-blur-sm rounded-xl border border-green-500/30">
                <div className="flex items-center justify-center text-green-400 mb-3">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-base sm:text-lg">Resume file is ready for download</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-4">
                  <div className="bg-black-main/50 rounded-lg p-3 border border-white/5">
                    <div className="font-medium text-white text-sm sm:text-base">File Name</div>
                    <div className="text-white/60 text-xs sm:text-sm">Mariam_Kanj_CV.pdf</div>
                  </div>
                  <div className="bg-black-main/50 rounded-lg p-3 border border-white/5">
                    <div className="font-medium text-white text-sm sm:text-base">File Size</div>
                    <div className="text-white/60 text-xs sm:text-sm">{fileInfo.size}</div>
                  </div>
                  <div className="bg-black-main/50 rounded-lg p-3 border border-white/5">
                    <div className="font-medium text-white text-sm sm:text-base">Last Updated</div>
                    <div className="text-white/60 text-xs sm:text-sm">{fileInfo.lastModified}</div>
                  </div>
                </div>
              </div>
            )}

            {!pdfExists && !error && (
              <div className="text-center py-8">
                <div className="animate-pulse text-yellow-400 text-lg">
                  🔍 Checking file availability...
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}