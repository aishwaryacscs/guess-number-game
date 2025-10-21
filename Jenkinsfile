pipeline {
    agent any

    environment {
        IMAGE_NAME = "guess-number-game"
        CONTAINER_NAME = "guess-number-app"
        HOST_PORT = "9090"
        CONTAINER_PORT = "3000"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/aishwaryacscs/guess-number-game.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME}:latest ."
                }
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                script {
                    sh "docker rm -f ${CONTAINER_NAME} || true"
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh """
                        docker run -d \
                        -p ${HOST_PORT}:${CONTAINER_PORT} \
                        --name ${CONTAINER_NAME} \
                        ${IMAGE_NAME}:latest
                    """
                }
            }
        }

        stage('Verify') {
            steps {
                script {
                    sh "docker ps"
                    echo "Your app should be accessible at: http://<EC2-IP>:${HOST_PORT}"
                }
            }
        }
    }

    post {
        failure {
            echo "❌ Pipeline failed! Check logs for details."
        }
        success {
            echo "✅ Pipeline completed successfully!"
        }
    }
}
