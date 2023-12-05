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

    sh (script: dockertags.sh)
    image_name = sh (script: echo $IMAGE_NAME, returnStdout: true)
    print ('Image name: ' + image_name)

    dockerImage = docker.build("registry/"+tags, "--build-arg --no-cache .")
    dockerImage.inside{
      sh(script: "npm run test", returnStdout: true)
      
    }
    println("executing pipeline further")
  }

  stage ("Push to registry"){
    //dockerImage.push()
  }

}