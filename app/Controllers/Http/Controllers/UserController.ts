import Utils from "App/Constants/Util";
import UserService from "../Services/UserService";

export default class UserController {
    public async index({ request,response }) {
        const users = await UserService.getAll(request)
        return response.ok(Utils.responseBuilder(users))
    }
    public async store({request}) {
        const validatedData=UserService.validation(request);
        return validatedData;
        // const users = await UserService.getAll(request)
        // return response.ok(Utils.responseBuilder(users))
    }
}