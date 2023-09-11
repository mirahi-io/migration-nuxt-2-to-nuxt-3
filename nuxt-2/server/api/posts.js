const posts = [
  { id: 1, title: 'My First Post', content: 'This is the content of my first post.' },
  { id: 2, title: 'My Second Post', content: 'This is the second content of my second post.' },
  // ... other posts
];

export default function (req, res, next) {
  if (req.method !== 'GET') {
    return next();
  }

  if (req.url === '/') {
    // Get all posts
    return res.end(JSON.stringify(posts));
  }
  else {
    // Get single post by ID
    const id = parseInt(req.url.substring(1));
    const post = posts.find(p => p.id === id);
    if (!post) return res.writeHead(404).end('Post not found.');
    return res.end(JSON.stringify(post));
  }

  // This is a simplistic example, for other methods like POST you would handle them here.
  // However, without a framework like Express, parsing the body can get a bit more complex.

  // Fallthrough to default Nuxt behavior if no routes are matched
  next();
}
