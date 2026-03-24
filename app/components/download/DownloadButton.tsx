import { LoadingSpinner, MarkdownIcon, PdfIcon } from '@/app/components/ui/Icon';
import type { DownloadButtonProps } from '@/types';

export const DownloadButton = ({ type, lang, isLoading, onClick }: DownloadButtonProps) => {
  const isPdf = type === 'pdf';
  const isEn = lang === 'en';
  const baseClasses = "flex items-center justify-center gap-2 px-6 py-3 text-white font-medium rounded-lg shadow-md transition-colors duration-200 w-[280px]";
  const colorClasses = isPdf
    ? "bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300"
    : "bg-slate-500 hover:bg-slate-600 disabled:bg-slate-300";

  const label = isEn
    ? (isPdf ? 'Download PDF (EN)' : 'Download Markdown (EN)')
    : (isPdf ? 'PDFをダウンロード' : 'Markdownをダウンロード');

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`${baseClasses} ${colorClasses}`}
    >
      {isLoading ? (
        <>
          <LoadingSpinner />
          <span>{isEn ? 'Downloading...' : 'ダウンロード中...'}</span>
        </>
      ) : (
        <>
          {isPdf ? <PdfIcon /> : <MarkdownIcon />}
          <span>{label}</span>
        </>
      )}
    </button>
  );
};
