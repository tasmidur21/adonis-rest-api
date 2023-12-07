import Utils from "App/Constants/Util";
import User from "App/Models/User";
import { schema, rules,validator } from '@ioc:Adonis/Core/Validator'

export default class UserService{
    public static async getAll(request:any) {  
        let page=request.input('page',Utils.DEFAULT_PAGE);
        let limit=request.input('limit',Utils.DEFAULT_PAGE_LIMIT);
    
        let queryBuilder=User.query();

        queryBuilder.select([
            `id`,
            `username`,
            `user_type`,
            `user_type_id`,
            `email`,
            `phone`,
            `avatar`,
            `model_type`,
            `model_id`,
            `row_status`,
        ])

        if(request.input('page')){
            return await queryBuilder.paginate(page,limit);
        }
        return await queryBuilder;
    }

    public static create(){

    }

    public static async validation(request:any){
        const validationSchema={
            username: schema.string([
                rules.unique({ table: 'users', column: 'username' })
              ]),
            email: schema.string([
                rules.email(),
                rules.unique({ table: 'users', column: 'email' })
              ]),
            phone: schema.string([
                rules.regex(/^[a-zA-Z0-9]+$/)
            ]),
            password: schema.string.optional([
                rules.minLength(6)
            ]),
            avatar:schema.string.optional(),
            row_status: schema.enumSet.optional([
               Utils.ROW_STATUS_ACTIVE,
               Utils.ROW_STATUS_IN_ACTIVE,
               Utils.ROW_STATUS_PENDING
              ] as const)
          }
          return await validator.validate({
            reporter: validator.reporters.vanilla,
            schema:schema.create(validationSchema),
            data:request.body(),
            messages: {
                '*': (field, rule, arrayExpressionPointer, options) => {
                    return `${rule} validation error on ${field}`
                  }
                }
          })
    }
}