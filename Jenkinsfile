pipeline {
  agent any
  stages {
    stage ("Build"){
      steps{
        script{
          def dockerImage = docker.build("nodeimage:${env.BUILD_ID}")
        }
      }
    }
  }
}
