// pages/blog.js
import Layout from '../components/layout';
import BlogContent from './blog-content.mdx'; // Capitalized since it's a React component

const Blog = () => {
  return (
    <Layout>
      <div className="blog-content">
        <article>
          <BlogContent /> {/* Render MDX as a component */}
        </article>
      </div>
    </Layout>
  );
};

export default Blog;
