import { 
  Bot, 
  Database, 
  MessageSquareText, 
  BrainCircuit, 
  ArrowRight, 
  CheckCircle2
} from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function Home() {
  const automations = [
    {
      icon: Bot,
      title: "Lead Qualification Agent",
      description: "Automatically qualify and score incoming leads with intelligent conversation flows."
    },
    {
      icon: MessageSquareText,
      title: "AI Review & Reputation Management",
      description: "Monitor, analyze, and respond to reviews across platforms with AI-powered insights."
    },
    {
      icon: Database,
      title: "Customer Support Agent",
      description: "24/7 AI-powered support handling complex customer inquiries with human-like empathy."
    },
    {
      icon: BrainCircuit,
      title: "AI HR Resume Screening Agent",
      description: "Instantly analyze resumes and identify top candidates matching your job requirements."
    },
    {
      icon: Bot,
      title: "AI Receptionist",
      description: "Intelligent voice and chat receptionist handling calls, bookings, and inquiries seamlessly."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a custom agent?",
      answer: "Simple agents can be deployed in as little as 48 hours. Complex enterprise solutions typically take 2-4 weeks for development, testing, and refinement."
    },
    {
      question: "Do I need technical knowledge to use your agents?",
      answer: "Not at all. We build user-friendly interfaces and provide comprehensive documentation. If you can use a chat app, you can manage our agents."
    },
    {
      question: "Is my data secure?",
      answer: "Security is our top priority. We use enterprise-grade encryption, private LLM instances where required, and never use your sensitive data to train public models."
    },
    {
      question: "What platforms can you integrate with?",
      answer: "We connect with virtually everything: Slack, Discord, Salesforce, HubSpot, Notion, Google Workspace, and any platform with a REST API."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-background relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
        {/* Multi-layer background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-background to-primary/15" />
        
        {/* Dark grid overlay */}
        <div className="absolute inset-0 dark-grid-pattern opacity-60" />
        
        {/* Radial gradients */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `radial-gradient(circle at 15% 40%, rgba(152, 99, 255, 0.2) 0%, transparent 45%), 
                            radial-gradient(circle at 85% 75%, rgba(152, 99, 255, 0.15) 0%, transparent 45%)`
        }} />
        
        {/* Animated blur orbs */}
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        
        {/* Accent line elements */}
        <div className="absolute top-1/3 left-0 w-96 h-1 bg-gradient-to-r from-primary/20 to-transparent opacity-40" />
        <div className="absolute bottom-1/3 right-0 w-96 h-1 bg-gradient-to-l from-primary/20 to-transparent opacity-40" />
        
        <div className="container mx-auto px-4 hero-content text-center">
          <div>
            <h1 className="mb-8 leading-tight text-white font-display font-black">
              Build the Future with <br />
              <span className="gradient-text">Intelligent Agents</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              We engineer custom AI automation systems that scale your business, reduce costs, and work while you sleep.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                className="premium-button-primary text-white px-10 py-4 text-lg font-bold min-w-64 sm:min-w-fit"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center justify-center gap-2">
                  Start Automating <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              <button 
                className="premium-button-outline text-white px-10 py-4 text-lg font-bold min-w-64 sm:min-w-fit"
                onClick={() => document.getElementById('automations')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Automations
              </button>
            </div>
          </div>
        </div>
      </section>

      
      

      {/* About Us Section */}
      <section id="about" className="py-32 relative bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
                  <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Next-Gen AI Solutions</span>
          </div>
          <h2 className="mb-6 text-white font-display font-black text-4xl md:text-5xl">
            About <span className="gradient-text">AgentForge</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            We're pioneers in AI-powered automation, building intelligent systems that transform how businesses operate and scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
              <Bot className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Our Mission</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white font-display leading-tight">
              Empowering Businesses with <span className="gradient-text">Intelligent Automation</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              We empower businesses to harness the power of AI by building custom automation agents. No more manual workflows, no more repetitive tasks—just intelligent systems that scale with your business.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              From lead qualification to customer support, we architect AI solutions that work 24/7 to drive growth and efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-white">10x Productivity</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <ArrowRight className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-white">24/7 Operation</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 - Custom AI Agents */}
            <div className="group glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 bg-gradient-to-br from-white/5 to-white/0">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                  <Bot className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-2 text-lg">Custom AI Agents</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Tailored solutions designed for your specific workflows. Each agent is trained on your data and optimized for your business processes.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Enterprise Security */}
            <div className="group glass-card p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 bg-gradient-to-br from-white/5 to-white/0">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                  <Database className="w-7 h-7 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-2 text-lg">Enterprise Security</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Your data stays secure with encrypted, private deployments. Bank-level security with full compliance guarantees.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Advanced Intelligence */}
            <div className="group glass-card p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 bg-gradient-to-br from-white/5 to-white/0">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                  <BrainCircuit className="w-7 h-7 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-2 text-lg">Advanced Intelligence</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Powered by cutting-edge LLMs and proprietary algorithms. Continuous learning ensures peak performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Seamless Integration */}
            <div className="group glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 bg-gradient-to-br from-white/5 to-white/0">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/30 to-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                  <MessageSquareText className="w-7 h-7 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-2 text-lg">Seamless Integration</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Connect with your existing tools and platforms. Deploy in hours, not months, with minimal disruption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Automations Section */}
      {/* Automations Section */}
