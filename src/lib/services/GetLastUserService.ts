import { db } from "~/server/db";

class GetLastUserService {
  
  public async execute() {
   const data = await db.query.users.findFirst(
    {orderBy: (posts, { desc }) => [desc(posts.createdAt)],}
   )


   return data
  }
}

export default GetLastUserService;
