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
![Screenshot from 2025-03-26 19-08-31](https://github.com/user-attachments/assets/4159bfcd-fbc9-4d49-980d-526691949576)

### 🔹 2. Containerizing the Application with Docker
![Screenshot from 2025-03-26 19-12-04](https://github.com/user-attachments/assets/7f84710c-9584-4fa6-b0ad-309e08bf4369)

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
![Screenshot from 2025-03-26 19-27-18](https://github.com/user-attachments/assets/8ede6c7f-fece-4fec-9a8a-45b82cd0e303)

---

### 🔹 3. Deploying with Kubernetes
![Screenshot from 2025-03-26 19-16-34](https://github.com/user-attachments/assets/afcc43b2-f415-481e-ae60-211e106be872)

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
![Screenshot from 2025-03-26 19-18-35](https://github.com/user-attachments/assets/aab14e68-9627-4669-80a6-a25d61b08b96)

#### **Access Application**
```sh
http://192.168.49.2:30007/
```
![Screenshot from 2025-03-26 19-20-04](https://github.com/user-attachments/assets/258e9362-8b0d-49f9-8518-38527fde3415)

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
![Screenshot from 2025-03-26 19-22-31](https://github.com/user-attachments/assets/dee760ce-8587-4e39-ace3-811801212b44)

#### **Fix Kubernetes Access in Jenkins**
```sh
mkdir -p /var/lib/jenkins/.kube
sudo cp -i $HOME/.kube/config /var/lib/jenkins/.kube/
sudo chown -R jenkins:jenkins /var/lib/jenkins/.kube
sudo systemctl restart jenkins
```
![Screenshot from 2025-03-26 19-25-06](https://github.com/user-attachments/assets/f880c92b-8ca2-4a8e-8d5d-673dfc50236f)

## 🖥️ OUTPUT:
Here is the result after deployment...
### Home page
![Screenshot from 2025-03-26 19-32-20](https://github.com/user-attachments/assets/4642af23-df2a-4072-8a79-f3a3c7d028f5)
### Products page
![Screenshot from 2025-03-26 19-32-26](https://github.com/user-attachments/assets/f3f96fc4-91a7-48ad-9766-d22b432ce7ef)
### About page
![Screenshot from 2025-03-26 19-32-37](https://github.com/user-attachments/assets/27f5758e-dfa8-4ed9-bd90-5c67aaebd685)
### Contacts page
![Screenshot from 2025-03-26 19-34-34](https://github.com/user-attachments/assets/61fe3a2b-8286-4d5a-a4e7-1939f25390fa)


## 🎯 Conclusion  

This project successfully implements a **CI/CD pipeline** to automate **containerization and deployment** of a React application using **Docker, Jenkins, and Kubernetes**.  

Through this implementation, we have:  

- **Streamlined Development Workflow**: Automates build, test, and deployment stages, reducing manual effort and speeding up delivery.
- **Efficient Containerization**: Using Docker ensures that the application runs consistently across different environments.  
- **Automated Deployment**: Jenkins facilitates continuous integration and deployment, reducing deployment risks.  
- **Scalability & Reliability**: Kubernetes manages container orchestration, ensuring the application remains available and scales as needed.  

