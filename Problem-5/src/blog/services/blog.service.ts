import { DeleteResult, Like, UpdateResult } from "typeorm";
import { dataSource } from "../../hooks/database/data-source";
import { BlogQuery, CreateBlogDto, UpdateBlogDto } from "../dto/blog.dto";
import { Blog } from "../entities/blog.entity";
// export blog service to blog controller
export class BlogService {
    constructor(
        // initialized blog repository
        private readonly blogRepository = dataSource.getRepository(Blog)
    ) { }
    // a. add blog to database
    async addBlog(dto: CreateBlogDto): Promise<Blog> {
        // create blog record
        const blog = this.blogRepository.create(dto)
        // save blog record
        return await this.blogRepository.save(blog)
    }
    // b. list resources with basic filter
    async listBlogs(query: BlogQuery): Promise<{ blogs: Blog[], page: number, size: number }> {
        // catch query error
        if (!query.page || query.page < 1) query.page = 1
        if (!query.size || query.size < 1) query.size = 10
        // list blogs by query
        const blogs = await this.blogRepository.find({
            where: {
                title: query?.title ? Like(`%${query.title}%`) : Like('%%'),
                content: query?.content ? Like(`%${query.content}%`) : Like('%%'),
                type: query?.type,
            },
            select: ['id', 'title', 'content', 'type'],
            take: query.size,
            skip: (query.page - 1) * query.size,
            order: { updatedAt: 'DESC' }
        })
        // return list blogs
        return { blogs, page: query.page, size: query.size }
    }
    // c. detail blog Id
    async detailBlogId(id: string): Promise<Blog> {
        // return blog record
        return await this.blogRepository.findOneOrFail({
            where: { id: id },
            select: ['id', 'title', 'content', 'type']
        })
    }
    // d. update blog detail
    async updateBlogId(id: string, dto: UpdateBlogDto): Promise<UpdateResult> {
        // update blog record
        return await this.blogRepository.update({ id: id }, {
            title: dto.title, content: dto.content, type: dto.type
        })
    }
    // e. delete blog id
    async deleteBlogId(id: string): Promise<DeleteResult> {
        // delete blog record
        return await this.blogRepository.delete({ id: id })
    }

    // private async existedBlog(id: string): Promise<boolean> {
    //     const existed = await this.blogRepository.existsBy({ id: id })
    // }
}