import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../blogs";
import { MEDIA_SOURCES } from "../utils/mediaSources";

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
              <span className="blog-index-list__badge">{MEDIA_SOURCES[post.type].label}</span>
              <Link to={`/blog/${slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
