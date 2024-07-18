import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.text('content').notNullable()
      table.string('slug').notNullable().unique()
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps(true)

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

