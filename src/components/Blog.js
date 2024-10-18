import React, { useState } from 'react';
import './Blog.css';
import githubFlowImage from '../assets/gitflow.png'; 

function Blog() {
  const [posts, setPosts] = useState([
    {
      title: 'Efficient Code Management with a Structured Git Workflow',
      content: `<p>As a Backend Team Lead, managing code effectively is crucial to our success. In this blog, I’ll share our meticulously designed Git workflow that ensures seamless integration and delivery.</p>
                <p><strong>Branching Strategy:</strong></p>
                <p>- <strong>Main Branches:</strong> We operate with three main branches - dev, rel, and main.</p>
                <p>- <strong>Feature Branches:</strong> Team members pull from the dev branch and create feature branches based on the specific APIs they are working on.</p>
                <p><strong>Development Process:</strong></p>
                <p>- <strong>Code Writing:</strong> Once the development is completed, the code is pushed to their respective feature branches.</p>
                <p>- <strong>Code Review:</strong> I review the code, providing feedback and merging it into the dev branch if all checks pass. Declines are made if issues are found.</p>
                <p><strong>Testing Phase:</strong></p>
                <p>- <strong>API Testing:</strong> Post-merge, our testing team rigorously tests the APIs. Any bugs found are fixed by pulling the latest dev branch code, fixing the bugs, and pushing the changes.</p>
                <p><strong>Approval Stages:</strong></p>
                <p>- <strong>Integration:</strong> Once testing is successful, I merge the changes into the rel branch where frontend and backend are integrated.</p>
                <p>- <strong>Client Approval:</strong> Our testing team validates the integrated application and seeks client approval.</p>
                <p>- <strong>Final Merge:</strong> Upon client approval, the code is merged into the main branch, marking it ready for production.</p>`,
      image: githubFlowImage
    }
  ]);

  return (
    <div id="blog">
      <h1>Blog</h1>
      {posts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <img src={post.image} alt={post.title} />
          <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
