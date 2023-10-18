node{

  def dockerImage

  stage ("Checkout Git"){
    git credentialsId: 'git-credentials', url: 'https://github.com/yevheniishestakov/pytesting.git', branch: 'main'
  }

  stage ("Build"){
    dockerImage = docker.build("myimage:0.2")
    dockerImage.inside{
      sh(script: "npm run test", returnStdout: true)
      
    }
  }

  stage ("Push to registry"){
    docker.withRegistry('https://index.docker.io/yevheniishestakov/yevhenii_repo', 'docker-login'){
      dockerImage.push()
    }
  }

}