import { DateTime } from 'luxon'
import { column } from '@ioc:Adonis/Lucid/Orm'
import Model from './Model'

export default class Role extends Model {
  @column({ isPrimary: true })
  public id: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
