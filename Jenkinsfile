node{

  stage ("Build"){
    dockerImage = docker.build("myimage:0.2")

    def result = dockerImage.inside{
      sh 'npm run'
      //sh 'npm run test'
    }
    println("Testing result: " + result)
  }

}