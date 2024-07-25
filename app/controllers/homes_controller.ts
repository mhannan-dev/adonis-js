import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'


export default class HomesController {

  public async index({ view, request  }: HttpContext) {
    const page = request.input('page', 2)
    const data= Post.query().paginate(page)
    return view.render('pages/frontend/welcome', data)
  }

  public async about({ view }: HttpContext) {

    const data = {
      title: 'About me',
      paragraph: 'Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma. Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma. Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma. Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.'
    }
    return view.render('pages/frontend/about', data)
  }

  public async services({ view }: HttpContext) {
    const data = {
      title: 'Our Services',
      paragraph: 'Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma. Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma. Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma. Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.'
    }
    return view.render('pages/frontend/services', data)
  }

  public async contact({ view }: HttpContext) {
    const data = {
      title: 'Contact'
    }
    return view.render('pages/frontend/contact', data)
  }

}
