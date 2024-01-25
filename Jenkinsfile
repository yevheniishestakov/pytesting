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
      def result = sh(script: '''
        ssh yevhenii_shestakov@34.29.167.183 << EOF
        echoe testing >> /var/tmp/test.txt
        echo second test >> /var/tmp/test.txt
      << EOF ''', returnStatus: true)
      print result
    }
    

  }

  stage ("Push to registry"){
    //dockerImage.push()
  }

}