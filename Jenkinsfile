pipeline {
    agent any

    stages {
        stage('Testing Environment') {
            steps {
                    echo "test"
                }
            }
        stage('Build') {
            steps {
		sh 'docker build -t="iestmj/restaurant-project:latest" .'
                }
            }
        stage('Deploy') {
            steps {
		sh 'docker push iestmj/restaurant-project:latest'
            }
        }
    }
}

