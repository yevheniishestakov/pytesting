def getTags (String string){
    String result = ''
    String tags = string.split(',')
    for (String tag:tags){
      result.plus('-t ' + tag)
    }
    return result
  }

def dockerImage

node{

  stage ("Checkout Git"){
    git credentialsId: 'git-credentials', url: 'https://github.com/yevheniishestakov/pytesting.git', branch: 'main'
    output = sh(script: 'cat dockertags', returnStdout: true)
    print ("Output: " + output)

    tags = getTags(output.substring(5, output.length()-1))
    print ("Tags: " + output.substring(5, output.length())
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