const swaggerJsdoc = require('swagger-jsdoc');
export const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Blog API',
            version: '1.0.0',
            description: "ENUM Type: [Sport, Health, Business, Finance, Music]"
        },
        components: {
            schema: {
                Blog: {
                    type: 'object',
                    required: ['title', 'content'],
                    properties: {
                        id: {
                            type: 'string',
                            description: 'ID of the blog',
                        },
                        title: {
                            type: 'string',
                            description: 'Title of the blog',
                        },
                        content: {
                            type: 'string',
                            description: 'Content of the blog',
                        },
                    },
                    example: {
                        id: '1',
                        title: 'A blog title',
                        content: 'The content of the blog',
                    },
                },
                CreateBlogDto: {
                    type: 'object',
                    required: ['title', 'content', 'type'],
                    properties: {
                        title: {
                            type: 'string',
                            description: 'Title of the blog',
                        },
                        content: {
                            type: 'string',
                            description: 'Content of the blog',
                        },
                        type: {
                            type: 'string',
                            description: 'Type of the blog',
                            enum: ['personal', 'tech', 'lifestyle'], // ví dụ cho các giá trị của enum BlogType
                        },
                    },
                    example: {
                        title: 'Sample title',
                        content: 'Sample content',
                        type: 'personal',
                    },
                },
                BlogQuery: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string',
                            description: 'Title of the blog',
                        },
                        content: {
                            type: 'string',
                            description: 'Content of the blog',
                        },
                        page: {
                            type: 'integer',
                            description: 'Page number for pagination',
                        },
                        size: {
                            type: 'integer',
                            description: 'Page size for pagination',
                        },
                        type: {
                            type: 'string',
                            description: 'Type of the blog',
                        },
                    },
                    example: {
                        title: 'Sample title',
                        content: 'Sample content',
                        page: 1,
                        size: 10,
                        type: 'Sample type',
                    },
                },
            }
        }
    },
    apis: ['./src/**/controllers/*.ts'], // Path to your API routes
};

export const specs = swaggerJsdoc(options);

module.exports = {
    specs,
    swaggerUi,
};
