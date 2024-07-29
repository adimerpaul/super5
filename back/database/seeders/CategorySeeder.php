<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void{

        Category::create(['name'=>'BEBIDAS','icon'=>'las la-wine-bottle']);
        Category::create(['name'=>'CAFE CALIENTE', 'icon' => 'las la-coffee']);
        Category::create(['name'=>'CAFE FRIO','icon' => 'las la-mug-hot']);
        Category::create(['name'=>'CAFE CON LICOR','icon' => 'las la-wine-glass-alt']);
        Category::create(['name'=>'JUGOS','icon' => 'las la-blender']);
        Category::create(['name'=>'JARRA','icon' => 'las la-glass-whiskey']);
        Category::create(['name'=>'GASEOSAS','icon' => 'las la-wine-bottle']);
        Category::create(['name'=>'DESAYUNOS','icon' => 'las la-bacon']);
        Category::create(['name'=>'OMELETTES','icon' => 'las la-bread-slice']);
        Category::create(['name'=>'HELADOS','icon' => 'las la-ice-cream']);
        Category::create(['name'=>'HELADO CLASICO','icon' => 'las la-ice-cream']);
        Category::create(['name'=>'CHOCOMANIA','icon' => 'las la-cookie']);
        Category::create(['name'=>'ICE BRINDYS','icon' => 'las la-cocktail']);
        Category::create(['name'=>'HELADO SABORES','icon' => 'las la-ice-cream']);
        Category::create(['name'=>'COMIDA RAPIDA','icon' => 'las la-hotdog']);
        Category::create(['name'=>'PIZZAS','icon' => 'las la-pizza-slice']);
        Category::create(['name'=>'GRILL','icon' => 'las la-bacon']);
        Category::create(['name'=>'HAMBURGUESAS','icon' => 'las la-hamburger']);
        Category::create(['name'=>'PLATOS','icon' => 'las la-drumstick-bite']);
        Category::create(['name'=>'ENSALADAS','icon' => 'las la-apple-alt']);
        Category::create(['name'=>'SANDWICHS','icon' => 'las la-hamburger']);
        Category::create(['name'=>'MASAS DULCES','icon' => 'las la-cookie']);
        Category::create(['name'=>'MASAS SALADAS','icon' => 'las la-apple-alt']);
        Category::create(['name'=>'TORTAS','icon' => 'las la-pepper-hot']);
        Category::create(['name'=>'POSTRES','icon' => 'las la-ice-cream']);
        Category::create(['name'=>'ALMUERZO','icon' => 'las la-drumstick-bite']);
        Category::create(['name'=>'JUGUETES','icon' => 'las la-gamepad']);
    }
}
