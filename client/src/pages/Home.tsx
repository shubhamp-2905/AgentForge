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
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(152, 99, 255, 0.15) 0%, transparent 50%), 
                            radial-gradient(circle at 80% 80%, rgba(152, 99, 255, 0.1) 0%, transparent 50%)`
        }} />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
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

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10 bg-gradient-to-b from-secondary/30 to-secondary/5 section-gradient-bottom">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Hours Saved", value: "50k+" },
              { label: "Agents Deployed", value: "100+" },
              { label: "Tasks Automated", value: "1M+" },
              { label: "Client Satisfaction", value: "99%" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-xl glass-card">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-primary/80 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section id="solutions" className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6 text-white font-display font-black">Need Something <span className="gradient-text">Unique?</span></h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
                Off-the-shelf solutions rarely fit complex workflows. We specialize in custom architecture. Whether you need a proprietary LLM trained on your data or an autonomous agent swarm, we build it.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Custom LLM Fine-tuning & RAG",
                  "Multi-Agent Orchestration",
                  "Voice AI & Telephony Integration",
                  "Proprietary Data Security Protocols"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button 
                variant="outline"
                className="border-primary/50 text-white hover:bg-primary/10 h-12 px-8 rounded-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discuss Your Vision
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-secondary/30 border border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
                <BrainCircuit className="w-64 h-64 text-white/10 transition-colors duration-300" />
              </div>
            </div>
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