<section id="automations" className="py-32 relative section-gradient-top">
  <div className="absolute inset-0 light-grid-pattern pointer-events-none" />
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-16">
      <h2 className="mb-4 text-white font-display font-black">Complex Workflows <span className="gradient-text">Automated</span></h2>
      <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
        We automate sophisticated business processes. Choose from proven automation templates or we'll build a custom solution tailored to your needs.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
      {automations.map((automation, index) => (
        <ServiceCard key={index} {...automation} delay={index * 0.1} />
      ))}
    </div>
  </div>
</section>

      {/* Custom Solutions Section */}
     <section id="solutions" className="py-32 relative overflow-hidden">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
  <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Bot className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Custom Solutions</span>
        </div>
        
        <h2 className="mb-6 text-white font-display font-black text-4xl md:text-5xl leading-tight">
          Need Something <span className="gradient-text">Unique?</span>
        </h2>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
          Off-the-shelf solutions rarely fit complex workflows. We specialize in custom architecture. Whether you need a proprietary LLM trained on your data or an autonomous agent swarm, we build it.
        </p>
        
        <div className="space-y-4 mb-10">
          {[
            "Custom LLM Fine-tuning & RAG",
            "Multi-Agent Orchestration",
            "Voice AI & Telephony Integration",
            "Proprietary Data Security Protocols"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 group">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-white font-medium">{item}</span>
            </div>
          ))}
        </div>

        <Button 
          variant="outline"
          className="border-primary/50 text-white hover:bg-primary/10 hover:border-primary h-12 px-8 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Discuss Your Vision
        </Button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-2xl" />
        <div className="relative rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm">
          <img 
            src="/image.png" 
            alt="AI Automation Illustration" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Stats Section */}

   <section className="py-24 relative overflow-hidden border-y border-white/10">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-primary/5 to-secondary/30" />
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse" />
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
        Why Choose <span className="gradient-text">AgentForge</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Built on cutting-edge AI technology to deliver unmatched automation capabilities
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { 
          icon: "🤖",
          value: "24/7", 
          label: "Always Active",
          description: "Agents work around the clock"
        },
        { 
          icon: "⚡",
          value: "10x", 
          label: "Faster Execution",
          description: "Lightning-speed automation"
        },
        { 
          icon: "🎯",
          value: "100%", 
          label: "Custom-Built",
          description: "Tailored to your needs"
        },
        { 
          icon: "🔒",
          value: "Enterprise", 
          label: "Grade Security",
          description: "Bank-level protection"
        },
      ].map((stat, i) => (
        <div 
          key={i} 
          className="group relative"
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          <div className="relative h-full p-8 rounded-2xl glass-card border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center">
            {/* Icon */}
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            
            {/* Value */}
            <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              {stat.value}
            </div>
            
            {/* Label */}
            <div className="text-white font-bold text-lg mb-2">
              {stat.label}
            </div>
            
            {/* Description */}
            <div className="text-gray-400 text-sm">
              {stat.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-black/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 font-display font-black">Frequently Asked Questions</h2>
            <p className="text-gray-400 font-light">Everything you need to know about our process.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 bg-white/5 rounded-xl px-4 overflow-hidden">
                <AccordionTrigger className="text-white hover:text-primary hover:no-underline py-4 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative section-gradient-top">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="mb-4 font-display font-black">Ready to Automate?</h2>
            <p className="text-gray-400 text-lg font-light">
              Fill out the form below and our AI consultants will reach out within 24 hours.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
