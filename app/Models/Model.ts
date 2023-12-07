import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";
import { compose } from '@ioc:Adonis/Core/Helpers'
import { SoftDeletes } from "@ioc:Adonis/Addons/LucidSoftDeletes";
import { v4 as uuidv4 } from "uuid";

export default class Model extends compose(BaseModel, SoftDeletes) {
    static boot() {
        super.boot()
        this.before("create", (model: any) => {  
            if (!model?.id) {
                model.id = uuidv4();
            }
        });
    }

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}