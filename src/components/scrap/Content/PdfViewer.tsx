import 'react-pdf/dist/esm/Page/TextLayer.css';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import useWindowSize from '@/application/hooks/common/useWindowSize';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface Props {
  src: string;
  onClick?: () => void;
}
export const PdfViewer = ({ src, onClick }: Props) => {
  const [numPages, setNumPages] = useState(0);
  const windowSize = useWindowSize();

  const handleDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  return (
    <Document file={src} onLoadSuccess={handleDocumentLoadSuccess}>
      {Array.from(new Array(numPages), (_, index) => (
        <Page
          width={windowSize.width}
          height={windowSize.height}
          key={index}
          pageNumber={index + 1}
          renderAnnotationLayer={false}
          onClick={onClick}
        />
      ))}
    </Document>
  );
};
