import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  Cpu,
  Twitter,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";

/* ------------------------------------------------------------------
   SCHEMA
-------------------------------------------------------------------*/

const insertSubscriberSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;

/* ------------------------------------------------------------------
   COMPONENT
-------------------------------------------------------------------*/

export function Footer() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<InsertSubscriber>({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: InsertSubscriber) {
    setIsPending(true);
    setIsSuccess(false);

    try {
      // Simulate API call or integrate with your email service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Integrate with your email service (Mailchimp, ConvertKit, etc.)
      console.log('Newsletter subscription:', data.email);
      
      setIsSuccess(true);
      form.reset();
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to subscribe:', error);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <footer className="bg-[#0f0518] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-white">
                AGENT<span className="text-primary">FORGE</span>
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building the next generation of intelligent automation.
              We craft AI agents that scale operations and transform business logic.
            </p>

            <div className="flex gap-4">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Mail, href: "#contact" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  onClick={(e) => {
                    if (href === "#contact") {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center
                             text-gray-400 hover:bg-primary hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/#about" },
                { name: "Automations", href: "/#automations" },
                { name: "Solutions", href: "/#solutions" },
                { name: "Contact", href: "/#contact" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("/#")) {
                        e.preventDefault();
                        const element = document.querySelector(item.href.substring(1));
                        element?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Security",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest insights on AI automation delivered to your inbox.
            </p>

            {isSuccess && (
              <div className="mb-3 p-2 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-xs">Subscribed!</span>
              </div>
            )}

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input
                            {...field}
                            placeholder="Enter your email"
                            className="bg-white/5 border-white/10 text-white
                                       placeholder:text-white/20
                                       focus:border-primary/50 text-sm h-10"
                          />

                          <Button
                            type="submit"
                            disabled={isPending}
                            className="premium-button-primary h-10 w-10 p-0 disabled:opacity-50"
                          >
                            {isPending ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <ArrowRight className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row
                        justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} AgentForge. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Made with ❤️ by Team AgentForge</span>
            <span>Pune, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}