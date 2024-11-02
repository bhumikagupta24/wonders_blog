const LOCAL_STORAGE_KEY = 'blogPosts';

export const getPosts = () => {
  try {
    if (typeof localStorage === 'undefined') return [];
    const posts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return posts ? JSON.parse(posts) : [];
  } catch {
    return [];
  }
};

export const savePosts = (posts: unknown) => {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
    }
  } catch {
    // Handle error silently
  }
};

export const addPost = (post: { title: string; description: string; content: string; image?: string }) => {
  const posts = getPosts();
  const newPost = { id: Date.now(), createdAt: new Date().toISOString(), ...post };
  posts.push(newPost);
  savePosts(posts);
  return newPost;
};

export const editPost = (updatedPost: { id: number; title: string; description: string; content: string; image?: string }) => {
  const posts = getPosts().map((post: { id: number; createdAt: string }) => (post.id === updatedPost.id ? { createdAt: new Date().toISOString(), ...updatedPost } : post));
  savePosts(posts);
};

export const deletePost = (id: number) => {
  const posts = getPosts().filter((post: { id: number; }) => post.id !== id);
  savePosts(posts);
};
