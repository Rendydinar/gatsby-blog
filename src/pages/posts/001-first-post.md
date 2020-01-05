---
title: 'First Post - Introduction'
date: 2019-12-19 13:06:42
author: 'Umbu Rambu'
image: ../../images/javascript.jpg
tags:
  - design
  - tutorials
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/fold/foldgutter.js">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/dialog/dialog.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/theme/monokai.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/search/searchcursor.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/search/search.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/dialog/dialog.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/edit/matchbrackets.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/edit/closebrackets.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/comment/comment.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/wrap/hardwrap.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/fold/foldcode.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/fold/brace-fold.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/mode/javascript/javascript.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/keymap/sublime.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/mode/php/php.js" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/mode/pascal/pascal.js" ></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/mode/css/css.js" ></script>
 

<style>
  .CodeMirror {border-top: 1px solid #eee; border-bottom: 1px solid #eee; line-height: 1.3; height: 500px}
  .CodeMirror-linenumbers { padding: 0 8px; }
</style>
 
Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.
Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.
Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.
Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.

<div id="code1"></div>
Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.
Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.
<div id="code2"></div>

<img src="../page-data/assets/images/javascript.jpg" class="img-fluid" />

Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.
Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.
Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.
Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.

<script type="text/javascript" src="../page-data/assets/js/first-post.js"></script>


Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.Welcome to Code Blog, I hope you enjoy our content, Welcome to Code Blog, I hope you enjoy our content.

<script>
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
</script>