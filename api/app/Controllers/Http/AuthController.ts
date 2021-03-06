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

  public async login ({auth, request, response}) {
    try {
      await auth.use('api').check()

      if (auth.use('api').isLoggedIn) {
        return response.send({
          error: false,
          status: 'warning',
          message: 'You have logged in',
        })
      }

      const { username, email, password } = request.body()

      let user = {
        password: '',
      }
      if(email){
        user = await User
          .query()
          .where('email', email)
          .firstOrFail()
      }

      if (username) {
        user = await User
          .query()
          .where('username', username)
          .firstOrFail()
      }

      if (!Object.keys(user).length) {
        return response.send({
          error: true,
          status: 'error',
          message: 'Login has failed',
        })
      }
      if (!(await Hash.verify(user.password, password))) {
        return response.send({
          error: true,
          status: 'error',
          message: 'Login has failed',
        })
      }

      const token = await auth.use('api').generate(user)

      return response.send({
        error: false,
        status: 'success',
        message: 'Login has successfully',
        user,
        auth,
        token,
      })
    } catch (e) {
      return response.send({
        error: true,
        status: 'error',
        message: 'Login has failed',
        e,
      })
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

  public async authCheck ({auth, response}) {
    try {
      await auth.use('api').authenticate()

      if (auth.use('api').user!) {
        return response.send({
          error: false,
          status: 'success',
          message: 'You have logged in',
          user: auth.use('api').user,
        })
      }

      return response.send({
        status: 'error',
        error: true,
        message: 'You are not logged in',
      })
    } catch (e) {
      return response.send({
        status: 'error',
        error: true,
        message: 'Somethings bad is happen',
        e ,
      })
    }
  }
}
