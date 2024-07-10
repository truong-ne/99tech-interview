import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { BlogType } from "../../hooks/database/enum.constant";

// data transfer to object Blog
export class CreateBlogDto {
    @IsNotEmpty()
    @IsString()
    title!: string

    @IsNotEmpty()
    @IsString()
    content!: string

    @IsNotEmpty()
    @IsEnum({ enum: BlogType })
    type!: string
}
// update blog dto
export class UpdateBlogDto {
    @IsOptional()
    title?: string

    @IsOptional()
    content?: string

    @IsOptional()
    type?: string
}
// Blog Query
export class BlogQuery {
    @Type(() => String)
    @IsOptional()
    title?: string

    @Type(() => String)
    @IsOptional()
    content?: string

    @Type(() => Number)
    @IsOptional()
    page?: number

    @Type(() => Number)
    @IsOptional()
    size?: number

    @Type(() => String)
    @IsOptional()
    type?: BlogType
}