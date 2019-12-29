const path = require('path');
const { slugify } = require('./src/util/utilityFunctions');
const authors = require('./src/util/authors');
const _ = require('lodash');

// fungsi untuk menghandle saat terjadi pembuatan node
// fungsi ini berguna untuk mencari file markdown untuk dijadikan sebagai halaman single post
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  // cek apakah file yang dicari berupa markdown (md)
  // jika file yang dicari merupa markdown
  // maka ambil data2nya
  if (node.internal.type === 'MarkdownRemark') { 
    const slugFromTitle = slugify(node.frontmatter.title)
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle,
    })
  }
}

// fungsi untuk membuat halaman single post 
// pertama buat halaman
// kedua ambil data2 yang sudah didapatkan kemudian simpan agar dijadikan template untuk halaman 
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const templates = {
    singlePost: path.resolve('src/templates/single-post.js'),
    tagsPage: path.resolve('src/templates/tags-page.js'),
    tagPosts: path.resolve('src/templates/tag-posts.js'),
    postList: path.resolve('src/templates/post-list.js'),
    authorPosts: path.resolve('src/templates/author-posts.js')
  }

  // fetch graphql untuk mendapatkan data 1 buah post pada file markdown
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    // jika terjadi error saat melakukan fetch graphql
	  if (res.errors) return Promise.reject(res.errors)

	  // Extracting all posts from res
	  const posts = res.data.allMarkdownRemark.edges

	  // Create single post pages
	  posts.forEach(({ node }) => {
	    createPage({
	      path: node.fields.slug,
	      component: templates.singlePost,
	      context: {
	        // Passing slug for template to use to fetch the post
	        slug: node.fields.slug,
          // find author imageUrl from authors and pass it to the single post template
          imageUrl: authors.find( author => author.name === node.frontmatter.author).imageUrl
	      }
	    })
	 })

   
   // kita ambil seluruh tags dari post pada setiap file markdown/postingan yang ada. 
   let tags = [];
   _.each(posts, edge => {
    if(_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  })


   // untuk akan mmebuat seperit ini
   // ['design', 'code']
   // {design: 1, code:1, web: 0}
   let tagPostCounts = {}

   tags.forEach(tag => {
    tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1; 
   })

   tags = _.uniq(tags)

   // kita buat halaman/page tags
   createPage({
    path: '/tags',
    component: templates.tagsPage,
    context: {
      tags, 
      tagPostCounts
    }
   })

   // kita buat halaman yang akan menampilkan daftar posting berdasarkan tag
   tags.forEach(tag => {
    createPage({
      path: `/tag/${slugify(tag)}`,
      component: templates.tagPosts,
      context: {
        tag
      },
    })
   })

     // kita setting 2 post dalam 1 kali render page
    // Create posts pagination pages
    const postsPerPage = 2
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1

      // Skip first page because of index.js
      if (isFirstPage) return

      // kita buat halamana untuk menghandle pagenation
      createPage({
        path: `/page/${currentPage}`,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numberOfPages: numberOfPages,
          currentPage: currentPage,
        },
      })
    })

    // kita membuat halaman untuk menampilkan page author post, dimana page ini akan menampilkan bersadarkan author
    authors.forEach(author => {
      createPage({
        path: `/author/${slugify(author.name)}`,
        component: templates.authorPosts,
        context: {
          authorName: author.name,
          imageUrl: author.imageUrl 
        }
      })
    });
  })
}