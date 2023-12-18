properties([
  parameters([
    string(name: "json", defaultValue: "")
  ])
])

def dockerImage

node{

  stage ("Checkout Git"){
    git credentialsId: 'git-credentials', url: 'https://github.com/yevheniishestakov/pytesting.git', branch: 'main'
    
  }

  stage ("Build"){

    json_data = readJSON text: params.json
    img_name = json_data['img_name']
    img_ver = json_data['img_ver']

    

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