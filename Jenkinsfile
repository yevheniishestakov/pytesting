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
    withRegistry('https://https://hub.docker.com/', 'docker-login'){
      dockerImage.push()
    }
  }

}