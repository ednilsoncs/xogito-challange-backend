import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { users } from "~/server/db/schema";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ 
      name: z.string().min(1), 
      avatar_url: z.string(),
      company: z.string(),
      location: z.string(),
      email: z.string().nullable(),
      followers: z.number(),
      following: z.number()
    }))
    
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(users).values({
        name: input.name,
        avatar_url: input.avatar_url,
        company: input.company,
        location: input.location,
        email: input.email,
        followers: input.followers,
        following: input.following,

      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.users.findFirst({
      orderBy: (user, { desc }) => [desc(user.createdAt)],
    });
  }),
});
