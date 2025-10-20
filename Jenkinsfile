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
                script {
                    docker.build(IMAGE_NAME)
                }
            }
        }

        stage('Stop Existing Container') {
            steps {
                script {
                    sh "docker rm -f ${CONTAINER_NAME} || true"
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh "docker run -d -p 8080:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
                }
            }
        }
    }

    post {
        success {
            echo "✅ CI/CD pipeline completed!"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }
}
