import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'

import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Post from './post.js'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare slug: string

  @column()
  declare status: boolean

  @hasMany(() => Post)
  declare posts: HasMany<typeof Post>
}
