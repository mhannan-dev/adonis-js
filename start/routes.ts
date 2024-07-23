/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
| The routes file is used for defining the HTTP routes.
*/

import router from '@adonisjs/core/services/router'

router.get('', '#controllers/homes_controller.index').as('home.page')
router.get('about', '#controllers/homes_controller.about').as('about.page')
router.get('services', '#controllers/homes_controller.services').as('services.page')
router.any('contact', '#controllers/homes_controller.contact').as('contact.page')

router.get('blogs', '#controllers/blogs_controller.index').as('blog.index')

