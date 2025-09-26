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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkPdfExists = async () => {
      try {
        const response = await fetch(PDF_PATH, { method: 'HEAD' });

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
      const headResponse = await fetch(PDF_PATH, { method: 'HEAD' });

      if (!headResponse.ok) {
        throw new Error(`Resume file not available (HTTP ${headResponse.status})`);
      }

      const response = await fetch(PDF_PATH);

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
    window.open(PDF_PATH, '_blank', 'noopener,noreferrer');
  };

  const handleRetry = () => {
    setError(null);
    const checkPdf = async () => {
      const response = await fetch(PDF_PATH, { method: 'HEAD' });
      setPdfExists(response.ok);
    };
    checkPdf();
  };

  return (
    <div className="flex-grow bg-slate-50 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 min-h-screen relative overflow-hidden">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}
      </style>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float animation-delay-2000"></div>

      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          <header className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Mariam Kanj - Resume
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-2">Full-Stack Web Developer</p>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 mx-auto rounded-full mb-4"></div>
            <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto px-2">
              Results-driven Computer Science graduate with hands-on experience in full-stack web development,
              mobile app development, and data analysis.
            </p>
          </header>

          <div className="w-full p-6 sm:p-8 lg:p-12 bg-white rounded-2xl shadow-sm border border-gray-200 hover-lift mb-6">

            {error && (
              <div className="mb-8 p-4 sm:p-6 bg-red-50 border border-red-200 rounded-xl">
                <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left mb-3">
                  <svg className="w-6 h-6 text-red-500 mr-0 sm:mr-3 mb-2 sm:mb-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-red-800 font-semibold text-lg">Download Error</span>
                </div>
                <p className="text-red-700 text-center mb-4">{error}</p>
                <div className="flex justify-center">
                  <button
                    onClick={handleRetry}
                    className="px-6 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition font-medium cursor-pointer"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}

            {isLoading && (
              <div className="mb-8 flex justify-center">
                <div className="inline-flex flex-col sm:flex-row items-center px-4 sm:px-8 py-4 bg-violet-50 rounded-xl border border-violet-200 text-center sm:text-left">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-violet-600 mr-0 sm:mr-4 mb-2 sm:mb-0"></div>
                  <div>
                    <div className="text-violet-800 font-semibold text-sm sm:text-base">Preparing your download...</div>
                    <div className="text-violet-600 text-xs sm:text-sm">This may take a moment</div>
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
                  w-full lg:w-auto min-w-[200px] sm:min-w-[250px] cursor-pointer
                  ${isLoading || !pdfExists
                    ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                    : 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95'
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
                  px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 border-2
                  w-full lg:w-auto min-w-[200px] sm:min-w-[250px] cursor-pointer
                  ${!pdfExists || isLoading
                    ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                    : 'border-violet-600 text-violet-600 hover:bg-violet-50 hover:border-violet-700 hover:text-violet-700'
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
              <div className="p-4 sm:p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-center justify-center text-green-700 mb-3">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold text-base sm:text-lg">Resume file is ready for download</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-green-600 mt-4">
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="font-medium text-sm sm:text-base">File Name</div>
                    <div className="text-xs sm:text-sm">Mariam_Kanj_CV.pdf</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="font-medium text-sm sm:text-base">File Size</div>
                    <div className="text-xs sm:text-sm">{fileInfo.size}</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <div className="font-medium text-sm sm:text-base">Last Updated</div>
                    <div className="text-xs sm:text-sm">{fileInfo.lastModified}</div>
                  </div>
                </div>
              </div>
            )}

            {!pdfExists && !error && (
              <div className="text-center py-8">
                <div className="animate-pulse text-yellow-600 text-lg">
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