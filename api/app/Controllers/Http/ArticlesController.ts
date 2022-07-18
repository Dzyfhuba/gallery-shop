// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Article from 'App/Models/Article'

export default class ArticlesController {
  public async all ({response}) {
    try {
      const articles = await Article.all()

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
}
