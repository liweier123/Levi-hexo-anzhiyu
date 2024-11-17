var posts=["2024/11/15/hello-world/","2024/11/17/企业网络搭建笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };