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
		sh 'docker build -t="iestmj/myrestaurant:latest" .'
                }
            }
        stage('Deploy') {
            steps {
		sh 'docker push iestmj/myrestaurant:latest'
            }
        }
    }
}

