/*
  Astro Content Collections — definiert die Themen-Collection.
  Jede Markdown-Datei unter content/themen/ folgt diesem Schema.
*/
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const themen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/themen' }),
  schema: z.object({
    titel: z.string(),                          // Haupt-Title für H1 und Browser-Tab
    eyebrow: z.string(),                        // Kategorie über der Headline (z.B. "Betriebliche Altersvorsorge")
    headline: z.string(),                       // Editorial-Headline (mit *italic* für Brass-Akzent)
    lead: z.string(),                           // Intro-Absatz unter Headline
    kategorie: z.enum([
      'Corporate Benefits',          // bAV-Mitarbeiter, bKV, BGM, Company Benefits, Allianz MeGes
      'Versorgung Geschäftsführer',  // Direktzusage, U-Kasse, GGF-Versorgung, Vorstandsversorgung, Tantiemenmodell
      'Risikoschutz',                // D&O, VSH, Cyber, PKV
    ]),
    keywords: z.array(z.string()).optional(),   // SEO-Keywords
    paragraphen: z.array(z.string()).optional(),// Relevante § und Gesetze (z.B. "§ 6a EStG")
    stats: z.array(z.object({
      wert: z.string(),
      label: z.string(),
    })).optional(),                             // Optional: Stats-Boxen oben (max 4)
    sortierung: z.number().default(50),         // Reihenfolge in der Übersicht
    description: z.string(),                    // Meta-Description für SEO
  }),
});

export const collections = { themen };
