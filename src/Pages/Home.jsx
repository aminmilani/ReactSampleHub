import "./Home.css"

export default function Home() {
    return (
        <>
            <div className="home-content">
                <h1>Welcome to the React Samples Hub</h1>

      <p>
        This website is a collection of React code samples I&apos;ve written to demonstrate various key concepts in modern React development.
        Whether you&apos;re a beginner or brushing up on specific topics, you&apos;ll find helpful examples and practical snippets here.
      </p>

      <h2>📚 What You&apos;ll Find</h2>
       <ul>
        <li><strong>Hooks:</strong> useState, useEffect, useContext, and custom hooks</li>
        <li><strong>Routing:</strong> React Router usage, nested routes, dynamic params</li>
        <li><strong>Components:</strong> Functional components, props, composition</li>
        <li><strong>Forms:</strong> Controlled inputs, validation, submission handling</li>
        <li><strong>Styling:</strong> CSS Modules, conditional styling, theming</li>
      </ul>

      <h2>🧪 Sample Previews</h2>
      <div className="sample-preview-container">
        <div className="sample-card">
          <h3>✅ useState Counter</h3>
          <p>A simple counter using React’s useState hook.</p>
          <a href="/Samples">View Sample</a>
        </div>

        <div className="sample-card">
          <h3>🌐 Routing Example</h3>
          <p>Basic routing setup with React Router.</p>
          <a href="/Samples">View Sample</a>
        </div>

        <div className="sample-card">
          <h3>📥 Controlled Form</h3>
          <p>Handle input state and form submission.</p>
          <a href="/Samples">View Sample</a>
        </div>
      </div>

      <h2>📌 How to Use This Site</h2>
      <p>
        Use the navigation bar to explore:
      </p>
      <ul>
        <li><strong>Samples</strong> – Browse examples by topic</li>
        <li><strong>Contact</strong> – Reach out for feedback, collaboration, or questions</li>
      </ul>

      <h2>👨‍💻 About This Project</h2>
      <p>
        I created this site to deepen my understanding of React and share my learning journey with others.
        Everything here is beginner-friendly and open to improvement.
        If you find it useful, feel free to connect!
      </p>
            </div>
        </>
    )
}