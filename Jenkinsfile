node{

  def dockerImage

  stage ("Checkout Git"){
    git credentialsId: 'git-credentials', url: 'https://github.com/yevheniishestakov/pytesting.git', branch: 'main'
  }

  stage ("Build"){
    dockerImage = docker.build("customnodeimage")
    dockerImage.inside{
      sh(script: "npm run test", returnStdout: true)
      
    }
  }

  stage ("Push to registry"){
    dockerImage.push('0.3')
  }

}