properties([
  parameters([
    string(name: "json", defaultValue: ""),
    string(name: "status", defaultValue: "")
  ])
])

def dockerImage

node{

  if (params.status != 'MERGED'){
    print ("Not merged")
  }

  stage ("Checkout Git"){
    git credentialsId: 'git-credentials', url: 'https://github.com/yevheniishestakov/pytesting.git', branch: 'main'
    
  }

  stage ("Build"){

    sshagent(credentials: ['ssh-pviate-key-gcp']){
      sh '''
        ssh yevhenii_shestakov@34.121.238.49 << EOF
        echo testing >> /var/tmp/test.txt
        echo second test >> /var/tmp/test.txt
      << EOF '''
    }

  }

  stage ("Push to registry"){
    //dockerImage.push()
  }

}