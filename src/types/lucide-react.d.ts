declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }
  
  export type Icon = FC<IconProps>;
  
  // Экспорт всех иконок как Icon
  export const Phone: Icon;
  export const Mail: Icon;
  export const MessageCircle: Icon;
  export const Send: Icon;
  export const Menu: Icon;
  export const X: Icon;
  export const User: Icon;
  export const PenTool: Icon;
  export const Briefcase: Icon;
  export const FileText: Icon;
  export const ClipboardList: Icon;
  export const Settings: Icon;
  export const Package: Icon;
  export const Scissors: Icon;
  export const Wrench: Icon;
  export const Sparkles: Icon;
  export const Image: Icon;
  export const Award: Icon;
  export const Crown: Icon;
  export const Heart: Icon;
  export const Instagram: Icon;
  export const Facebook: Icon;
  export const ChevronLeft: Icon;
  export const ChevronRight: Icon;
  export const Star: Icon;
  export const MapPin: Icon;
  export const Clock: Icon;
  export const ArrowRight: Icon;
}
