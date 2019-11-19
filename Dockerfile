FROM java:8-jdk-alpine
COPY ./target/project.jar /usr/app/
ENTRYPOINT ["java","-jar","usr/app/project.jar"]
