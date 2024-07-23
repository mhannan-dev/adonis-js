import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardsController {

  public async dashboard({ view }: HttpContext) {
    return view.render('pages/backend/dashboard')
  }
}
