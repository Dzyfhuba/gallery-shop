import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from '@ioc:Adonis/Lucid/Database'
import moment from 'moment'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'
import Logger from '@ioc:Adonis/Core/Logger'

export default class AuthController {
  public async register ({request, response}) {
    try{
      const body = request.body()

      body.created_at = moment().format('YYYY-MM-DD hh:mm:ss')
      body.updated_at = moment().format('YYYY-MM-DD hh:mm:ss')

      body.password = await Hash.make(body.password)

      await Database.table('users').insert(body)

      return response.send({
        error: false,
        status: 'success',
        message: 'Register has successfully',
        body,
      })
    } catch (e){
      return response.send({
        error: true,
        status: 'error',
        message: 'Registration has failed',
        errorMessage: e,
      })
    }
  }

  public async login ({auth, request, response}: HttpContextContract) {
    const {email, username, password} = request.body()
    Logger.info(JSON.stringify(request))
    try {
      const users = await User
        .query()
        .where('email', email || '')
        .orWhere('username', username || '')
        // .firstOrFail()
        // .catch(err => {
        //   response.unauthorized()
        //   return err
        // })

      if (!users.length) {
        return response.unauthorized()
      }

      const user = users[0]

      if (!(await Hash.verify(user.password, '' + password))) {
        return response.status(401).json({
          error: true,
          status: 'error',
          message: 'Invalid credentials or something',
        })
      }

      const token = await auth.use('api').generate(user)

      return response.ok(token.token)
    } catch (error) {
      return response.internalServerError(error)
    }
  }

  public async logout ({auth, response}) {
    await auth.use('api').revoke()
    return response.send({
      error: false,
      status: 'success',
      message: 'Logout has successfully',
    })
  }

  public async authCheck ({auth, response}: HttpContextContract) {
    try {
      await auth.use('api').check()
      if (!auth.use('api').isLoggedIn) {
        return response.unauthorized()
      }

      return response.ok(auth.use('api').user)
    } catch (error) {
      Logger.error(error)
      return response.json({
        error: true,
        status: 'error',
        data: error || 'error',
      })
    }
  }
}
