import Category from '#models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Category.createMany([
      {
        title: 'Web Development',
        slug: 'web-development'
      },
      {
        title: 'Health',
        slug: 'health'
      },
      {
        title: 'Finance',
        slug: 'finance'
      }
    ])
  }
}
