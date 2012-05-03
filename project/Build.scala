import sbt._
import Keys._
import PlayProject._

object ApplicationBuild extends Build {

    val appName         = "iThaste"
    val appVersion      = "1.0-SNAPSHOT"

    val appDependencies = Seq(
      // Add your project dependencies here,
    )


    val core = PlayProject(
    appName + "-core", appVersion, path = file("modules/core")
  )
    val security = PlayProject(
    appName + "-security", appVersion, path = file("modules/security")
  ).dependsOn(core)
  

    val admin = PlayProject(
    appName + "-admin", appVersion, path = file("modules/admin")
  ).dependsOn(core,security)
  
    val dashboard = PlayProject(
    appName + "-dashboard", appVersion, path = file("modules/dashboard")
  ).dependsOn(core,security)
  
  
    val main = PlayProject(
    appName, appVersion
  ).dependsOn(
    core, admin, dashboard, security
  )

}
