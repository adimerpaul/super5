<?php

namespace Database\Seeders;

use App\Models\Carousel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CarouselSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void{
        Carousel::create(['imagen' => 'a.jpg']);
        Carousel::create(['imagen' => 'b.jpg']);
        Carousel::create(['imagen' => 'c.jpg']);
    }
}