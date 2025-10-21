pipeline {
    agent any

    environment {
        IMAGE_NAME = "guess-number-game:latest"
        CONTAINER_NAME = "guess-number-app"
        HOST_PORT = "9090"
        CONTAINER_PORT = "3000"
    }

    stages {

        // 1️⃣ Checkout code from GitHub
        stage('Checkout SCM') {
            steps {
                git branch: 'main', url: 'https://github.com/aishwaryacscs/guess-number-game.git'
            }
        }

        // 2️⃣ Build Docker image
        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        // 3️⃣ Stop existing container if running
        stage('Stop Existing Container') {
            steps {
                sh "docker rm -f ${CONTAINER_NAME} || true"
            }
        }

        // 4️⃣ Run the container
        stage('Run Container') {
            steps {
                sh "docker run -d -p ${HOST_PORT}:${CONTAINER_PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}"
            }
        }
    }

    // 5️⃣ Post actions
    post {
        success {
            echo "✅ Pipeline completed! Access your app at: http://3.133.91.86:${HOST_PORT}"
        }
        failure {
            echo "❌ Pipeline failed!"
        }
    }
}
