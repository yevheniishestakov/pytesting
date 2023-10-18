node{

  stage ("Checkout Git"){
    git credentialsId: 'git-credentials', url: 'https://github.com/yevheniishestakov/pytesting.git', branch: 'main'
  }

  stage ("Build"){
    def dockerImage = docker.build("myimage:0.2")

    def output
    dockerImage.inside{
      output = sh(script: "cd /node_modules/ && ls -al", returnStdout: true)
      
    }
    print ("Cmd inside container output: " + output)
  }

}