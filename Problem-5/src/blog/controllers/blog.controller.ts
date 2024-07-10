import { Request, Response, Router } from "express";
import { BlogService } from "../services/blog.service"

/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       required:
 *         - title
 *         - content
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the blog
 *         title:
 *           type: string
 *           description: The title of the blog
 *         content:
 *           type: string
 *           description: The content of the blog
 *       example:
 *         id: d5fE_asz
 *         title: A blog title
 *         content: The content of the blog
 *     BlogQuery:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the blog
 *         content:
 *           type: string
 *           description: Content of the blog
 *         page:
 *           type: integer
 *           description: Page number for pagination
 *         size:
 *           type: integer
 *           description: Page size for pagination
 *         type:
 *           type: string
 *           description: Type of the blog
 *       example:
 *         title: Sample title
 *         content: Sample content
 *         page: 1
 *         size: 10
 *         type: Sample type
 *     CreateBlogDto:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - type
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the blog
 *         content:
 *           type: string
 *           description: Content of the blog
 *         type:
 *           type: string
 *           description: Type of the blog
 *           enum: ['Sport', 'Health', 'Business', 'Finance', 'Music']
 *       example:
 *         title: Title Example
 *         content: Content Example
 *         type: Music
 *     UpdateBlogDto:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - type
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the blog
 *         content:
 *           type: string
 *           description: Content of the blog
 *         type:
 *           type: string
 *           description: Type of the blog
 *           enum: ['Sport', 'Health', 'Business', 'Finance', 'Music']
 *       example:
 *         title: Title Example
 *         content: Content Example
 *         type: Music
 */


/**
 * @swagger
 * tags:
 *   name: Blogs
 */

export class BlogController {
    public router: Router
    constructor(
        private readonly blogService: BlogService,
    ) {
        this.router = Router()
        this.initializeRoutes()
    }
    // initialize all route
    private initializeRoutes() {
        /**
         * @swagger
         * /blog:
         *   get:
         *     summary: Returns the list of all the blogs
         *     tags: [Blogs]
         *     parameters:
         *       - in: query
         *         name: title
         *         schema:
         *           type: string
         *       - in: query
         *         name: content
         *         schema:
         *           type: string
         *       - in: query
         *         name: page
         *         schema:
         *           type: integer
         *       - in: query
         *         name: size
         *         schema:
         *           type: integer
         *       - in: query
         *         name: type
         *         schema:
         *           type: string
         *           enum: [Sport, Health, Business, Finance, Music]
         *     responses:
         *       200:
         *         description: The list of the blogs
         */
        this.router.get('/', this.listBlog.bind(this))
        /**
         * @swagger
         * /blog:
         *   post:
         *     summary: Create a new blog
         *     tags: [Blogs]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/CreateBlogDto'
         *     responses:
         *       201:
         *         description: The blog was successfully created
         *       400:
         *         description: Bad request
         */
        this.router.post('/', this.addBlog.bind(this))
        /**
         * @swagger
         * /blog/{id}:
         *   get:
         *     summary: Get the blog by id
         *     tags: [Blogs]
         *     parameters:
         *       - in: path
         *         name: id
         *         schema:
         *           type: string
         *         required: true
         *     responses:
         *       200:
         *         description: The blog description by id
         *       404:
         *         description: Blog not found
         */
        this.router.get('/:id', this.detailBlogId.bind(this))
        /**
         * @swagger
         * /blog/{id}:
         *   patch:
         *     summary: Update the blog by id
         *     tags: [Blogs]
         *     parameters:
         *       - in: path
         *         name: id
         *         schema:
         *           type: string
         *         required: true
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             $ref: '#/components/schemas/UpdateBlogDto'
         *     responses:
         *       200:
         *         description: Update Successfully
         *       404:
         *         description: Blog not found
         */
        this.router.patch('/:id', this.updateBlogId.bind(this))
        /**
         * @swagger
         * /blog/{id}:
         *   delete:
         *     summary: Delete the blog by id
         *     tags: [Blogs]
         *     parameters:
         *       - in: path
         *         name: id
         *         schema:
         *           type: string
         *         required: true
         *     responses:
         *       200:
         *         description: Delete Successfully
         *       404:
         *         description: Blog not found
         */
        this.router.delete(':/id', this.deleteBlogId.bind(this))
    }
    // add blog
    async addBlog(req: Request, res: Response) {
        try {
            const blog = await this.blogService.addBlog(req.body)
            res.status(201).json({
                statusCode: 201, data: blog,
                message: 'successfully'
            })
        } catch (error) {
            res.status(400).json({
                statusCode: 400, data: false,
                message: 'added blog fail'
            })
        }
    }
    // list blog
    async listBlog(req: Request, res: Response) {
        const blogs = await this.blogService.listBlogs(req.query)
        res.status(200).json({
            statusCode: 200, data: blogs,
            message: 'successfully'
        })
    }
    // detail blog id
    async detailBlogId(req: Request, res: Response) {
        try {
            const blog = await this.blogService.detailBlogId(req.params.id)

            res.status(200).json({
                statusCode: 200, data: blog,
                message: 'successfully'
            })
        } catch {
            res.status(404).json({
                statusCode: 404,
                data: false,
                message: 'blog not found'
            })
        }
    }
    // update blog id
    async updateBlogId(req: Request, res: Response) {
        try {
            await this.blogService.updateBlogId(req.params.id, req.body)

            res.status(200).json({
                statusCode: 200, data: true,
                message: 'successfully'
            })
        } catch {
            res.status(400).json({
                statusCode: 400, data: false,
                message: `can not update blog id ${req.params.id}`
            })
        }
    }
    // delete blog id
    async deleteBlogId(id: string, req: Request, res: Response) {
        try {
            await this.blogService.deleteBlogId(id)

            res.status(200).json({
                statusCode: 200, data: true,
                message: 'successfully'
            })
        } catch {
            res.status(400).json({
                statusCode: 400, data: false,
                message: `can not delete blog id ${req.params.id}`
            })
        }
    }
}