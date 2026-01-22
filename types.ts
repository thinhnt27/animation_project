export interface SubSection {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export type StepLayout = 'split' | 'full-width-gallery' | 'horizontal-scroll' | 'text-only';

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  imageUrl?: string;
  gallery?: string[];
  alignLeft: boolean;
  layout?: StepLayout;
  subSections?: SubSection[]; // New: Optional list of sub-sections for a step
}