<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        
        $faker = Faker::create();

        for ($i = 0; $i < 15; $i++) {
            $productData = [
            'name' => implode(" ", $faker->words(3)),
            'description' => $faker->sentence(10),
            'price' => $faker->randomFloat(2, 10, 500),
            'image' => $faker->imageUrl(640, 480, 'products', true),
        ];

        //dd($productData);
        Product::insert($productData);

        }
       
    }
}
