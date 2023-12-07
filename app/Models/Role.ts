import { column } from '@ioc:Adonis/Lucid/Orm'
import Model from './Model'

export default class Role extends Model {
  @column({ isPrimary: true })
  public id: string

  @column()
  public key: string

  @column()
  public title: string

  @column()
  public content?: string | null

  @column()
  public modelType?: string | null
  @column()
  public modelId?: string | null

}
