pipeline {
    agent any

    environment {
        IMAGE_NAME = 'guess-number-game:latest'
        CONTAINER_NAME = 'guess-number-app'
        HOST_PORT = '9090'
        CONTAINER_PORT = '3000'
        EC2_IP = '3.133.91.86'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/aishwaryacscs/guess-number-game.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Stop Existing Container') {
            steps {
                sh "docker rm -f ${CONTAINER_NAME} || true"
            }
        }

        stage('Run Container') {
            steps {
                sh "docker run -d -p ${HOST_PORT}:${CONTAINER_PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline succeeded! Access your app at http://${EC2_IP}:${HOST_PORT}"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }
}

