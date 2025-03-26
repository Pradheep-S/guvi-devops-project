# Bata Shoes - DevOps Project

## 📌 Overview
This project demonstrates a full DevOps pipeline for deploying a **React-based frontend application** using **Docker, Jenkins, and Kubernetes (Minikube)**. The project follows **CI/CD best practices** to automate the build, test, and deployment process.

---

## 📁 Project Structure
```
├── Dockerfile               # Dockerfile to containerize the React app
├── k8s-deployment.yaml      # Kubernetes Deployment & Service definition
├── Jenkinsfile              # CI/CD Pipeline script for Jenkins
├── src/                     # React application source code
├── public/                  # Public assets for the frontend
└── README.md                # This file
```

---

## 🚀 Technologies Used
- **React** - Frontend framework
- **Docker** - Containerization tool
- **DockerHub** - Image repository
- **Jenkins** - CI/CD automation server
- **Kubernetes** (Minikube) - Container orchestration tool

---

## 🛠 Setup & Deployment Process

### 🔹 1. Clone the Repository
```sh
git clone https://github.com/Pradheep-S/guvi-devops-project.git
cd guvi-devops-project
```

### 🔹 2. Containerizing the Application with Docker
**Dockerfile:**
```dockerfile
# Build Stage
FROM node:18 AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
#### **Build and Push the Docker Image**
```sh
docker build -t pradheep255/bata-shoes:latest .
docker login -u pradheep255
docker push pradheep255/bata-shoes:latest
```

---

### 🔹 3. Deploying with Kubernetes
**k8s-deployment.yaml:**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: bata-shoes
spec:
  replicas: 2
  selector:
    matchLabels:
      app: bata-shoes
  template:
    metadata:
      labels:
        app: bata-shoes
    spec:
      containers:
      - name: bata-shoes
        image: pradheep255/bata-shoes:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: bata-shoes-service
spec:
  type: NodePort
  selector:
    app: bata-shoes
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
      nodePort: 30007
```
#### **Apply Kubernetes Deployment**
```sh
kubectl apply -f k8s-deployment.yaml
kubectl get pods -A
kubectl get svc
```
#### **Access Application**
```sh
http://192.168.49.2:30007/
```

---

### 🔹 4. Automating with Jenkins CI/CD
#### **Jenkinsfile:**
```groovy
pipeline {
    agent any
    environment {
        DOCKERHUB_USER = 'pradheep255'
        IMAGE_NAME = 'bata-shoes'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Pradheep-S/guvi-devops-project.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKERHUB_USER/$IMAGE_NAME:latest .'
                }
            }
        }
        stage('Push to DockerHub') {
            steps {
                script {
                    withDockerRegistry([credentialsId: 'docker-seccred', url: '']) {
                        sh 'docker push $DOCKERHUB_USER/$IMAGE_NAME:latest'
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s-deployment.yaml'
            }
        }
    }
}
```

#### **Fix Kubernetes Access in Jenkins**
```sh
mkdir -p /var/lib/jenkins/.kube
sudo cp -i $HOME/.kube/config /var/lib/jenkins/.kube/
sudo chown -R jenkins:jenkins /var/lib/jenkins/.kube
sudo systemctl restart jenkins
```


## 🎯 Conclusion
This project successfully implements a **CI/CD pipeline** to automate **containerization and deployment** of a React application using **Docker, Jenkins, and Kubernetes**.


