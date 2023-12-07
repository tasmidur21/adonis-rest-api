import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'roles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('key',255).unique().notNullable()
      table.string('title',255).notNullable()
      table.uuid('content').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
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

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
