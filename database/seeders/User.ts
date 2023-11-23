import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import { DateTime } from 'luxon';
import { v4 as uuidv4 } from "uuid";

export default class UserSeeder extends BaseSeeder {

  public async run() {

    // await User.createMany([
    // {
    //   email: `admin.${uuidv4()}.@admin.com`,
    //   password: '123456',
    // }
    // ])

    // const user = await User.findOrFail('3762b3b2-d1ee-4567-891e-d55ee5b1b8a0')
    // user.deletedAt = DateTime.local() // Luxon dateTime is used
    // await user.save()
    const user = new User()
    await user
      .fill({
        email: `admin.${uuidv4()}.we@admin.com`,
        password: '123456',
      })
      .save()

    //   await User
    //     .query()
    //     .where('id', '3762b3b2-d1ee-4567-891e-d55ee5b1b8a0')
    //     .update({ deletedAt: null })
    // }

  }
