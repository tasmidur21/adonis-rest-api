import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('username', 255).notNullable().unique()
      table.string('user_type', 255).defaultTo("GENERAL")
      table.uuid('user_type_id').nullable()
      table.string('email', 255).nullable()
      table.string('phone', 255).nullable()
      table.string('verification_type', 255).nullable().comment("PHONE,EMAIL")
      table.string('verification_code', 255).nullable().comment("6 digit code")
      table.timestamp('verification_code_expire_at', { useTz: true }).nullable()
      table.timestamp('verified_at', { useTz: true }).nullable()

      table.string('password', 180).nullable()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('avatar', 255).nullable()

      /**
       * Specific model roles
       */
      table.string("model_type").nullable();
      table.uuid("model_id").nullable();

      table.string('row_status',255).defaultTo('ACTIVE')
      table.uuid('created_by').nullable()
      table.uuid('updated_by',).nullable()
      table.uuid('deleted_by',).nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.timestamp('deleted_at', { useTz: true }).nullable()

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
