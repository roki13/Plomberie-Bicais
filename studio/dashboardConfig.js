export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '608c5318f6ff680093ab439a',
                  title: 'Sanity Studio',
                  name: 'plomberie-bicais-studio',
                  apiId: '6c3c8b5b-f6d1-45e5-b55a-a5d54808b3e4'
                },
                {
                  buildHookId: '608c531863186b009ebc0835',
                  title: 'Landing pages Website',
                  name: 'plomberie-bicais',
                  apiId: '39285599-cc13-4b48-a000-ba88b2bbb75b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/roki13/Plomberie-Bicais',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://plomberie-bicais.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
