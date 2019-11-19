FROM java:8-jdk-alpine

COPY ./target/MyRestaurant.jar /usr/app/

ENTRYPOINT ["java","-jar","usr/app/MyRestaurant.jar"]

