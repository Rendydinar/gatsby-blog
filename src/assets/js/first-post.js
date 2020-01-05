let code1 = `
    /**
     * kita setting 4 buah postingan dalam 1 kali render page
     * Create posts pagination pages
     */
    const postsPerPage = 6;
    const numberOfPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const isFirstPage = index === 0;
      const currentPage = index + 1;

      // Skip first page because of index.js
      if (isFirstPage) return

      // kita buat halaman untuk template post-list
      createPage({
        path: ,
        component: templates.postList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numberOfPages: numberOfPages,
          currentPage: currentPage,
        },
      });
    });

    // kita membuat halaman untuk untuk template page author-post, dimana page ini akan menampilkan bersadarkan author
    authors.forEach(author => {
      createPage({
        path: ,
        component: templates.authorPosts,
        context: {
          authorName: author.name,
          imageUrl: author.imageUrl 
        }
      });
    });
   `;
  
  let code2 = `
    var editor = CodeMirror(document.body.getElementsByTagName("article")[0], {
      value: value,
      lineNumbers: true,
      mode: "pascal",
      keyMap: "sublime",
      autoCloseBrackets: true,
      matchBrackets: true,
      showCursorWhenSelecting: true,
      theme: "monokai",
      tabSize: 1,
      readOnly: true
    });

  `
  let editorCode1 = CodeMirror(document.getElementById('code1'), {
    value: code1,
    lineNumbers: true,
    mode: "javascript",
    keyMap: "sublime",
    autoCloseBrackets: true,
    matchBrackets: true,
    showCursorWhenSelecting: true,
    theme: "monokai",
    tabSize: 1,
    readOnly: true
  });

   let editorCode2 = CodeMirror(document.getElementById('code2'), {
    value: code2,
    lineNumbers: true,
    mode: "javascript",
    keyMap: "sublime",
    autoCloseBrackets: true,
    matchBrackets: true,
    showCursorWhenSelecting: true,
    theme: "monokai",
    tabSize: 1,
    readOnly: true
  }); 