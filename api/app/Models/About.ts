import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class About extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public profile_image: string

  @column()
  public description: string

  @column()
  public phone: string

  @column()
  public address: string

  @column()
  public email: string

  @column()
  public facebook: string

  @column()
  public instagram: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
