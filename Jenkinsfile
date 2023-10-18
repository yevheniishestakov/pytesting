node{

  stage ("Checkout Git"){
    git credentialsId: 'git-credentials', url: 'https://github.com/yevheniishestakov/pytesting.git', branch: 'main'
  }

  stage ("Build"){
    
    
    def dockerImage = docker.build("myimage:0.2")

    dockerImage.inside{
      sh(script: "npm run test", returnStdout: true)
      
    }
    
  }

  stage ("Push to registry"){
    docker.withRegistry('index.docker.io', 'docker-login'){
      dockerImage.push()
    }
  }

}