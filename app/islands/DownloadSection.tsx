import { useState } from 'hono/jsx';
import { DownloadButton } from '@/app/components/download/DownloadButton';

type DownloadKey = 'markdown-ja' | 'pdf-ja' | 'markdown-en' | 'pdf-en';

export default function DownloadSection() {
  const [isDownloading, setIsDownloading] = useState<DownloadKey | null>(null);

  const handleDownload = async (key: DownloadKey) => {
    setIsDownloading(key);

    try {
      const fileNames: Record<DownloadKey, string> = {
        'markdown-ja': 'README.md',
        'pdf-ja': 'README.pdf',
        'markdown-en': 'README.en.md',
        'pdf-en': 'README.en.pdf',
      };
      const fileName = fileNames[key];
      const url = `${__BASE_PATH__}${fileName}`;

      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(null);
    }
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center mb-8">
      <div className="flex flex-col sm:flex-row gap-3">
        <DownloadButton
          type="markdown"
          lang="ja"
          isLoading={isDownloading === 'markdown-ja'}
          onClick={() => handleDownload('markdown-ja')}
        />
        <DownloadButton
          type="pdf"
          lang="ja"
          isLoading={isDownloading === 'pdf-ja'}
          onClick={() => handleDownload('pdf-ja')}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <DownloadButton
          type="markdown"
          lang="en"
          isLoading={isDownloading === 'markdown-en'}
          onClick={() => handleDownload('markdown-en')}
        />
        <DownloadButton
          type="pdf"
          lang="en"
          isLoading={isDownloading === 'pdf-en'}
          onClick={() => handleDownload('pdf-en')}
        />
      </div>
    </div>
  );
}
