// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from '@ioc:Adonis/Lucid/Database'
import moment from 'moment'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'

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
      })
    } catch (e){
      return response.send({
        error: true,
        status: 'failed',
        message: 'Registration has failed',
        errorMessage: e,
      })
    }
  }

  public async login ({auth, request, response}) {
    try {
      await auth.use('api').check()

      if (auth.use('api').isLoggedIn) {
        return response.send({
          error: false,
          status: 'success',
          message: 'You have logged in',
        })
      }

      const { email, password } = request.body()

      const user = await User
        .query()
        .where('email', email)
        .firstOrFail()

      if (!(await Hash.verify(user.password, password))) {
        return response.unauthorized('Invalid credentials')
      }

      const token = await auth.use('api').generate(user)

      return response.send({
        error: false,
        status: 'success',
        message: 'Login has successfully',
        token,
      })
    } catch (e) {
      return response.send(e)
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
}
