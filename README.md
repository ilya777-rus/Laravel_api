# Установка Laravel проекта

Это проект на базе Laravel. Следуйте приведённым ниже шагам для его настройки и запуска.

## Требования

- PHP 8.2
- Composer
- Node.js и npm
- База данных ( MySQL)

## Шаги для установки

1. Клонируйте репозиторий и перейдите в директорию проекта.

2. Установите зависимости PHP:
   ```bash
   composer install
3. Скопируйте файл конфигурации .env:
   ```bash
   cp .env.example .env
4. Сгенерируйте уникальный ключ приложения:
    ```bash
   php artisan key:generate
5. Настройте файл .env с данными вашей базы данных (DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD).
6. Запустите миграции для настройки базы данных:
    ```bash
   php artisan migrate
7. Запустите локальный сервер:
   ```bash
   php artisan serve
8. Установите Node.js зависимости:
   ```bash
   npm install
9. Скомпилируйте ресурсы:
    ```bash
   npm run dev

   
