pipeline {
  agent any
  stages {
    stage ("Build"){
      steps{
        sh '${env.BUILD_ID}'
        script{
          def dockerImage = docker.build('nodeimage:${env.BUILD_ID}')
        }
      }
    }
  }
}
