// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Jeremy',
  siteUrl: "https://jeremyhadfield.com",
  siteDescription: "Student at Dartmouth College 🤠",
  icon: "src/favicon-32x32.png",
  transformers: {
    remark: {}
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/*.md",
        typeName: "Post"
      }
    }
  ]
}