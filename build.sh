#!/bin/sh

(cd ./Java-Geometry-Expert && nix shell nixpkgs#jdk17 -c ./gradlew clean jar)
cp ./Java-Geometry-Expert/build/libs/Java-Geometry-Expert-0.87.jar ./jgex-web/jgex.jar

cp -r Java-Geometry-Expert/src/main/resources/docs/help/ ./jgex-web/
