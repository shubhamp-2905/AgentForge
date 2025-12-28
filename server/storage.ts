import { db } from "./db";
import {
  leads,
  subscribers,
  type InsertLead,
  type Lead,
  type InsertSubscriber,
  type Subscriber
} from "@shared/schema";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
}

export class DatabaseStorage implements IStorage {
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db.insert(leads).values(insertLead).returning();
    return lead;
  }

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const [subscriber] = await db.insert(subscribers).values(insertSubscriber).returning();
    return subscriber;
  }
}

export const storage = new DatabaseStorage();
