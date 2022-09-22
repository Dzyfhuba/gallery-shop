import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ArticleFactory from 'Database/factories/ArticleFactory'
import ServiceFactory from 'Database/factories/ServiceFactory'
import About from './About'
import UserSeeder from './UserSeeder'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await (new UserSeeder(this.client)).run()
    await (new About(this.client)).run()
    ArticleFactory.createMany(20)
    ServiceFactory.createMany(20)
  }
}
