import type { HttpContext } from '@adonisjs/core/http'

export default class HomesController {

  public async index({ view }: HttpContext) {
    return view.render('pages/welcome')
  }

  async blogs({}: HttpContext) {}

  async blogDetails({}: HttpContext) {}

  async banners({}: HttpContext) {}

}
