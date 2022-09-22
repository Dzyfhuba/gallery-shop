import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import About from './About'
import UserSeeder from './UserSeeder'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await (new UserSeeder(this.client)).run()
    await (new About(this.client)).run()
  }
}
