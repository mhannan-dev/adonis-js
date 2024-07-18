import Post from '#models/post'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Post.createMany([
      {
        title: 'The Future of AI',
        content: 'Content about AI...',
        slug: 'the-future-of-ai',
        categoryId: 1,
      },
      {
        title: 'Healthy Eating Tips',
        content: 'Content about healthy eating...',
        slug: 'healthy-eating-tips',
        categoryId: 2,
      },
      {
        title: 'Investing in 2024',
        content: 'Content about investing...',
        slug: 'investing-in-2024',
        categoryId: 3
      }
    ])
  }
}
