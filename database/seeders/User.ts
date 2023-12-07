import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
export default class UserSeeder extends BaseSeeder {

  public async run() {

    await User.createMany([
      {
        username: `admin@admin.com`,
        email: `admin@admin.com`,
        phone: `01767000234`,
        password: '123456',
      },
      {
        username: `superadmin@admin.com`,
        email: `superadmin@admin.com`,
        phone: `01767000235`,
        password: '123456',
      }
    ])
 
}
}
