import StatusCard from "../components/StatusCard";

export default function Home() {
  return (
    <main style={{padding:"40px", fontFamily:"Arial"}}>
      <h1>🚀 DevOps CI/CD Demo Application - Version 2</h1>

      <p>
        This Next.js application is deployed using a CI/CD pipeline with
        GitHub Actions, Docker, AWS ECR, and EC2 Auto Scaling.
      </p>

      <StatusCard />

      <div style={{marginTop:"30px"}}>
        <h3>Pipeline Components</h3>

        <ul>
          <li>GitHub Repository</li>
          <li>GitHub Actions CI/CD</li>
          <li>Docker Containerization</li>
          <li>AWS ECR Image Repository</li>
          <li>EC2 Auto Scaling Deployment</li>
        </ul>
      </div>
    </main>
  );
}