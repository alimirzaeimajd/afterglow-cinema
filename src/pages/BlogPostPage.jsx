import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../blogs";
import { MOVIES } from "../movies";
import { slugify } from "../utils/slugify";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS[slug];
  const movie = MOVIES.find((m) => slugify(m.title) === slug);

  if (!post) {
    return (
      <div className="page-wrapper placeholder-page">
        <h1 className="placeholder-page__title">Post not found</h1>
        <Link to="/" className="movie-card__blog-btn">
          ← Back to movies
        </Link>
      </div>
    );
  }

  return (
    <article className="page-wrapper blog-post">
      <Link to="/" className="blog-post__back">
        ← Back to movies
      </Link>
      {movie && <img className="blog-post__poster" src={movie.image} alt={movie.title} />}
      <h1 className="blog-post__title">{post.title}</h1>
      <p className="blog-post__date">{post.date}</p>
      <p className="blog-post__content">{post.content}</p>
    </article>
  );
}
