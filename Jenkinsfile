node{

  stage ("Build"){
    dockerImage = docker.build("myimage:0.2")

    dockerImage.inside{
      sh 'npm run test'
    }
  }

}