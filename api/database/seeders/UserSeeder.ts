import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        name: 'Alam Rohman Garden',
        email: 'alamrohmangarden@gmail.com',
        username: 'alamrohmangarden',
        password: '12345678',
      },
      {
        name: 'Hafidz Ubaidillah',
        email: 'uba21id@gmail.com',
        username: 'ubaidillah',
        password: 'plmoknijb',
      },
    ])
  }
}
