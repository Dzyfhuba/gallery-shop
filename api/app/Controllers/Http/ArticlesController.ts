import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from 'App/Models/Article'

export default class ArticlesController {
  public async all ({response}) {
    try {
      const articles = await Article.query().orderBy('updated_at', 'desc')

      return response.send({
        error: false,
        status: 'success',
        data: articles,
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

      const article = await Article.create(data)

      return response.send({
        error: false,
        status: 'success',
        message: 'Article has been added',
        data: article,
      })
    } catch (e) {
      return response.send({
        error: true,
        status: 'success',
        message: 'Article has been failed to add',
        data: e,
      })
    }
  }

  public async show ({request, response}) {
    try {
      const { slug } = request.params()
      const article = await Article.findBy('slug', slug)

      return response.send({
        error: false,
        status: 'success',
        data: article,
      })
    } catch (error) {
      return response.send({
        error: true,
        status: 'error',
        data: error,
      })
    }
  }

  public async destroy ({request, response}) {
    try {
      const {id} = request.params()
      const article = await Article.findOrFail(id)
      await article?.delete()

      return response.send({
        error: false,
        status: 'success',
        data: article,
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
      const article = await Article.findByOrFail('slug', slug)

      return response.status(200).json({
        error: false,
        status: 'success',
        data: {
          article,
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
      const article = await Article.updateOrCreate({
        id: body.id,
      }, body)

      return response.status(201).json({
        error: false,
        status: 'success',
        data: {
          article,
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
