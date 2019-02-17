// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jeremy',
  siteUrl: "https://jeremyhadfield.com",
  siteDescription: "Student at Dartmouth College 🤠",
  icon: "src/img/favicon-32x32.png",
  transformers: {
    remark: {
      plugins: [
        [ 'gridsome-plugin-remark-shiki', { theme: 'nord' } ], 
        [ 'gridsome-plugin-remark-twitter', {} ]
      ]
    }
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/*.md",
        typeName: "Post"
      }, 
    }, 
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'jeremyhadfield.com', // required
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
        routes: {
          post: '/:year/:month/:day/:slug',
          post_tag: '/tag/:slug'
        }
      }
    }
  ]
}