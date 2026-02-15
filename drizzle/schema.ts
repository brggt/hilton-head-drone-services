import { mysqlTable, varchar, text, timestamp, int, primaryKey } from 'drizzle-orm/mysql-core'

export const inquiries = mysqlTable(
  'inquiries',
  {
    id: int('id').autoincrement().notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    phone: varchar('phone', { length: 20 }),
    propertyAddress: varchar('property_address', { length: 255 }).notNull(),
    serviceType: varchar('service_type', { length: 50 }).notNull(),
    budget: varchar('budget', { length: 50 }).notNull(),
    message: text('message'),
    createdAt: timestamp('created_at').defaultNow(),
    status: varchar('status', { length: 20 }).default('new')
  },
  (table) => {
    return {
      idPk: primaryKey({ columns: [table.id] })
    }
  }
)
