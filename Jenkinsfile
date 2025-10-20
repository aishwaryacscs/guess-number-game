pipeline {
    agent any

    environment {
        IMAGE_NAME = "guess-number-game:latest"
        CONTAINER_NAME = "guess-number-app"
    }

    stages {
        stage('Checkout') {
            steps {
                // Ensure Jenkins fetches the main branch
                git branch: 'main', url: 'https://github.com/aishwaryacscs/guess-number-game.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Stop Existing Container') {
            steps {
                // Stop and remove any existing container
                sh "docker rm -f ${CONTAINER_NAME} || true"
            }
        }

        stage('Run Container') {
            steps {
                // Run the container on port 8080
                sh "docker run -d -p 8080:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }

    post {
        success {
            echo "✅ CI/CD pipeline completed successfully!"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }
}
