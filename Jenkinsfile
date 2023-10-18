node{

  stage ("Checkout Git"){
    bbs_checkout credentialsId: 'bitbucket-credentials', projectName: 'yevhenii-trial', repositoryName: 'ci'
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