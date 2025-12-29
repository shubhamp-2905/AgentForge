import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative h-full">
      <div className="relative h-full glass-card p-8 rounded-2xl flex flex-col overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300">
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all duration-300" />
        
        <div className="w-16 h-16 bg-gradient-to-br from-primary/40 to-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-primary/50 group-hover:border-primary/80 group-hover:bg-primary/30 transition-all duration-300">
          <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        <h3 className="text-lg font-bold mb-3 text-white font-display group-hover:text-primary/90 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed flex-1 group-hover:text-gray-200 transition-colors duration-300 font-light mb-6">
          {description}
        </p>

        <button className="w-full px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group/btn">
          <span className="flex items-center justify-center gap-2">
            View Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </div>
  );
}