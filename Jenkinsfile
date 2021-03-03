pipeline {
    agent {
        node {
            label ''
            customWorkspace 'node-zendesk'
        }
    }
    stages {
        stage('Deploy layer') {
            steps {
                withAWS(credentials: 'serverless-deploy-AWS-profile', region: 'us-east-1') {
                    nodejs(nodeJSInstallationName: 'Node12x for AWS Serverless') {
                        sh "serverless config credentials --provider aws --key ${AWS_ACCESS_KEY_ID} --secret ${AWS_SECRET_ACCESS_KEY} --profile serverless_profile --overwrite"
                        sh 'serverless deploy --profile serverless_profile'
                    }
                }
            }
        }
    }
}
