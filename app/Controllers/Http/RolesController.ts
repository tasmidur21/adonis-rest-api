import Role from 'App/Models/Role'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class PostsController {
    public async index({ response }) {
        const roles = await Role.all()
        return response.ok(roles)
    }

    public async store({ request, response }) {
        const validationSchema = schema.create({
            title: schema.string({ trim: true }, [
                rules.maxLength(255)
            ]),
            key: schema.string({ trim: true }, [
                rules.maxLength(255)
            ]),
            content: schema.string({ escape: true }, [
                rules.maxLength(1000)
            ]),
        })

        const payload: any = await request.validate({ schema: validationSchema })
        const role: Role = await Role.create(payload)

        return response.ok(role)
    }

    public async show({ params, response }) {
        const { id }: { id: Number } = params

        const role: any = await Role.find(id)
        if (!role) {
            return response.notFound({ message: 'Role not found' })
        }

        return response.ok(role)
    }

    public async update({ request, params, response }) {
        const roleSchema = schema.create({
            title: schema.string({ trim: true }, [
                rules.maxLength(255)
            ]),
            content: schema.string({ escape: true }, [
                rules.maxLength(1000)
            ]),
        })

        const payload: any = await request.validate({ schema: roleSchema })

        const { id }: { id: Number } = params

        const role: any = await Role.find(id)
        if (!role) {
            return response.notFound({ message: 'Role not found' })
        }

        role.title = payload.title
        role.content = payload.content

        await role.save()

        return response.ok(role)
    }

    public async destroy({ params, response }) {
        const { id }: { id: Number } = params

        const role: any = await Role.find(id)
        if (!role) {
            return response.notFound({ message: 'Role not found' })
        }

        await role.delete()

        return response.ok({ message: 'Role deleted successfully.' })
    }
}