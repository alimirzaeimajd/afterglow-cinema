import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../blogs";

export default function BlogIndexPage() {
  const posts = Object.entries(BLOG_POSTS);

  return (
    <div className="page-wrapper placeholder-page">
      <h1 className="placeholder-page__title">Blog</h1>
      {posts.length === 0 ? (
        <p className="placeholder-page__text">No posts yet.</p>
      ) : (
        <ul className="blog-index-list">
          {posts.map(([slug, post]) => (
            <li key={slug}>
              <Link to={`/blog/${slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
