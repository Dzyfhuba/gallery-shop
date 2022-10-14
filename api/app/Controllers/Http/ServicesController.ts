import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Service from 'App/Models/Service'

export default class ServicesController {
  public async all ({response}) {
    try {
      const services = await Service
        .query()
        .orderBy('updated_at', 'desc')

      return response.send({
        error: false,
        status: 'success',
        data: services,
      })
    } catch (error) {
      return response.send({
        error: true,
        status: 'error',
        data: error,
      })
    }
  }

  public async show ({request, response}) {
    try {
      const { slug } = request.params()
      const service = await Service.findBy('slug', slug)

      return response.send({
        error: false,
        status: 'success',
        data: service,
      })
    } catch (error) {
      return response.send({
        error: true,
        status: 'error',
        data: error,
      })
    }
  }

  public async store ({request, response}) {
    try {
      const data = request.body()

      data.images = JSON.stringify(data.images)
      data.content = JSON.stringify(data.content)

      const service = await Service.create(data)

      return response.send({
        error: false,
        status: 'success',
        message: 'Article has been added',
        data: service,
      })
    } catch (error) {
      return response.send({
        error: true,
        status: 'error',
        message: 'Service has been failed to add',
        data: error,
      })
    }
  }

  public async destroy ({request, response}) {
    try {
      const {id} = request.params()
      const service = await Service.findOrFail(id)
      await service?.delete()

      return response.send({
        error: false,
        status: 'success',
        data: service,
      })
    } catch (error) {
      return response.send({
        error: true,
        status: 'error',
        data: error,
      })
    }
  }

  public async edit ({request, response}: HttpContextContract) {
    const {slug} = request.params()

    try {
      const service = await Service.findByOrFail('slug', slug)

      return response.status(200).json({
        error: false,
        status: 'success',
        data: {
          service,
        },
      })
    } catch (error) {
      return response.status(500).json({
        error: true,
        status: error,
        data: {
          error,
        },
      })
    }
  }

  public async update ({request, response}: HttpContextContract) {
    const body = request.body()
    try {
      body.images = JSON.stringify(body.images)
      body.content = JSON.stringify(body.content)
      const service = await Service.updateOrCreate({
        id: body.id,
      }, body)

      return response.status(201).json({
        error: false,
        status: 'success',
        data: {
          service,
        },
        message: 'Update success',
      })
    } catch (error) {
      return response.status(500).json({
        error: true,
        status: 'error',
        data: {
          error,
        },
        message: 'Update failed',
      })
    }
  }
}
