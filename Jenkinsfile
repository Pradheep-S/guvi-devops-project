pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'pradheep255'
        IMAGE_NAME = 'bata-shoes'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Pradheep-S/guvi-devops-project.git'
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
