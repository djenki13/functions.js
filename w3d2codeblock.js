// We could build a forum

// First need to build a post class that  our forum/factory will make
class Post {
    constructor(name, post) {
      this.name = name;
      this.post = post;
    }
  }
  
  // Now we build our factory that build posts
  class Forum {
    constructor(forumType) {
      this.forumType = forumType;
      this.posts = [];
    }
    showPosts() {
      for (let element of this.posts) console.log(element);
    }
  
    showForum() {
      console.log(this);
    }
  
    addPosts(name, post) {
      let newPost = new Post(name, post);
      this.posts.unshift(newPost);
    }
  
    deleteFirstPost() {
      this.posts.shift();
    }
  }
  
  const animals = new Forum('Animals');
  
  animals.addPosts('Suneetha', 'Hello, World!!');
  animals.addPosts('Kit', 'I love Dogs');
  animals.addPosts('Pranusha', 'I love elephants!!!');
  animals.addPosts('Emmanuel', ' I really dig whales');
  animals.addPosts('Dylan', 'Ferrets are mid');
  animals.showForum();