import { DataSource } from "typeorm"
import { postgresOptions } from "../connections/connection.provider"
import { Blog } from "../../blog/entities/blog.entity"

// initialize dataSource
export const dataSource = new DataSource({
    ...postgresOptions,
    entities: [Blog]
})