def getTags (String string){
  def result = ''
  String[] tags = string.split(',')

  for (String tag:tags){
    result = result + '-t ' + tag + ' '
  }
  return result
}

def dockerImage

node{

  stage ("Checkout Git"){
    git credentialsId: 'git-credentials', url: 'https://github.com/yevheniishestakov/pytesting.git', branch: 'main'
    
  }

  stage ("Build"){

    output = sh(script: 'cat dockertags', returnStdout: true)
    print ("Output: " + output)

    String tags = output.replaceAll(',', ' -t ')
    print ("Tags: " + tags)

    dockerImage = docker.build("yevheniishestakov/myimage:0.0.1", "--build-arg --no-cache .")
    dockerImage.inside{
      sh(script: "npm run test", returnStdout: true)
      
    }
    println("executing pipeline further")
  }

  stage ("Push to registry"){
    //dockerImage.push()
  }

}