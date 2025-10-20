pipeline {
    agent any

    environment {
        IMAGE_NAME = "guess-number-game:latest"
        CONTAINER_NAME = "guess-number-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/aishwaryacscs/guess-number-game.git'
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
                sh "docker run -d -p 8080:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }

    post {
        success { echo "✅ Pipeline completed!" }
        failure { echo "❌ Pipeline failed!" }
    }
}
