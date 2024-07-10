import { BlogController } from "./controllers/blog.controller";
import { BlogService } from "./services/blog.service";

module.exports = (app: any) => {
    const blogService = new BlogService
    const blogController = new BlogController(blogService)
    app.use('/blog', blogController.router)
}