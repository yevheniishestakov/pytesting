pipeline {
  agent any
  stages {
    stage ("Build"){
      steps{
        sh 'docker build . -t buildnodejs:0.1'
      }
    }
  }
}
