import { db } from "~/server/db";
import { type IRequestCreateUser } from "./IRequestCreateUser";
import { users } from "~/server/db/schema";

class CreateUserService {
  
  public async execute({
   ...user
  }: IRequestCreateUser) {
   const data = await db.insert(users).values(user).returning()


   return data
  }
}

export default CreateUserService;
