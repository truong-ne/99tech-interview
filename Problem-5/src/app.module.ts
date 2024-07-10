import { dataSource } from "./hooks/database/data-source"

const blogModule = require('./blog/blog.module')
// const blogRepository: Repository = Repository<>


module.exports = (app: any) => {
    // initialize data-source
    dataSource.initialize().then(() => {
        console.log("Data Source has been initialized!")
    }).catch((error) => {
        console.error("Error during Data Source initialization", error)
    })
    // initialize module
    blogModule(app)
}