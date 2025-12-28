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
  const services = [
    {
      icon: Bot,
      title: "Support Agents",
      description: "24/7 intelligent customer support agents that learn from your knowledge base and handle complex queries with human-like empathy."
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Automated pipelines that process, clean, and analyze vast datasets to extract actionable business intelligence in real-time."
    },
    {
      icon: MessageSquareText,
      title: "Content Generation",
      description: "Scale your marketing with AI that generates SEO-optimized articles, social posts, and email campaigns in your brand voice."
    },
    {
      icon: BrainCircuit,
      title: "Workflow Automation",
      description: "Custom n8n and Zapier integrations powered by LLMs to connect your disparate tools and automate repetitive manual tasks."
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
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
              Build the Future with <br />
              <span className="text-primary">Intelligent Agents</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              We engineer custom AI automation systems that scale your business, reduce costs, and work while you sleep.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/80 text-white px-8 h-14 rounded-lg text-lg shadow-lg transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Automating <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/50 text-white hover:bg-primary/5 h-14 px-8 rounded-lg text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Hours Saved", value: "50k+" },
              { label: "Agents Deployed", value: "100+" },
              { label: "Tasks Automated", value: "1M+" },
              { label: "Client Satisfaction", value: "99%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-primary text-sm uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We don't just use AI; we build sophisticated systems that solve real business problems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section id="solutions" className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Need Something <span className="text-primary">Unique?</span></h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about our process.</p>
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
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Automate?</h2>
            <p className="text-gray-400 text-lg">
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
