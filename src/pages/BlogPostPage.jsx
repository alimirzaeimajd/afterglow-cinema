import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../blogs";
import { slugify } from "../utils/slugify";
import { MEDIA_SOURCES } from "../utils/mediaSources";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS[slug];

  if (!post) {
    return (
      <div className="page-wrapper placeholder-page">
        <h1 className="placeholder-page__title">Post not found</h1>
        <Link to="/movies" className="movie-card__blog-btn">
          ← Back to movies
        </Link>
      </div>
    );
  }

  const source = MEDIA_SOURCES[post.type];
  const media = source.items.find((m) => slugify(m.title) === slug);

  return (
    <article className="page-wrapper blog-post">
      <Link to={source.basePath} className="blog-post__back">
        ← Back to {source.label.toLowerCase()}
      </Link>
      {media && <img className="blog-post__poster" src={media.image} alt={media.title} />}
      <span className="blog-post__type-badge">{source.label}</span>
      <h1 className="blog-post__title">{post.title}</h1>
      <p className="blog-post__date">{post.date}</p>
      <p className="blog-post__content">{post.content}</p>
    </article>
  );
}
