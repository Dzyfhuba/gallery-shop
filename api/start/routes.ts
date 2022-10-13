/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
Route.post('/logout', 'AuthController.logout')
Route.get('/auth/check', 'AuthController.authCheck')

Route.get('/article', 'ArticlesController.all')
Route.post('/article', 'ArticlesController.store')
Route.get('/article/:slug', 'ArticlesController.show')
Route.put('/article', 'ArticlesController.update')
Route.get('/article/:slug/edit', 'ArticlesController.edit')
Route.delete('/article/:id', 'ArticlesController.destroy')

Route.get('/service', 'ServicesController.all')
Route.get('/service/:slug', 'ServicesController.show')
Route.post('/service', 'ServicesController.store')
Route.put('/service', 'ServicesController.update')
Route.get('/service/:slug/edit', 'ServicesController.edit')
Route.delete('/service/:id', 'ServicesController.destroy')

Route.resource('/about', 'AboutsController')
