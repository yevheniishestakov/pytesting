node{

  def dockerImage

  stage ("Checkout Git"){
    git credentialsId: 'git-credentials', url: 'https://github.com/yevheniishestakov/pytesting.git', branch: 'main'
  }

  stage ("Build"){
    dockerImage = docker.build("yevheniishestakov/myimage:0.4")
    dockerImage.inside{
      sh(script: "npm run test", returnStdout: true)
      
    }
    println("executing further")
  }

  stage ("Push to registry"){
    dockerImage.push()
  }

}