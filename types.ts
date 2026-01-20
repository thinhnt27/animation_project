export type StepLayout = 'split' | 'full-width-gallery' | 'horizontal-scroll';

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  imageUrl?: string; // Made optional
  gallery?: string[]; // Optional list of additional images for a carousel/slider
  alignLeft: boolean;
  layout?: StepLayout; // Defaults to 'split'
}