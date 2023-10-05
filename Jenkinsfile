pipeline {
  agent any
  stages {
    stage ("Build"){
      steps{
        script{
          def dockerImage = docker.build('nodeimage:0.1')
        }
      }
    }
  }
}
