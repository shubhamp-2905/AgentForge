import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-primary/0 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative h-full glass-card p-8 rounded-xl flex flex-col overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10 group-hover:bg-primary/20 transition-all duration-300" />
        
        <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/40 group-hover:border-primary/60 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed flex-1 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
