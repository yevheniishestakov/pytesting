pipeline {
  agent any
  stages {
    stage ("Build"){
      steps{
        script{
          def dockerImage = docker.build('myimage:${env.BUILD_ID}')
        }
      }
    }
  }
}
