import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser';
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Loader2, Send, CheckCircle2 } from "lucide-react";


const insertLeadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type InsertLead = z.infer<typeof insertLeadSchema>;

/* ------------------------------------------------------------------
   COMPONENT
-------------------------------------------------------------------*/

export function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(data: InsertLead) {
  setIsPending(true);
  setIsSuccess(false);

  try {
    // Get from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      company: data.company || 'Not provided',
      message: data.message,
      to_name: 'AgentForge Team',
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    
    setIsSuccess(true);
    form.reset();
    
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  } catch (error: any) {
    console.error('Failed to send email:', error);
    alert(`Failed to send message: ${error.text || 'Please try again'}`);
  } finally {
    setIsPending(false);
  }
}

  return (
    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden border-2 border-primary/30">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="mb-8">
        <h3 className="text-3xl font-bold text-white mb-2 font-display">
          Get in <span className="gradient-text">Touch</span>
        </h3>
        <p className="text-gray-300 font-light">
          Ready to automate your future? Let&apos;s discuss your custom AI solution.
        </p>
      </div>

      {/* Success Message */}
      {isSuccess && (
        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <p className="text-green-400 font-medium">Message sent successfully! We'll get back to you soon.</p>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      {...field}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">
                  Company (Optional)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Acme Inc."
                    {...field}
                    value={field.value || ""}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your automation needs..."
                    {...field}
                    className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20 resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isPending}
            className="premium-button-primary w-full mt-4 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      </Form>
    </div>
  );
}