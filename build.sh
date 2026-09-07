#!/bin/sh

docker run --rm \
  -v "$HOME/.gradle":/root/.gradle \
  -v "$(pwd)/Java-Geometry-Expert":/app \
  -w /app \
  eclipse-temurin:17 ./gradlew clean jar

cp ./Java-Geometry-Expert/build/libs/Java-Geometry-Expert-0.87.jar ./jgex-web/jgex.jar

cp -r Java-Geometry-Expert/src/main/resources/docs/help/ ./jgex-web/
