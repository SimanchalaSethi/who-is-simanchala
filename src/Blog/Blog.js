import React, { useState } from "react";
import Modal from "react-modal";
import "./Blog.css";

Modal.setAppElement("#root");

function Blog() {
  const [posts] = useState([
    {
      title: "Efficient Code Management with a Structured Git Workflow",
      summary:
        "This post covers efficient code management with a structured Git workflow, including branching strategy, code writing, and more.",
      content: `<p><strong>Branching Strategy:</strong></p>
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
    },
    {
      title: "Difference Between RESTful APIs and RPC APIs",
      summary:
        "Explore the fundamental differences between RESTful APIs and RPC APIs, their use cases, and best practices in software development.",
      content: `<p><strong>Introduction:</strong></p>
                <p>- <strong>RESTful APIs</strong> are based on the representational state transfer architectural style, where each URL represents a resource, and standard HTTP methods (GET, POST, PUT, DELETE) are used to perform operations on these resources.</p>
                <p>- <strong>RPC APIs</strong> (Remote Procedure Call) are designed for executing a block of code on a remote server. These can be synchronous or asynchronous and are often used in tightly coupled systems.</p>
                <p><strong>Key Differences:</strong></p>
                <p>- <strong>Protocol:</strong> RESTful APIs typically use HTTP/HTTPS protocols, while RPC APIs can use a variety of protocols such as HTTP, TCP, or UDP.</p>
                <p>- <strong>Flexibility:</strong> RESTful APIs are more flexible and scalable, making them suitable for web services and distributed systems. RPC APIs, being more rigid, are often used for specific, performance-critical operations.</p>
                <p>- <strong>Statelessness:</strong> RESTful APIs are stateless, meaning each request from a client contains all the information the server needs to fulfill that request. RPC APIs can maintain state across multiple calls.</p>
                <p><strong>Use Cases:</strong></p>
                <p>- <strong>RESTful APIs:</strong> Ideal for CRUD (Create, Read, Update, Delete) operations, microservices architectures, and public APIs.</p>
                <p>- <strong>RPC APIs:</strong> Suitable for internal services, performance-critical applications, and scenarios where low latency is essential.</p>
                <p>Understanding the differences between these two API styles helps in choosing the right one for your application needs. At Microsoft, we leverage both RESTful and RPC APIs to deliver robust, scalable, and performant solutions across our vast array of services.</p>`,
    },
    {
      title:
        "Beyond Servers: Embracing the Future with Serverless Architectures",
      summary:
        "This post explores how serverless computing is transforming backend development. Dive into the benefits, challenges, and practical implementations.",
      content: `<p><strong>Introduction:</strong></p>
<p>Serverless computing allows developers to build and run applications without having to manage servers. This post explores its benefits, challenges, and real-world use cases.</p>
<p><strong>Benefits:</strong></p>
<ul>
  <li>Scalability: Serverless applications can automatically scale up and down based on demand.</li>
  <li>Cost Efficiency: Pay only for what you use, reducing overhead costs.</li>
  <li>Simplified Management: Focus on writing code without worrying about infrastructure management.</li>
</ul>
<p><strong>Challenges:</strong></p>
<ul>
  <li>Cold Start Latency: Initial request handling can be slower due to container spin-up times.</li>
  <li>Vendor Lock-In: Dependency on specific cloud providers can limit flexibility.</li>
  <li>Debugging Complexity: Distributed nature of serverless applications can complicate debugging and monitoring.</li>
</ul>
<p><strong>Practical Implementations:</strong></p>
<ul>
  <li>AWS Lambda: Event-driven code execution based on triggers such as HTTP requests, database changes, and file uploads.</li>
  <li>Azure Functions: Build and deploy event-driven functions in the cloud using a range of programming languages.</li>
  <li>Google Cloud Functions: Run event-driven code in the cloud in response to various triggers, including HTTP requests and Google Cloud events.</li>
</ul>

<p>By embracing serverless architectures, developers can build efficient, scalable, and cost-effective applications that meet the demands of modern users.</p>
`,
    },
    {
      title:
        "Mastering Container Orchestration: A Deep Dive into Docker",
      summary:
        "Examine the intricacies of Docker and how it revolutionizes containerized applications. This post explores key features, best practices, and real-world applications of Docker.",
      content: `<p><strong>Introduction:</strong></p>
<p>Docker is a game-changing platform that enables developers to create, deploy, and manage containerized applications. This post explores its key features and best practices for effective usage.</p>
<p><strong>Key Features:</strong></p>
<ul>
  <li>Lightweight Containers: Docker containers are lightweight and portable, allowing for consistent environments across development, testing, and production.</li>
  <li>Isolation: Each container runs in its own isolated environment, ensuring applications do not interfere with each other.</li>
  <li>Scalability: Easily scale applications by deploying multiple container instances.</li>
  <li>Compatibility: Docker containers can run on any platform that supports Docker, including Windows, macOS, and Linux.</li>
  <li>Efficient Resource Utilization: Docker containers share the host OS kernel, reducing overhead compared to traditional virtual machines.</li>
</ul>
<p><strong>Best Practices:</strong></p>
<ul>
  <li><strong>Use Docker Compose:</strong> Simplify the management of multi-container applications using Docker Compose.</li>
  <li><strong>Leverage Docker Swarm:</strong> Utilize Docker Swarm for orchestration and scaling of containerized applications.</li>
  <li><strong>Keep Images Lightweight:</strong> Minimize the size of Docker images by using multi-stage builds and removing unnecessary dependencies.</li>
  <li><strong>Implement Security Best Practices:</strong> Follow security best practices such as running containers with non-root users and regularly updating base images.</li>
  <li><strong>Monitor and Log:</strong> Implement monitoring and logging solutions to gain visibility into the performance and health of Docker containers.</li>
</ul>
<p>Docker empowers developers to efficiently manage and scale containerized applications, making it a crucial tool for modern DevOps practices.</p>
`,
    },
    {
      title:
        "Mastering Container Orchestration: A Deep Dive into Kubernetes",
      summary:
        "Examine the intricacies of Kubernetes and how it orchestrates containerized applications, covering cluster management, scaling, and best practices.",
      content: `<p><strong>Introduction:</strong></p>
<p>Kubernetes is a powerful container orchestration platform that automates deployment, scaling, and management of containerized applications. This post explores its key features and best practices for effective usage.</p>
<p><strong>Key Features:</strong></p>
<ul>
  <li>Cluster Management: Automates the deployment, scaling, and operation of application containers across clusters of hosts.</li>
  <li>Service Discovery: Automatically discovers and load-balances services within the cluster.</li>
  <li>Storage Orchestration: Manages persistent storage for stateful applications.</li>
  <li>Automated Rollouts and Rollbacks: Ensures smooth updates and rollbacks of applications.</li>
  <li>Self-Healing: Automatically replaces and reschedules failed or unresponsive containers.</li>
</ul>
<p><strong>Best Practices:</strong></p>
<ul>
  <li>Use Namespaces: Organize and isolate resources within the cluster for better management.</li>
  <li>Leverage Helm Charts: Simplify the deployment and management of Kubernetes applications using Helm packages.</li>
  <li>Monitor and Log: Implement monitoring and logging solutions to gain visibility into the health and performance of your cluster.</li>
  <li>Secure Your Cluster: Follow security best practices such as role-based access control (RBAC) and network policies to protect your cluster.</li>
  <li>Optimize Resource Usage: Configure resource requests and limits to ensure efficient utilization of cluster resources.</li>
</ul>
<p>Kubernetes empowers developers to efficiently manage and scale containerized applications, making it a crucial tool for modern DevOps practices.</p>
`,
    },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPost(null);
  };

  return (
    <div id="blog">
      <h1>Blogs</h1>
      {posts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <button onClick={() => openModal(post)}>Read Details</button>
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Blog Post Details"
      >
        {selectedPost && (
          <div>
            <h2>{selectedPost.title}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            ></div>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Blog;
