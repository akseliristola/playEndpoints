import xerial.sbt.Sonatype.GitHubHosting
import com.lightbend.paradox.markdown.Writer

val playVersion      = "2.9.0-M5"
val akkaActorVersion = "2.8.0-M3"
val circeVersion     = "0.14.5"

inThisBuild(List(
  versionPolicyIntention := Compatibility.BinaryAndSourceCompatible,
  organization := "org.endpoints4s",
  sonatypeProjectHosting := Some(
    GitHubHosting("endpoints4s", "play", "julien@richard-foy.fr")
  ),
  homepage := Some(sonatypeProjectHosting.value.get.scmInfo.browseUrl),
  licenses := Seq(
    "MIT License" -> url("http://opensource.org/licenses/mit-license.php")
  ),
  developers := List(
    Developer("julienrf", "Julien Richard-Foy", "julien@richard-foy.fr", url("http://julien.richard-foy.fr"))
  ),
  scalaVersion := "3.3.0-RC3",

  versionPolicyIgnoredInternalDependencyVersions := Some("^\\d+\\.\\d+\\.\\d+\\+\\d+".r)
))

val `play-server` =
  project
    .in(file("server"))
    .settings(
      name := "play-server",
      // publish / skip := scalaVersion.value.startsWith("3"), // Don’t publish Scala 3 artifacts for now because the algebra is not published for Scala 3
      libraryDependencies ++= Seq(
        ("org.endpoints4s" %% "openapi" % "4.4.0"),
        ("com.typesafe.play" %% "play-netty-server" % playVersion),
        ("org.openmole.endpoints4s" %% "algebra-testkit" % "3.0.0+n" % Test),
        ("org.openmole.endpoints4s" %% "algebra-circe-testkit" % "3.0.0+n" % Test),
        //("org.endpoints4s" %% "algebra-testkit" % "2.0.0" % Test).cross(CrossVersion.for3Use2_13),
        //("org.endpoints4s" %% "algebra-circe-testkit" % "2.0.0" % Test).cross(CrossVersion.for3Use2_13),
        ("com.typesafe.play" %% "play-test" % playVersion % Test),
        ("com.typesafe.play" %% "play-ahc-ws" % playVersion % Test),
        ("com.typesafe.play" %% "twirl-api" % "1.6.0-RC3"),
        ("com.typesafe.play" %% "play-json" % "2.10.0-RC5" % Test),

        // Override transitive dependencies of Play
        ("com.typesafe.akka" %% "akka-slf4j" % akkaActorVersion % Test),
        ("com.typesafe.akka" %% "akka-actor-typed" % akkaActorVersion % Test),
        ("com.typesafe.akka" %% "akka-serialization-jackson" % akkaActorVersion % Test)
      )
    )

val `play-server-circe` =
  project
    .in(file("server-circe"))
    .settings(
      name := "play-server-circe",
    //  publish / skip := scalaVersion.value.startsWith("3"), // Don’t publish Scala 3 artifacts for now because the algebra is not published for Scala 3
      libraryDependencies ++= Seq(
        ("io.circe" %% "circe-parser" % circeVersion),
        ("org.endpoints4s" %% "algebra-circe" % "2.4.0"),
        ("org.endpoints4s" %% "json-schema-circe" % "2.4.0")
      )
    )
    .dependsOn(`play-server`)

val `play-client` =
  project
    .in(file("client"))
    .settings(
      name := "play-client",
    //  publish / skip := scalaVersion.value.startsWith("3"), // Don’t publish Scala 3 artifacts for now because the algebra is not published for Scala 3
      libraryDependencies ++= Seq(
        ("org.endpoints4s" %% "openapi" % "4.4.0"),
        ("com.typesafe.play" %% "play-ahc-ws" % playVersion),
        ("com.typesafe.play" %% "twirl-api" % "1.6.0-RC3"),
        ("com.typesafe.play" %% "play-json" % "2.10.0-RC5" % Test),
        //("org.endpoints4s" %% "algebra-testkit" % "2.0.0" % Test).cross(CrossVersion.for3Use2_13),
        //("org.endpoints4s" %% "algebra-circe-testkit" % "2.0.0" % Test).cross(CrossVersion.for3Use2_13),
        ("org.openmole.endpoints4s" %% "algebra-testkit" % "3.0.0+n" % Test),
        ("org.openmole.endpoints4s" %% "algebra-circe-testkit" % "3.0.0+n" % Test),
        ("org.endpoints4s" %% "json-schema-generic" % "1.10.0" % Test),
        // Override transitive dependencies of Play
        ("com.typesafe.akka" %% "akka-slf4j" % akkaActorVersion % Test),
        ("com.typesafe.akka" %% "akka-actor-typed" % akkaActorVersion % Test),
        ("com.typesafe.akka" %% "akka-serialization-jackson" % akkaActorVersion % Test)
      )
    )

val documentation =
  project.in(file("documentation"))
    .enablePlugins(ParadoxMaterialThemePlugin, ParadoxPlugin, ParadoxSitePlugin, ScalaUnidocPlugin)
    .settings(
      publish / skip := true,
      coverageEnabled := false,
      autoAPIMappings := true,
      Compile / paradoxMaterialTheme := {
        val theme = (Compile / paradoxMaterialTheme).value
        val repository =
          (ThisBuild / sonatypeProjectHosting).value.get.scmInfo.browseUrl.toURI
        theme
          .withRepository(repository)
          .withSocial(repository)
          .withCustomStylesheet("snippets.css")
      },
      paradoxProperties ++= Map(
        "version" -> version.value,
        "scaladoc.base_url" -> s".../${(packageDoc / siteSubdirName).value}",
        "github.base_url" -> s"${homepage.value.get}/blob/v${version.value}"
      ),
      paradoxDirectives += ((_: Writer.Context) =>
        org.endpoints4s.paradox.coordinates.CoordinatesDirective
        ),
      ScalaUnidoc / unidoc / scalacOptions ++= Seq(
        "-implicits",
        "-diagrams",
        "-groups",
        "-doc-source-url",
        s"${homepage.value.get}/blob/v${version.value}€{FILE_PATH}.scala",
        "-sourcepath",
        (ThisBuild / baseDirectory).value.absolutePath
      ),
      ScalaUnidoc / unidoc / unidocProjectFilter := inProjects(
        `play-server`, `play-server-circe`, `play-client`
      ),
      packageDoc / siteSubdirName := "api",
      addMappingsToSiteDir(
        ScalaUnidoc / packageDoc / mappings,
        packageDoc / siteSubdirName
      )
    )

val play =
  project.in(file("."))
    .aggregate(`play-server`, `play-server-circe`, `play-client`, documentation)
    .settings(
      publish / skip := true
    )

Global / onChangedBuildSource := ReloadOnSourceChanges
