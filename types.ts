export type ToolID = 
  | 'merge-pdf' 
  | 'split-pdf' 
  | 'compress-pdf' 
  | 'pdf-to-word' 
  | 'word-to-pdf' 
  | 'jpg-to-pdf' 
  | 'pdf-to-jpg' 
  | 'rotate-pdf' 
  | 'protect-pdf' 
  | 'unlock-pdf'
  | 'pdf-to-excel'
  | 'excel-to-pdf'
  | 'pdf-to-pptx'
  | 'pptx-to-pdf'
  | 'watermark'
  | 'page-numbers'
  | 'repair-pdf';

export interface PDFTool {
  id: ToolID;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  color: string;
  seoTitle: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
}

export interface ProcessingState {
  status: 'idle' | 'uploading' | 'processing' | 'completed' | 'error';
  progress: number;
  message: string;
  downloadUrl?: string;
  error?: string;
}