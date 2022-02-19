export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62106013874d45357662d63d',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-3i44185e',
                  apiId: '5212fad8-c78b-434b-83b9-202ce51bc640'
                },
                {
                  buildHookId: '62106014874d45357662d63e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-xhywdv98',
                  apiId: '40985d43-a247-4dcf-bf53-6c6afe24ed06'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarcosFerrerF/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-xhywdv98.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
