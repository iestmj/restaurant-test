FROM java:8-jdk-alpine

COPY ./target/myrestaurant.jar /usr/app/

ENTRYPOINT ["java","-jar","usr/app/myrestaurant.jar"]

