/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
| The routes file is used for defining the HTTP routes.
*/

import router from '@adonisjs/core/services/router'

router.get('dashboard', '#controllers/dashboards_controller.dashboard').as('admin.dashboard')
router.get('users', '#controllers/dashboards_controller.users').as('admin.users')
router.get('summary', '#controllers/dashboards_controller.summary').as('admin.summary')
router.post('logout', '#controllers/dashboards_controller.logout').as('admin.logout')

