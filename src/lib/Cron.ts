import { scheduleJob } from "node-schedule";
import CreateUserService from "./services/CreateUserService";
import { type IRequestCreateUser } from "./services/IRequestCreateUser";
import GetLastUserService from "./services/GetLastUserService";

export class Cron {
  public start() {
    scheduleJob("*/1 * * * *", async () => {
      // TODO: Run job
      const createNewClass = new CreateUserService()
      const getLastUser = new GetLastUserService()
      const lastUser = await getLastUser.execute()
     
      let id = 1
      
      if(lastUser){
        id = lastUser?.id + 1
      }
      
     
      const  data  = await fetch(`https://api.github.com/user/${id}`)
      const post =  await data.json() as IRequestCreateUser
      

      await  createNewClass.execute({
       ...post 
      })
    });
  }
}
