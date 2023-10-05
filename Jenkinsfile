pipeline {
  agent any
  stages {
    stage ("Build"){
      steps{
        script{
          sh '${env.BUILD_ID}'
          def dockerImage = docker.build('nodeimage:${env.BUILD_ID}')
        }
      }
    }
  }
}
