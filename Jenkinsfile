node{

  def dockerImage

  stage ("Checkout Git"){
    git credentialsId: 'git-credentials', url: 'https://github.com/yevheniishestakov/pytesting.git', branch: 'main'
    sh 'pwd'
    sh 'ls -al'
  }

  stage ("Build"){

    docker.withRegistry('https://yevhenii.jfrog.io/'){
      dockerImage = docker.build("myimage:0.4")
    }
    
    
    /*dockerImage.inside{
      sh(script: "npm run test", returnStdout: true)
      
    }*/
    println("executing pipeline further")
  }

  stage ("Push to registry"){
    //dockerImage.push()
  }

}