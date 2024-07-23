import type { HttpContext } from '@adonisjs/core/http'

export default class BlogsController {

  public async index({ view }: HttpContext) {
    return view.render('pages/frontend/blog/index')
  }

}
