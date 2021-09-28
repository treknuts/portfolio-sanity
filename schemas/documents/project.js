export default {
    title: 'Project',
    name: 'project',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            }
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Technologies',
            name: 'technologies',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            title: 'Github Url',
            name: 'githubUrl',
            type: 'url',
            initialValue: 'https://github.com/treknuts/',
        },
        {
            title: 'Image Url',
            name: 'imageUrl',
            type: 'url'
        }
    ],
}