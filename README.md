#  Next.js DevOps CI/CD Pipeline on AWS

A complete DevOps project demonstrating how a modern web application can be **automatically built, containerized, and deployed to scalable cloud infrastructure** using GitHub Actions, Docker, and AWS.

This project implements a **fully automated CI/CD pipeline** that builds a Next.js application, pushes the container image to Amazon ECR, and deploys it on EC2 instances behind an Application Load Balancer with Auto Scaling.

---

#  Project Objective

The goal of this project is to demonstrate how DevOps practices can automate the software delivery lifecycle using cloud-native tools.

The pipeline automatically:

* Builds the application when code is pushed to GitHub
* Creates a Docker container
* Pushes the image to AWS Elastic Container Registry (ECR)
* Deploys the container to EC2 instances
* Routes traffic through an Application Load Balancer
* Supports scaling using Auto Scaling Groups

---

#  Architecture

```
Developer pushes code to GitHub
            │
            ▼
     GitHub Actions CI/CD
     (Build + Docker Image)
            │
            ▼
       AWS ECR Repository
      (Container Registry)
            │
            ▼
   EC2 Instances (Auto Scaling)
     Running Docker Container
            │
            ▼
 Application Load Balancer
            │
            ▼
          Users
```

---

#  Tech Stack

### Application

* **Next.js**
* **Node.js**

### Containerization

* **Docker**

### CI/CD

* **GitHub Actions**

### Cloud Infrastructure (AWS)

* Amazon EC2
* Amazon ECR
* Application Load Balancer
* Auto Scaling Group
* IAM Roles
* Security Groups

---

#  CI/CD Pipeline Workflow

The deployment pipeline follows these steps:

1️⃣ Developer pushes code to GitHub

2️⃣ GitHub Actions triggers the workflow

3️⃣ Application is built and Docker image is created

4️⃣ Docker image is pushed to **Amazon ECR**

5️⃣ EC2 instances pull the latest container image

6️⃣ Docker container runs the Next.js application

7️⃣ Application Load Balancer routes traffic to instances

---

#  Project Structure

```
nextjs-devops-demo
│
├── app
│   └── page.js
│
├── public
│
├── Dockerfile
│
├── package.json
│
├── .github
│   └── workflows
│       └── deploy.yml
│
└── README.md
```

---

#  Docker Setup

Docker is used to package the application for consistent deployment.

### Dockerfile

```
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm","start"]
```

---

#  GitHub Actions CI/CD Workflow

Location:

```
.github/workflows/deploy.yml
```

Pipeline responsibilities:

* Build Docker image
* Authenticate with AWS
* Push image to Amazon ECR

---

# ☁️ AWS Infrastructure Setup

### 1. Amazon ECR

Container registry used to store Docker images.

Repository name:

```
nextjs-devops-demo
```

---

### 2. EC2 Instance

Used to run the Docker container.

Instance type:

```
t3.micro
```

Operating System:

```
Amazon Linux
```

---

### 3. Application Load Balancer

Routes incoming user traffic to EC2 instances.

Listener configuration:

```
HTTP : 80
```

Target group port:

```
3000
```

---

### 4. Auto Scaling Group

Ensures application availability by maintaining the required number of EC2 instances.

Configuration example:

```
Minimum capacity: 1
Desired capacity: 1
Maximum capacity: 3
```

---

# Security Configuration

Security groups were configured to allow necessary traffic.

### Load Balancer

```
HTTP 80
```

### EC2 Instance

```
SSH 22
TCP 3000
```

---

#  Application Endpoint

Once deployed, the application becomes accessible through the **Load Balancer DNS**.

Example:

```
http://<load-balancer-dns>
```

---

#  Key DevOps Concepts Demonstrated

This project demonstrates several important DevOps principles.

Continuous Integration
Automated builds triggered by GitHub commits.

Continuous Delivery
Docker images automatically pushed to ECR.

Containerization
Application packaged using Docker.

Scalable Infrastructure
EC2 instances managed through Auto Scaling.

High Availability
Application Load Balancer distributes traffic across instances.

Cloud Deployment
Application hosted on AWS infrastructure.

---

#  Learning Outcomes

Through this project, the following skills were developed:

* Building CI/CD pipelines with GitHub Actions
* Containerizing applications using Docker
* Deploying container images to AWS ECR
* Running containers on EC2 instances
* Configuring Application Load Balancers
* Implementing Auto Scaling for reliability
* Managing AWS networking and security groups

---

#  Future Improvements

Possible improvements to enhance this project:

* HTTPS using AWS Certificate Manager
* Custom domain with Route53
* Monitoring with CloudWatch
* Infrastructure as Code using Terraform
* Blue/Green deployments
