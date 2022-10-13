import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import About from 'App/Models/About'

export default class AboutsController {
  public async index ({}: HttpContextContract) {}

  public async create ({}: HttpContextContract) {}

  public async store ({}: HttpContextContract) {}

  public async show ({}: HttpContextContract) {}

  public async edit ({request, response}: HttpContextContract) {
    const {id} = request.params()
    try {
      const about = await About.findOrFail(id)

      return response.ok(about)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async update ({request, response}: HttpContextContract) {
    const {id} = request.params()
    const body = request.body()
    try {
      const about = await About.updateOrCreate({id}, body)

      return response.created(about)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async destroy ({}: HttpContextContract) {}
}
