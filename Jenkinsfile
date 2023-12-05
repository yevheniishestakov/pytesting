node{

  def dockerImage

  stage ("Checkout Git"){
    git credentialsId: 'git-credentials', url: 'https://github.com/yevheniishestakov/pytesting.git', branch: 'main'
    tags = sh(script: 'cat dockertags', returnStdout: true)
    println tags
  }

  stage ("Build"){

    docker.withRegistry('https://yevhenii.jfrog.io/'){
      dockerImage = docker.build("myimage:0.4", "--build-arg --no-cache .")
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