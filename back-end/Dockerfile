FROM php:7.4-cli

USER root

RUN apt-get update && \
    apt-get install -y git

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html

COPY composer.json ./

RUN composer update

RUN composer install

COPY . .

CMD [ "php", "-S", "0.0.0.0:8000", "./index.php" ]