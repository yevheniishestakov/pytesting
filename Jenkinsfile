node{

  stage ("Build"){
    dockerImage = docker.build("myimage:0.2")

    def output
    dockerImage.inside{
      output = sh(script: "npm run", returnStdout: true)
      //sh 'npm run test'
    }
    print ("Cmd inside container output: " + output)
  }

}