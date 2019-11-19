FROM java:8-jdk-alpine

COPY ./target/restaurant.jar /usr/app/

ENTRYPOINT ["java","-jar","usr/app/restaurant.jar"]

