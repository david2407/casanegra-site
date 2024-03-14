import { z, defineCollection } from "astro:content";

const sectionCollection = {
  section: defineCollection({
    schema: z.object({
      title: z.string(),
      order: z.number(),
      subSections: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          items: z
            .array(
              z.object({
                description: z.string(),
                value: z.string(),
              })
            )
            .optional(),
        })
      ),
    }),
  }),
};

export const collections = {
  section: sectionCollection,
};
