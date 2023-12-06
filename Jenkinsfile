
def dockerImage

node{

  stage ("Checkout Git"){
    git credentialsId: 'git-credentials', url: 'https://github.com/yevheniishestakov/pytesting.git', branch: 'main'
    
  }

  stage ("Build"){

    def dockervars = readJSON file: 'dockervars.json'
    img_name = dockervars['IMG_NAME']
    img_ver = dockervars['IMG_VER']
    

    dockerImage = docker.build("registry/${img_name}:${img_ver}", "--build-arg --no-cache .")
    dockerImage.inside{
      sh(script: "npm run test", returnStdout: true)
      
    }
    println("executing pipeline further")
  }

  stage ("Push to registry"){
    //dockerImage.push()
  }

}