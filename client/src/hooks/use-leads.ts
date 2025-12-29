import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

/* ------------------------------------------------------------------
   FRONTEND CONFIG (NO @shared)
-------------------------------------------------------------------*/

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000";

const API_ROUTES = {
  createLead: {
    path: `${API_BASE_URL}/api/leads`,
    method: "POST",
  },
  createSubscriber: {
    path: `${API_BASE_URL}/api/subscribers`,
    method: "POST",
  },
};

/* ------------------------------------------------------------------
   FRONTEND TYPES (SAFE)
-------------------------------------------------------------------*/

export type InsertLead = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export type InsertSubscriber = {
  email: string;
};

/* ------------------------------------------------------------------
   HOOKS
-------------------------------------------------------------------*/

export function useCreateLead() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertLead) => {
      const res = await fetch(API_ROUTES.createLead.path, {
        method: API_ROUTES.createLead.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let message = "Failed to submit inquiry";

        try {
          const err = await res.json();
          message = err?.message || message;
        } catch {
          // ignore JSON parse errors
        }

        throw new Error(message);
      }

      return res.json();
    },

    onSuccess: () => {
      toast({
        title: "Message Sent",
        description:
          "We've received your inquiry and will be in touch shortly.",
      });
    },

    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });
}

export function useCreateSubscriber() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      const res = await fetch(API_ROUTES.createSubscriber.path, {
        method: API_ROUTES.createSubscriber.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let message = "Failed to subscribe";

        try {
          const err = await res.json();
          message = err?.message || message;
        } catch {
          // ignore JSON parse errors
        }

        throw new Error(message);
      }

      return res.json();
    },

    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
    },

    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });
}
