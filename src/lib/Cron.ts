import { scheduleJob } from "node-schedule";
import CreateUserService from "./services/CreateUserService";
import { type IRequestCreateUser } from "./services/IRequestCreateUser";

export class Cron {
  public start() {
    scheduleJob("*/1 * * * *", async () => {
      // TODO: Run job
      const  data  = await fetch("https://api.github.com/user/1")
      const post =  await data.json() as IRequestCreateUser
      const createNewClass = new CreateUserService()

      await  createNewClass.execute({
       ...post 
      })
    });
  }
}
