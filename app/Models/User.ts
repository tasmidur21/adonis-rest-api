import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import Model from './Model'
import { DateTime } from 'luxon'


export default class User extends Model {
  @column({ isPrimary: true })
  public id: string
  @column()
  public username: string
  @column()
  public userType: string
  @column()
  public userTypeId?: string | null
  @column()
  public email?: string | null
  @column()
  public phone?: string | null
  @column()
  public verificationType?: string | null
  @column()
  public verificationCode?: string | null
  @column.dateTime({ autoCreate: false })
  public verifiedAt?: DateTime | null
  @column()
  public avatar?: string | null
  @column()
  public modelType?: string | null
  @column()
  public modelId?: string | null
  @column({ serializeAs: null })
  public password?: string | null
  @column({ serializeAs: null })
  public rememberMeToken?: string | null

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty?.password) {
      user.password = await Hash.make(user?.password??"")
    }
  }
}
