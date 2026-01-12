# Laravel Backend Setup Guide (Quick & Structured)
1. What is PHP, Laravel, Artisan & Middleware?

PHP → Server-side language used to build backend logic.
Laravel → PHP framework providing routing, models, controllers, migrations, and API tools.
Artisan → Laravel’s command-line tool (php artisan ...).
Middleware → Request filters (auth, logging, etc.) used before controllers run.

2. Install Requirements
Install PHP

Download from https://www.php.net/downloads

(Laravel needs PHP 8+)

Install Composer

Dependency manager for PHP
https://getcomposer.org/

Install Laravel CLI
composer global require laravel/installer

3. Create or Use a Laravel Project
Create new project
laravel new backend
cd backend

If project already exists
git clone <repo-url>
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate   # if DB is ready

4. Laravel Folder Structure (Core Parts)
app/
  Http/
    Controllers/  → Logic layer (API actions)
    Middleware/   → Request filters
  Models/         → Database models (User, News)

routes/
  api.php         → API routes
  web.php         → Web routes

database/
  migrations/     → DB table definitions
  seeders/        → Insert test data

5. Create a Model + Migration

Example: User model

php artisan make:model User -m


Laravel generates:

User.php (model)

migration file in database/migrations/

6. Create a Controller & Import the Model

Example: UserController

php artisan make:controller Api/UserController


Inside the controller:

use App\Models\User;

7. Create a Migration (extends Migration parent class)
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    public function up() { ... }
    public function down() { ... }
}


Run all migrations:

php artisan migrate

8. Add API Endpoint
routes/api.php
use App\Http\Controllers\Api\UserController;

Route::get('/users', [UserController::class, 'index']);

9. Start the Development Server
php artisan serve


Visit:

http://localhost:8000

10. Quick Checklist

✔ PHP + Composer installed
✔ Create project (or install existing)
✔ Create model
✔ Create controller & import model
✔ Create migration (extends Migration class)
✔ Add API route
✔ Run migrations
✔ Start server