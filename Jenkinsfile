node {
    stage('Build') {
        def dockerImage = docker.build("nodeimage:${env.BUILD_ID}")
    }
}
