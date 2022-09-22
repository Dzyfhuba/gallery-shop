import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import About from 'App/Models/About'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await About.create({
      title: 'Alam Rohman Garden',
      address: 'Gresik',
      instagram: '@alamrohmangarden',
      email: 'alamrohmangarden@gmail.com',
      facebook: 'Alam Rohman Garden',
      profile_image: 'alamrohmangarden.png',
      phone: '081234567890',
      description: 'Alam Rohman Garden Gresik, deskripsi',
    })
  }
}
