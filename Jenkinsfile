node{

  stage ("Checkout Git"){
    git credentialsId: 'git-credentials', url: 'https://github.com/yevheniishestakov/pytesting.git', branch: 'main'
  }

  stage ("Build"){
    def dockerImage = docker.build("myimage:0.2")

    def output
    dockerImage.inside{
      output = sh(script: "npm run", returnStdout: true)
      //sh 'npm run test'
    }
    print ("Cmd inside container output: " + output)
  }

}