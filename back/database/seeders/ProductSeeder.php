<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void{
//        Category::create(['name'=>'BEBIDAS','icon'=>'las la-wine-bottle']);
//        Category::create(['name'=>'CAFE CALIENTE', 'icon' => 'las la-coffee']);
//        Category::create(['name'=>'CAFE FRIO','icon' => 'las la-mug-hot']);
//        Category::create(['name'=>'CAFE CON LICOR','icon' => 'las la-wine-glass-alt']);
//        Category::create(['name'=>'JUGOS','icon' => 'las la-blender']);
//        Category::create(['name'=>'JARRA','icon' => 'las la-glass-whiskey']);
//        Category::create(['name'=>'GASEOSAS','icon' => 'las la-wine-bottle']);
//        Category::create(['name'=>'DESAYUNOS','icon' => 'las la-bacon']);
//        Category::create(['name'=>'OMELETTES','icon' => 'las la-bread-slice']);
//        Category::create(['name'=>'HELADOS','icon' => 'las la-ice-cream']);
//        Category::create(['name'=>'HELADO CLASICO','icon' => 'las la-ice-cream']);
//        Category::create(['name'=>'CHOCOMANIA','icon' => 'las la-cookie']);
//        Category::create(['name'=>'ICE BRINDYS','icon' => 'las la-cocktail']);
//        Category::create(['name'=>'HELADO SABORES','icon' => 'las la-ice-cream']);
//        Category::create(['name'=>'COMIDA RAPIDA','icon' => 'las la-hotdog']);
//        Category::create(['name'=>'PIZZAS','icon' => 'las la-pizza-slice']);
//        Category::create(['name'=>'GRILL','icon' => 'las la-bacon']);
//        Category::create(['name'=>'HAMBURGUESAS','icon' => 'las la-hamburger']);
//        Category::create(['name'=>'PLATOS','icon' => 'las la-drumstick-bite']);
//        Category::create(['name'=>'ENSALADAS','icon' => 'las la-apple-alt']);
//        Category::create(['name'=>'SANDWICHS','icon' => 'las la-hamburger']);
//        Category::create(['name'=>'MASAS DULCES','icon' => 'las la-cookie']);
//        Category::create(['name'=>'MASAS SALADAS','icon' => 'las la-apple-alt']);
//        Category::create(['name'=>'TORTAS','icon' => 'las la-pepper-hot']);
//        Category::create(['name'=>'POSTRES','icon' => 'las la-ice-cream']);
//        Category::create(['name'=>'ALMUERZO','icon' => 'las la-drumstick-bite']);
//        Category::create(['name'=>'JUGUETES','icon' => 'las la-gamepad']);
//
//
//        DB::table('productos')->insert([
//            ["nombre"=>"CAFE","descripcion"=>"Cafe negro","precio"=>7,"rubro_id"=>'1',"imagen"=>"café-800x400.jpg"],
//            ["nombre"=>"TE","descripcion"=>"Te","precio"=>6,"rubro_id"=>'1',"imagen"=>"descarga.jpg"],
//            ["nombre"=>"MATES","descripcion"=>"Mate Natural","precio"=>6,"rubro_id"=>'1',"imagen"=>"79a8c10f-e9a5-495f-bc5f-f2f7c6c94400_16-9-aspect-ratio_default_0.jpg"],
//            ["nombre"=>"TE CON TE ","descripcion"=>"Te con singani","precio"=>15,"rubro_id"=>'1',"imagen"=>"singani-te-con-te-san-juan.webp"],
//            ["nombre"=>"TODDY CON LECHE ","descripcion"=>"Toddy con leche","precio"=>12,"rubro_id"=>'1',"imagen"=>"descarga (1).jpg"],
//
//            ["nombre"=>"CAPUCHINO ","descripcion"=>"Cafe, crema y canela","precio"=>12,"rubro_id"=>'2',"imagen"=>"descarga (2).jpg"],
//            ["nombre"=>"MOKACHINO ","descripcion"=>"Cafe, chocolate y crema","precio"=>14,"rubro_id"=>'2',"imagen"=>"crema-cafe-chocolate.jpg"],
//            ["nombre"=>"MOKACHINO ESPUMOSO","descripcion"=>"Cafe, leche espumante y baño de chocolate","precio"=>15,"rubro_id"=>'2',"imagen"=>"cappuccino-chocolate-caliente-cafe-cafe-frappe-frappuccino.jpg"],
//            ["nombre"=>"CAFE CORTADO ","descripcion"=>"Cafe con chorrito de leche evaporada","precio"=>12,"rubro_id"=>'2',"imagen"=>"cafx-con-leche-en-las-rocas.jpeg_1902800913.webp"],
//            ["nombre"=>"CAFE CARAMELO","descripcion"=>"Cafe, dulce de leche y crema","precio"=>16,"rubro_id"=>'2',"imagen"=>"maxresdefault.jpg"],
//
//            ["nombre"=>"CAPUCHINO HELADO","descripcion"=>"Frapeado de cafe, helado de capuchino y crema","precio"=>23,"rubro_id"=>'3',"imagen"=>"cafe_frappe.jpg"],
//            ["nombre"=>"FRAPUCHINO","descripcion"=>"Frapeado de cafe, chocolate y crema","precio"=>23,"rubro_id"=>'3',"imagen"=>"frapu.jpg"],
//            ["nombre"=>"TE HELADO","descripcion"=>"Frapeado de te y limon","precio"=>18,"rubro_id"=>'3',"imagen"=>"tehelado.jpg"],
//            ["nombre"=>"FRAPPE CON YOGURT","descripcion"=>"Frapeado de yogurt con frutas naturales de la temporada","precio"=>23,"rubro_id"=>'3',"imagen"=>"frappeyogurt.jpg"],
//            ["nombre"=>"FRAPUCHINO","descripcion"=>"Frapeado de cafe, chocolate y crema","precio"=>23,"rubro_id"=>'3',"imagen"=>"receta-de-moka-frappe-1.jpg"],
//            ["nombre"=>"TE HELADO","descripcion"=>"Frapeado de te y limon","precio"=>18,"rubro_id"=>'3',"imagen"=>"default.jpg"],
//            ["nombre"=>"FRAPPE CON YOGURT","descripcion"=>"Frapeado de yogurt con frutas naturales de la temporada","precio"=>23,"rubro_id"=>'3',"imagen"=>"default.jpg"],
//
//            ["nombre"=>"LICOR DE DURAZNO","descripcion"=>"Licor de durazno, cafe expresso y crema","precio"=>22,"rubro_id"=>'4',"imagen"=>"licordur.jpg"],
//            ["nombre"=>"CAFE IRLANDES","descripcion"=>"Cafe con whisky y crema","precio"=>22,"rubro_id"=>'4',"imagen"=>"cafeirlandes.jpg"],
//            ["nombre"=>"CAFE FRANCES","descripcion"=>"Con coñac, crema y canela molida","precio"=>22,"rubro_id"=>'4',"imagen"=>"cafefrances.jpg"],
//
//            ["nombre"=>"LIMON C/AGUA","descripcion"=>"Jugo de limon con agua","precio"=>8.5,"rubro_id"=>'5',"imagen"=>"limonada.jpg"],
//            ["nombre"=>"LIMON C/LECHE","descripcion"=>"Jugo de limon con leche","precio"=>10,"rubro_id"=>'5',"imagen"=>"limonleche.jpg"],
//            ["nombre"=>"FRUTILLA C/AGUA","descripcion"=>"Jugo de Frutilla con agua","precio"=>8.5,"rubro_id"=>'5',"imagen"=>"frutilla.jpg"],
//            ["nombre"=>"FRUTILLA C/LECHE","descripcion"=>"Jugo de Frutilla con leche","precio"=>10,"rubro_id"=>'5',"imagen"=>"frutillaleche.jpg"],
//            ["nombre"=>"DURAZNO C/AGUA","descripcion"=>"Jugo de Durazno con agua","precio"=>10,"rubro_id"=>'5',"imagen"=>"durazno.jpg"],
//            ["nombre"=>"DURAZNO C/LECHE","descripcion"=>"Jugo de Durazno con leche","precio"=>12,"rubro_id"=>'5',"imagen"=>"duraznoleche.jpg"],
//            ["nombre"=>"PAPAYA C/AGUA","descripcion"=>"Jugo de papaya con agua","precio"=>8.5,"rubro_id"=>'5',"imagen"=>"papaya.jpg"],
//            ["nombre"=>"PAPAYA C/LECHE","descripcion"=>"Jugo de papaya con leche","precio"=>10,"rubro_id"=>'5',"imagen"=>"papayaleche.jpg"],
//            ["nombre"=>"PLATANO C/AGUA","descripcion"=>"Jugo de platano con agua","precio"=>8.5,"rubro_id"=>'5',"imagen"=>"platano.jpg"],
//            ["nombre"=>"PLATANO C/LECHE","descripcion"=>"Jugo de platano con leche","precio"=>10,"rubro_id"=>'5',"imagen"=>"platanoleche.jpg"],
//            ["nombre"=>"PIÑA C/AGUA","descripcion"=>"Jugo de piña con agua","precio"=>0,"rubro_id"=>'5',"imagen"=>"piña.jpg"],
//            ["nombre"=>"PIÑA C/LECHE","descripcion"=>"Jugo de piña con leche","precio"=>0,"rubro_id"=>'5',"imagen"=>"piñaleche.jpg"],
//            ["nombre"=>"NARANJA C/AGUA","descripcion"=>"Jugo de naranja con agua","precio"=>8.5,"rubro_id"=>'5',"imagen"=>"naranja.jpg"],
//            ["nombre"=>"NARANJA C/LECHE","descripcion"=>"Jugo de naranja con leche","precio"=>10,"rubro_id"=>'5',"imagen"=>"naranjaleche.jpg"],
//            ["nombre"=>"LIMA C/AGUA","descripcion"=>"Jugo de lima con agua","precio"=>0,"rubro_id"=>'5',"imagen"=>"lima.jpg"],
//            ["nombre"=>"LIMA C/LECHE","descripcion"=>"Jugo de lima con leche","precio"=>0,"rubro_id"=>'5',"imagen"=>"limaleche.jpg"],
//            ["nombre"=>"MANZANA C/AGUA","descripcion"=>"Jugo de manzana con agua","precio"=>8.5,"rubro_id"=>'5',"imagen"=>"manzana.jpg"],
//            ["nombre"=>"MANZANA C/LECHE","descripcion"=>"Jugo de manzana con leche","precio"=>10,"rubro_id"=>'5',"imagen"=>"manzanaleche.jpg"],
//            ["nombre"=>"TUMBO C/AGUA","descripcion"=>"Jugo de tumbo con agua","precio"=>0,"rubro_id"=>'5',"imagen"=>"tumbo.jpg"],
//            ["nombre"=>"TUMBO C/LECHE","descripcion"=>"Jugo de tumbo con leche","precio"=>0,"rubro_id"=>'5',"imagen"=>"tumboleche.jpg"],
//            ["nombre"=>"MARACUYA C/AGUA","descripcion"=>"Jugo de maracuya con agua","precio"=>0,"rubro_id"=>'5',"imagen"=>"maracuya.jpg"],
//            ["nombre"=>"MARACUYA C/LECHE","descripcion"=>"Jugo de maracuya con leche","precio"=>0,"rubro_id"=>'5',"imagen"=>"maracuyaleche.jpg"],
//            ["nombre"=>"UVA C/AGUA","descripcion"=>"Jugo de uva con agua","precio"=>0,"rubro_id"=>'5',"imagen"=>"uva.jpg"],
//            ["nombre"=>"UVA C/LECHE","descripcion"=>"Jugo de uva con leche","precio"=>0,"rubro_id"=>'5',"imagen"=>"uvaleche.jpg"],
//
//            ["nombre"=>"JARRA DE LIMON","descripcion"=>"Jugo de limon","precio"=>35,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"1/2 JARRA DE LIMON","descripcion"=>"Jugo de limon","precio"=>25,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"JARRA DE FRUTILLA","descripcion"=>"Jugo de Frutilla","precio"=>35,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"1/2 JARRA DE FRUTILLA","descripcion"=>"Jugo de Frutilla","precio"=>25,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"JARRA DE DURAZNO","descripcion"=>"Jugo de Durazno","precio"=>35,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"1/2 JARRA DE DURAZNO","descripcion"=>"Jugo de Durazno","precio"=>25,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"JARRA DE PAPAYA","descripcion"=>"Jugo de papaya","precio"=>35,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"1/2 JARRA DE PAPAYA","descripcion"=>"Jugo de papaya","precio"=>25,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"JARRA DE PLATANO","descripcion"=>"Jugo de platano","precio"=>35,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"1/2 JARRA DE PLATANO","descripcion"=>"Jugo de platano","precio"=>25,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"JARRA DE PIÑA","descripcion"=>"Jugo de piña","precio"=>0,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"1/2 JARRA DE PIÑA","descripcion"=>"Jugo de piña","precio"=>0,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"JARRA DE NARANJA","descripcion"=>"Jugo de naranja","precio"=>35,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"1/2 JARRA DE NARANJA","descripcion"=>"Jugo de naranja","precio"=>25,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"JARRA DE LIMA","descripcion"=>"Jugo de lima","precio"=>0,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"1/2 JARRA DE LIMA","descripcion"=>"Jugo de lima","precio"=>0,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"JARRA DE MANZANA","descripcion"=>"Jugo de manzana","precio"=>35,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"1/2 JARRA DE MANZANA","descripcion"=>"Jugo de manzana","precio"=>25,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"JARRA DE TUMBO","descripcion"=>"Jugo de tumbo","precio"=>0,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"1/2 JARRA DE TUMBO","descripcion"=>"Jugo de tumbo","precio"=>0,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"JARRA DE MARACUYA","descripcion"=>"Jugo de maracuya","precio"=>0,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"1/2 JARRA DE MARACUYA","descripcion"=>"Jugo de maracuya","precio"=>0,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"JARRA DE UVA","descripcion"=>"Jugo de uva","precio"=>0,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//            ["nombre"=>"1/2 JARRA DE UVA","descripcion"=>"Jugo de uva","precio"=>0,"rubro_id"=>'6',"imagen"=>"default.jpg"],
//
//            ["nombre"=>"COCA COLA 500 ml","descripcion"=>"","precio"=>0,"rubro_id"=>'7',"imagen"=>"default.jpg"],
//            ["nombre"=>"FANTA 500 ml","descripcion"=>"","precio"=>0,"rubro_id"=>'7',"imagen"=>"default.jpg"],
//
//            ["nombre"=>"CONTINENTAL","descripcion"=>"Tostadas o media luna, mantequilla, queso, mermelada, te o cafe (puro o con leche)","precio"=>30,"rubro_id"=>'8',"imagen"=>"default.jpg"],
//            ["nombre"=>"AMERICANO","descripcion"=>"Zumo de naranja, lima o pomelo o tocino con huevos al gusto, tostadas, pan, media luna, mantequilla, mermelada, te o cafe(puro o con leche), ensalada de frutas","precio"=>42,"rubro_id"=>'8',"imagen"=>"default.jpg"],
//            ["nombre"=>"CRIOLLO","descripcion"=>"Lomito de res con chorrellana, huevo frito, pan y papas fritas, acompañados de jugo o cafe","precio"=>39,"rubro_id"=>'8',"imagen"=>"default.jpg"],
//
//            ["nombre"=>"OMELETTE MIXTO","descripcion"=>"Con jamon y queso","precio"=>25,"rubro_id"=>'9',"imagen"=>"default.jpg"],
//            ["nombre"=>"OMELETTE DE POLLO","descripcion"=>"pechuga de pollo y papas fritas","precio"=>25,"rubro_id"=>'9',"imagen"=>"default.jpg"],
//            ["nombre"=>"OMELETTE DE VERDURAS","descripcion"=>"Variedad de verduras frescas, acompañado con papas fritas","precio"=>25,"rubro_id"=>'9',"imagen"=>"default.jpg"],
//
//            ["nombre"=>"KALHUA ICE CREAM","descripcion"=>"Dos porciones de helado de moca, licor de kalhua, chocolate caliente, crema y nuez picada","precio"=>30,"rubro_id"=>'10',"imagen"=>"default.jpg"],
//            ["nombre"=>"SUPER HELADO","descripcion"=>"Ensalada de fruta,tres porciones de helado al gusto,salsa de fresa, nueces, manzana, crema, galleta y cherry","precio"=>35,"rubro_id"=>'10',"imagen"=>"default.jpg"],
//            ["nombre"=>"CARNAVALERO","descripcion"=>"Ensalada de frutas, gelatina picada, helado de coco, vainilla y frutilla, crema, salsa de fresa y confites de color","precio"=>28,"rubro_id"=>'10',"imagen"=>"default.jpg"],
//            ["nombre"=>"CARNAVALERO JR","descripcion"=>"Ensalada de frutas, gelatina picada, helado de chocolote y frutilla, crema, salsa de fresa y confites de color en un vaso infantil","precio"=>23,"rubro_id"=>'10',"imagen"=>"default.jpg"],
//            ["nombre"=>"SUPER OREO","descripcion"=>"Tres porciones de helado oreo, cafe frio, crema y galletas oreo","precio"=>35,"rubro_id"=>'10',"imagen"=>"default.jpg"],
//            ["nombre"=>"CARIBE","descripcion"=>"Piñas al jugo, tres porciones de helado, salsa de fresas, nueces, piñas, galletas y cherry","precio"=>31,"rubro_id"=>'10',"imagen"=>"default.jpg"],
//            ["nombre"=>"REFRESQUIN","descripcion"=>"Batido de helado de canela con agua mineral y limon","precio"=>0,"rubro_id"=>'10',"imagen"=>"default.jpg"],
//            ["nombre"=>"TORTA DE HELADO","descripcion"=>"Porcion de torta a gusto, dos porciones de helado, crema, cherry y durazno","precio"=>32,"rubro_id"=>'10',"imagen"=>"default.jpg"],
//// CLASICO
//            ["nombre"=>"MELVA","descripcion"=>"Papaya picada, gelatina, helado de chocolate, frutilla y vainilla, rodajas de duraznos, crema y cherry","precio"=>28,"rubro_id"=>'11',"imagen"=>"default.jpg"],
//            ["nombre"=>"VIENESA","descripcion"=>"Cafe frio, helado de vainilla, crema, galleta y cherry","precio"=>28,"rubro_id"=>'11',"imagen"=>"default.jpg"],
//            ["nombre"=>"SUNDAE","descripcion"=>"Durazno Picado, helado de vainilla, baño de chocolate caliente, crema y cherry ","precio"=>28,"rubro_id"=>'11',"imagen"=>"default.jpg"],
//            ["nombre"=>"BANANA SPLIT","descripcion"=>"Banana, helado de chocolate, frutilla y vainilla, crema y baño de cholotate, nueces picadas, cherry, piña y uva","precio"=>28,"rubro_id"=>'11',"imagen"=>"default.jpg"],
//            ["nombre"=>"ICE CREAM SODA","descripcion"=>"Helado de vainilla, salsa de fresas y sprite","precio"=>28,"rubro_id"=>'11',"imagen"=>"default.jpg"],
//            ["nombre"=>"MILK SHAKE","descripcion"=>"Tres porciones de helado al gusto batido con leche y crema","precio"=>28,"rubro_id"=>'11',"imagen"=>"default.jpg"],
//            ["nombre"=>"ESCOLAR","descripcion"=>"Helado de frutilla y vainilla, crema, baño de chocolate, cherry y galleta","precio"=>25,"rubro_id"=>'11',"imagen"=>"default.jpg"],
//            ["nombre"=>"SURTIDO","descripcion"=>"Tres porciones de helado, crema y cherry","precio"=>25,"rubro_id"=>'11',"imagen"=>"default.jpg"],
////CHOCOMANIA
//            ["nombre"=>"CHOCOLATE HELADO","descripcion"=>"Chocolate frio, helado de chocolate, baño de chocolate caliente y crema","precio"=>28,"rubro_id"=>'12',"imagen"=>"default.jpg"],
//            ["nombre"=>"CHOCOLATE FLOSH","descripcion"=>"Helado de chocolate con crema baño de chocolate caliente y cherry","precio"=>28,"rubro_id"=>'12',"imagen"=>"default.jpg"],
////ICE BRINDIS
//            ["nombre"=>"SUPER WISKY","descripcion"=>"Batido de helado de chirimoya con wisky, crema, chocolate rallado, cherry, uva y piña","precio"=>35,"rubro_id"=>'13',"imagen"=>"default.jpg"],
//            ["nombre"=>"BOMBON IRLANDES","descripcion"=>"Batido helado dulce de leche y chocolate con ron, crema, chocolate reallado, cherry, uva y piña","precio"=>35,"rubro_id"=>'13',"imagen"=>"default.jpg"],
//            ["nombre"=>"UNIVERSITARIO","descripcion"=>"Helado de tumbo batido con singani brandy, limon, crema, piña y cherry","precio"=>33,"rubro_id"=>'13',"imagen"=>"default.jpg"],
//            ["nombre"=>"JAMAICA","descripcion"=>"Batido de helado de limon con licor de menta, crema, coco rallado, cherry, uva y piña","precio"=>33,"rubro_id"=>'13',"imagen"=>"default.jpg"],
//            ["nombre"=>"RUSA","descripcion"=>"Cerezas maceradas al vodka, helado de frutilla, salsa de fresas, crema y cherry","precio"=>35,"rubro_id"=>'13',"imagen"=>"default.jpg"],
//
//            ["nombre"=>"FRUTILLA","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"VAINILLA","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"DULCE DE LECHE","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"OSO CREMOSO","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"CHICLE","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"SNICKER","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"MANDARINA","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"MOCA","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"CANELA","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"PISTACHO","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"CHOCOLATE","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"CHIRIMOYA","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"GRANIZADO","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"LIMON","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"PAI DE LIMON","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"KIWI","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"MORA","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"PASAS AL RON","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"COCO","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"MANJAR CON NUEZ","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"CAPUCHINO","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"MARACUYA","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"OREJON","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"TUMBO","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"DURAZNO","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"NUEZ","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"],
//            ["nombre"=>"CHOOCOLATE BLANCO","descripcion"=>"","precio"=>0,"rubro_id"=>'14',"imagen"=>"default.jpg"]
//        ]);

        //        Product::create([
//            'descripcion' => 'Sigue evolucionando en velocidad con un calzado de carrera hecho para ayudarte a alcanzar nuevos objetivos y récords. Mejora la comodidad y la transpirabilidad con una parte superior rediseñada. Ya sea en una carrera de 10 km o en un maratón, este modelo, al igual que su versión anterior',
//            'titulo' => 'Nike Vaporfly NEXT',
//            'precio' => 13,
//            'masVendido' => 'si',
//            'imagen1' => 'CU4111_301_A_PREM.jpg',
//            'imagen2' => 'CU4111_301_E_PREM.jpg',
//            'imagen3' => 'CU4111_301_F_PREM.jpg',
//            'imagen4' => '457057-800-800.webp',
//            'item1' => '',
//            'item2' => '',
//            'item3' => '',
//            'item4' => '',
//            'item5' => '',
//            'item6' => '',
//            'item7' => '',
//            'item8' => '',
//            'item9' => '',
//            'item10' => '',
//            'precioAnterior' => 300000,
//            'stock' => 80,
//            'category_id' => 1,
//            'sub_category_id' => 1
//        ]);

//        db truncate table products;
        Product::truncate();
        Product::insert([
            ['titulo' => 'CAFE', 'descripcion' => 'Cafe negro', 'precio' => 7, 'category_id' => 1, 'imagen1' => 'café-800x400.jpg'],
            ['titulo' => 'TE', 'descripcion' => 'Te', 'precio' => 6, 'category_id' => 1, 'imagen1' => 'descarga.jpg'],
            ['titulo' => 'MATES', 'descripcion' => 'Mate Natural', 'precio' => 6, 'category_id' => 1, 'imagen1' => '79a8c10f-e9a5-495f-bc5f-f2f7c6c94400_16-9-aspect-ratio_default_0.jpg'],
            ['titulo' => 'TE CON TE ', 'descripcion' => 'Te con singani', 'precio' => 15, 'category_id' => 1, 'imagen1' => 'singani-te-con-te-san-juan.webp'],
            ['titulo' => 'TODDY CON LECHE ', 'descripcion' => 'Toddy con leche', 'precio' => 12, 'category_id' => 1, 'imagen1' => 'descarga (1).jpg'],

            ['titulo' => 'CAPUCHINO ', 'descripcion' => 'Cafe, crema y canela', 'precio' => 12, 'category_id' => 2, 'imagen1' => 'descarga (2).jpg'],
            ['titulo' => 'MOKACHINO ', 'descripcion' => 'Cafe, chocolate y crema', 'precio' => 14, 'category_id' => 2, 'imagen1' => 'crema-cafe-chocolate.jpg'],
            ['titulo' => 'MOKACHINO ESPUMOSO', 'descripcion' => 'Cafe, leche espumante y baño de chocolate', 'precio' => 15, 'category_id' => 2, 'imagen1' => 'cappuccino-chocolate-caliente-cafe-cafe-frappe-frappuccino.jpg'],
            ['titulo' => 'CAFE CORTADO ', 'descripcion' => 'Cafe con chorrito de leche evaporada', 'precio' => 12, 'category_id' => 2, 'imagen1' => 'cafx-con-leche-en-las-rocas.jpeg_1902800913.webp'],
            ['titulo' => 'CAFE CARAMELO', 'descripcion' => 'Cafe, dulce de leche y crema', 'precio' => 16, 'category_id' => 2, 'imagen1' => 'maxresdefault.jpg'],

            ['titulo' => 'CAPUCHINO HELADO', 'descripcion' => 'Frapeado de cafe, helado de capuchino y crema', 'precio' => 23, 'category_id' => 3, 'imagen1' => 'cafe_frappe.jpg'],
            ['titulo' => 'FRAPUCHINO', 'descripcion' => 'Frapeado de cafe, chocolate y crema', 'precio' => 23, 'category_id' => 3, 'imagen1' => 'frapu.jpg'],
            ['titulo' => 'TE HELADO', 'descripcion' => 'Frapeado de te y limon', 'precio' => 18, 'category_id' => 3, 'imagen1' => 'tehelado.jpg'],
            ['titulo' => 'FRAPPE CON YOGURT', 'descripcion' => 'Frapeado de yogurt con frutas naturales de la temporada', 'precio' => 23, 'category_id' => 3, 'imagen1' => 'frappeyogurt.jpg'],
            ['titulo' => 'FRAPUCHINO', 'descripcion' => 'Frapeado de cafe, chocolate y crema', 'precio' => 23, 'category_id' => 3, 'imagen1' => 'receta-de-moka-frappe-1.jpg'],
            ['titulo' => 'TE HELADO', 'descripcion' => 'Frapeado de te y limon', 'precio' => 18, 'category_id' => 3, 'imagen1' => 'default.jpg'],
            ['titulo' => 'FRAPPE CON YOGURT', 'descripcion' => 'Frapeado de yogurt con frutas naturales de la temporada', 'precio' => 23, 'category_id' => 3, 'imagen1' => 'default.jpg'],

            ['titulo' => 'LICOR DE DURAZNO', 'descripcion' => 'Licor de durazno, cafe expresso y crema', 'precio' => 22, 'category_id' => 4, 'imagen1' => 'licordur.jpg'],
            ['titulo' => 'CAFE IRLANDES', 'descripcion' => 'Cafe con whisky y crema', 'precio' => 22, 'category_id' => 4, 'imagen1' => 'cafeirlandes.jpg'],
            ['titulo' => 'CAFE FRANCES', 'descripcion' => 'Con coñac, crema y canela molida', 'precio' => 22, 'category_id' => 4, 'imagen1' => 'cafefrances.jpg'],

            ['titulo' => 'LIMON C/AGUA', 'descripcion' => 'Jugo de limon con agua', 'precio' => 8.5, 'category_id' => 5, 'imagen1' => 'limonada.jpg'],
            ['titulo' => 'LIMON C/LECHE', 'descripcion' => 'Jugo de limon con leche', 'precio' => 10, 'category_id' => 5, 'imagen1' => 'limonleche.jpg'],
            ['titulo' => 'FRUTILLA C/AGUA', 'descripcion' => 'Jugo de Frutilla con agua', 'precio' => 8.5, 'category_id' => 5, 'imagen1' => 'frutilla.jpg'],
            ['titulo' => 'FRUTILLA C/LECHE', 'descripcion' => 'Jugo de Frutilla con leche', 'precio' => 10, 'category_id' => 5, 'imagen1' => 'frutillaleche.jpg'],
            ['titulo' => 'PIÑA C/AGUA', 'descripcion' => 'Jugo de piña con agua', 'precio' => 8.5, 'category_id' => 5, 'imagen1' => 'piña.jpg'],
            ['titulo' => 'PIÑA C/LECHE', 'descripcion' => 'Jugo de piña con leche', 'precio' => 10, 'category_id' => 5, 'imagen1' => 'piñaleche.jpg'],
            ['titulo' => 'TUMBO C/AGUA', 'descripcion' => 'Jugo de tumbo con agua', 'precio' => 8.5, 'category_id' => 5, 'imagen1' => 'tumbo.jpg'],
            ['titulo' => 'TUMBO C/LECHE', 'descripcion' => 'Jugo de tumbo con leche', 'precio' => 10, 'category_id' => 5, 'imagen1' => 'tumboleche.jpg'],
            ['titulo' => 'NARANJA', 'descripcion' => 'Jugo de naranja', 'precio' => 11, 'category_id' => 5, 'imagen1' => 'naranja.jpg'],
            ['titulo' => 'PAPAYA C/LECHE', 'descripcion' => 'Jugo de papaya con leche', 'precio' => 10, 'category_id' => 5, 'imagen1' => 'papayaleche.jpg'],
            ['titulo' => 'PAPAYA C/AGUA', 'descripcion' => 'Jugo de papaya con agua', 'precio' => 8.5, 'category_id' => 5, 'imagen1' => 'papayaagua.jpg'],

            ['titulo' => 'JARRA DE LIMONADA', 'descripcion' => 'Limonada en Jarra', 'precio' => 22, 'category_id' => 6, 'imagen1' => 'limonadajarra.jpg'],
            ['titulo' => 'JARRA DE FRUTILLA', 'descripcion' => 'Frutilla en Jarra', 'precio' => 23, 'category_id' => 6, 'imagen1' => 'frutillajarra.jpg'],
            ['titulo' => 'JARRA DE NARANJA', 'descripcion' => 'Naranja en Jarra', 'precio' => 30, 'category_id' => 6, 'imagen1' => 'naranjajarra.jpg'],

            ['titulo' => 'COCA COLA', 'descripcion' => 'Gaseosa Coca Cola', 'precio' => 10, 'category_id' => 7, 'imagen1' => 'cocacola.jpg'],
            ['titulo' => 'FANTA', 'descripcion' => 'Gaseosa Fanta', 'precio' => 10, 'category_id' => 7, 'imagen1' => 'fanta.jpg'],
            ['titulo' => 'SPRITE', 'descripcion' => 'Gaseosa Sprite', 'precio' => 10, 'category_id' => 7, 'imagen1' => 'sprite.jpg'],
            ['titulo' => 'COCA COLA CERO', 'descripcion' => 'Gaseosa Coca Cola Cero', 'precio' => 10, 'category_id' => 7, 'imagen1' => 'cocacolacero.jpg'],

            ['titulo' => 'TORTILLA', 'descripcion' => 'Con quesillo, charque o palta', 'precio' => 10, 'category_id' => 8, 'imagen1' => 'tortilla.jpg'],
            ['titulo' => 'HUEVOS', 'descripcion' => 'A la coque o fritos', 'precio' => 7, 'category_id' => 8, 'imagen1' => 'huevos.jpg'],
            ['titulo' => 'HUMINTA', 'descripcion' => 'Con quesillo', 'precio' => 10, 'category_id' => 8, 'imagen1' => 'huminta.jpg'],
            ['titulo' => 'PLATO DE YOGURT', 'descripcion' => 'Frutas frescas de la temporada', 'precio' => 12, 'category_id' => 8, 'imagen1' => 'yogurt.jpg'],
            ['titulo' => 'QUESILLO', 'descripcion' => 'Con miel o azucar', 'precio' => 8, 'category_id' => 8, 'imagen1' => 'quesillo.jpg'],

            ['titulo' => 'OMELETTE 1', 'descripcion' => '3 huevos, jamon, queso y pan', 'precio' => 18, 'category_id' => 9, 'imagen1' => 'omelette.jpg'],
            ['titulo' => 'OMELETTE 2', 'descripcion' => '3 huevos, charque, queso y pan', 'precio' => 20, 'category_id' => 9, 'imagen1' => 'omelettecharque.jpg'],
            ['titulo' => 'OMELETTE 3', 'descripcion' => '3 huevos, jamon, queso, pimenton, champiñones y pan', 'precio' => 22, 'category_id' => 9, 'imagen1' => 'omelettechampiñones.jpg'],
            ['titulo' => 'OMELETTE 4', 'descripcion' => '3 huevos, jamon, queso, champiñones, vegetales y pan', 'precio' => 22, 'category_id' => 9, 'imagen1' => 'omelettevegetales.jpg'],
            ['titulo' => 'OMELETTE 5', 'descripcion' => '3 huevos, jamon, queso, champiñones, tocino y pan', 'precio' => 24, 'category_id' => 9, 'imagen1' => 'omelettetocino.jpg'],

            ['titulo' => 'HELADO 1', 'descripcion' => 'Helado sabor chocolate', 'precio' => 15, 'category_id' => 10, 'imagen1' => 'heladochocolate.jpg'],
            ['titulo' => 'HELADO 2', 'descripcion' => 'Helado sabor vainilla', 'precio' => 15, 'category_id' => 10, 'imagen1' => 'heladovainilla.jpg'],
            ['titulo' => 'HELADO 3', 'descripcion' => 'Helado sabor fresa', 'precio' => 15, 'category_id' => 10, 'imagen1' => 'heladofresa.jpg'],
            ['titulo' => 'HELADO 4', 'descripcion' => 'Helado sabor menta', 'precio' => 15, 'category_id' => 10, 'imagen1' => 'heladomenta.jpg'],
            ['titulo' => 'HELADO 5', 'descripcion' => 'Helado sabor cafe', 'precio' => 15, 'category_id' => 10, 'imagen1' => 'heladocafe.jpg'],
        ]);

        Product::insert([
            ["titulo"=>"SUPER HAMBURGUESA", "descripcion"=>"Hamburguesa doble con queso, huevo, hot dog, jamon y tocino acompañado de papas fritas y buffet de ensaladas + jugo o soda", "precio"=>44, "category_id"=>'15'],
            ["titulo"=>"COMBO ESCOLAR", "descripcion"=>"1 presa de pollo acompañado de papas fritas, platanos fritos y buffet de ensaladas + jugo o soda", "precio"=>26, "category_id"=>'15'],
            ["titulo"=>"COMBO DUO", "descripcion"=>"2 presas de pollo acompañado de papas fritas, platanos fritos y buffet de ensaladas + jugo o soda", "precio"=>34, "category_id"=>'15'],
            ["titulo"=>"COMBO TRIO", "descripcion"=>"3 presas de pollo acompañado de papas fritas, platanos fritos y buffet de ensaladas + jugo o soda", "precio"=>42, "category_id"=>'15'],
            ["titulo"=>"SUPER COMBO", "descripcion"=>"5 presas de pollo acompañado de papas fritas, platanos fritos y buffet de ensaladas + jugo o soda", "precio"=>56, "category_id"=>'15'],
            ["titulo"=>"SALCHIPAPAS", "descripcion"=>"Salchicha vienesa acompañado de papas fritas, platanos fritos y buffet de ensaladas", "precio"=>22, "category_id"=>'15'],
            ["titulo"=>"ALBONDIPAPAS DE POLLO O CARNE", "descripcion"=>"Pequeñas albondigas acompañado de papas fritas, platanos fritos y buffet de ensaladas", "precio"=>32, "category_id"=>'15'],
            ["titulo"=>"PIPOCAS DE POLLO", "descripcion"=>"Trocitos de pechuga de pollo acompañado de papas fritas, platanos fritos y buffet de ensaladas", "precio"=>32, "category_id"=>'15'],
            ["titulo"=>"PIZZA 4 QUESOS JUMBO", "descripcion"=>"Masa delgada, salsa de tomate, queso roquefort, queso parmesano, queso mozzarella, queso chaqueño", "precio"=>90, "category_id"=>'16'],
            ["titulo"=>"PIZZA 4 QUESOS FAMILIAR", "descripcion"=>"Masa delgada, salsa de tomate, queso roquefort, queso parmesano, queso mozzarella, queso chaqueño", "precio"=>70, "category_id"=>'16'],
            ["titulo"=>"PIZZA 4 QUESOS MEDIANA", "descripcion"=>"Masa delgada, salsa de tomate, queso roquefort, queso parmesano, queso mozzarella, queso chaqueño", "precio"=>45, "category_id"=>'16'],
            ["titulo"=>"PIZZA CARNICERA JUMBO", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) trozos de jamon, carne de res, chorizo italiano y tocino", "precio"=>90, "category_id"=>'16'],
            ["titulo"=>"PIZZA CARNICERA FAMILIAR", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) trozos de jamon, carne de res, chorizo italiano y tocino", "precio"=>70, "category_id"=>'16'],
            ["titulo"=>"PIZZA CARNICERA MEDIANA", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) trozos de jamon, carne de res, chorizo italiano y tocino", "precio"=>45, "category_id"=>'16'],
            ["titulo"=>"PIZZA PEPERONI JUMBO", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) y peperoni", "precio"=>90, "category_id"=>'16'],
            ["titulo"=>"PIZZA PEPERONI FAMILIAR", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) y peperoni", "precio"=>70, "category_id"=>'16'],
            ["titulo"=>"PIZZA PEPERONI MEDIANA", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) y peperoni", "precio"=>45, "category_id"=>'16'],
            ["titulo"=>"PIZZA JAMON CON QUESO JUMBO", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) y jamon", "precio"=>90, "category_id"=>'16'],
            ["titulo"=>"PIZZA JAMON CON QUESO FAMILIAR", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) y jamon", "precio"=>70, "category_id"=>'16'],
            ["titulo"=>"PIZZA JAMON CON QUESO MEDIANA", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) y jamon", "precio"=>45, "category_id"=>'16'],
            ["titulo"=>"PIZZA SUPREMA JUMBO", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella, mix tomate - cebolla blanca, pimenton rojo verde, mix champiñones, chorizo italiano, peperoni", "precio"=>90, "category_id"=>'16'],
            ["titulo"=>"PIZZA SUPREMA FAMILIAR", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella, mix tomate - cebolla blanca, pimenton rojo verde, mix champiñones, chorizo italiano, peperoni", "precio"=>70, "category_id"=>'16'],
            ["titulo"=>"PIZZA SUPREMA MEDIANA", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella, mix tomate - cebolla blanca, pimenton rojo verde, mix champiñones, chorizo italiano, peperoni", "precio"=>45, "category_id"=>'16'],
            ["titulo"=>"PIZZA JAMON CON CHAMPIÑONES JUMBO", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) jamon y champiñones", "precio"=>90, "category_id"=>'16'],
            ["titulo"=>"PIZZA JAMON CON CHAMPIÑONES FAMILIAR", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) jamon y champiñones", "precio"=>70, "category_id"=>'16'],
            ["titulo"=>"PIZZA JAMON CON CHAMPIÑONES MEDIANA", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) jamon y champiñones", "precio"=>45, "category_id"=>'16'],
            ["titulo"=>"PIZZA VEGETARIANA JUMBO", "descripcion"=>"Masa delgada, salsa de ricota, queso mozarrella (Parmesano / oregano) variedad de verduras", "precio"=>90, "category_id"=>'16'],
            ["titulo"=>"PIZZA VEGETARIANA FAMILIAR", "descripcion"=>"Masa delgada, salsa de ricota, queso mozarrella (Parmesano / oregano) variedad de verduras", "precio"=>70, "category_id"=>'16'],
            ["titulo"=>"PIZZA VEGETARIANA MEDIANA", "descripcion"=>"Masa delgada, salsa de ricota, queso mozarrella (Parmesano / oregano) variedad de verduras", "precio"=>45, "category_id"=>'16'],
            ["titulo"=>"PIZZA HAWAINA JUMBO", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) trozos de jamon, piña, duraznos y cherry", "precio"=>90, "category_id"=>'16'],
            ["titulo"=>"PIZZA HAWAINA FAMILIAR", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) trozos de jamon, piña, duraznos y cherry", "precio"=>70, "category_id"=>'16'],
            ["titulo"=>"PIZZA HAWAINA MEDIANA", "descripcion"=>"Masa delgada, salsa de tomate, queso mozzarella (Parmesano / oregano) trozos de jamon, piña, duraznos y cherry", "precio"=>45, "category_id"=>'16'],
            ["titulo"=>"PIZZA CAPRICHOSA JUMBO", "descripcion"=>"Masa delgada, salsa de tomate, jamon, queso mozzarella, champiñones, esparragos, aceitunas verdes, albahaca", "precio"=>90, "category_id"=>'16'],
            ["titulo"=>"PIZZA CAPRICHOSA FAMILIAR", "descripcion"=>"Masa delgada, salsa de tomate, jamon, queso mozzarella, champiñones, esparragos, aceitunas verdes, albahaca", "precio"=>70, "category_id"=>'16'],
            ["titulo"=>"PIZZA CAPRICHOSA MEDIANA", "descripcion"=>"Masa delgada, salsa de tomate, jamon, queso mozzarella, champiñones, esparragos, aceitunas verdes, albahaca", "precio"=>45, "category_id"=>'16'],
            ["titulo"=>"PIZZA CALZONE JUMBO", "descripcion"=>"Masa rellena de jamon, queso mozzarella, champiñones, aceitunas verdes y cebolla blanca", "precio"=>90, "category_id"=>'16'],
            ["titulo"=>"PIZZA CALZONE FAMILIAR", "descripcion"=>"Masa rellena de jamon, queso mozzarella, champiñones, aceitunas verdes y cebolla blanca", "precio"=>70, "category_id"=>'16'],
            ["titulo"=>"PIZZA CALZONE MEDIANA", "descripcion"=>"Masa rellena de jamon, queso mozzarella, champiñones, aceitunas verdes y cebolla blanca", "precio"=>45, "category_id"=>'16'],
        ]);

        Product::insert([
            ["titulo"=>"COMBO 1", "descripcion"=>"1 Hamburguesa simple + Papas fritas + 1 jugo o gaseosa", "precio"=>0, "category_id"=>'17'],
            ["titulo"=>"COMBO 2", "descripcion"=>"1 Hamburguesa + Queso o Huevo o Hot Dog + Papas fritas + 1 jugo o gaseosa", "precio"=>0, "category_id"=>'17'],
            ["titulo"=>"COMBO 3", "descripcion"=>"1 Hamburguesa con Jamon o Tocino + Papas fritas + 1 jugo o gaseosa", "precio"=>0, "category_id"=>'17'],
            ["titulo"=>"COMBO 4", "descripcion"=>"1 Hamburguesa Doble + Papas fritas + 1 jugo o gaseosa", "precio"=>0, "category_id"=>'17'],
            ["titulo"=>"COMBO 5", "descripcion"=>"1 Hamburguesa Doble + Queso o Huevo o Hot Dog + Papas fritas + 1 jugo o gaseosa", "precio"=>0, "category_id"=>'17'],
            ["titulo"=>"COMBO 6", "descripcion"=>"1 Hamburguesa Doble con jamon o Tocino + Papas fritas + 1 jugo o gaseosa", "precio"=>0, "category_id"=>'17'],
            ["titulo"=>"SUPER COMBO", "descripcion"=>"1 Hamburguesa Doble con Queso, Huevo, Hot Dog, Jamon y Tocino + Papas fritas + 1 jugo o gaseosa", "precio"=>0, "category_id"=>'17'],

            ["titulo"=>"COMBO 1", "descripcion"=>"Hamburguesa simple acompañado de Papas fritas y buffet de ensaladas + jugo o soda", "precio"=>23, "category_id"=>'18'],
            ["titulo"=>"COMBO 2", "descripcion"=>"Hamburguesa con (queso, huevo o hot dog) acompañado de Papas fritas y buffet de ensaladas + jugo o soda", "precio"=>25, "category_id"=>'18'],
            ["titulo"=>"COMBO 3", "descripcion"=>"Hamburguesa con jamon o tocino acompañado de Papas fritas y buffet de ensaladas + jugo o soda", "precio"=>28, "category_id"=>'18'],
            ["titulo"=>"COMBO 4", "descripcion"=>"Hamburguesa doble acompañado de Papas fritas y buffet de ensaladas + jugo o soda", "precio"=>32, "category_id"=>'18'],
            ["titulo"=>"COMBO 5", "descripcion"=>"Hamburguesa doble (queso, huevo o hot dog) acompañado de Papas fritas y buffet de ensaladas + jugo o soda", "precio"=>34, "category_id"=>'18'],
            ["titulo"=>"COMBO 6", "descripcion"=>"Hamburguesa doble (Jamon o tocino) acompañado de Papas fritas y buffet de ensaladas + jugo o soda", "precio"=>36, "category_id"=>'18'],

            ["titulo"=>"SUPER PIQUE", "descripcion"=>"Lomo y chorizo cortado en trozos, huevo duro, queso, papa frita, tomate, lechuga y cebolla", "precio"=>85, "category_id"=>'19'],
            ["titulo"=>"SUPER MEDIO PIQUE", "descripcion"=>"Lomo y chorizo cortado en trozos, huevo duro, queso, papa frita, tomate, lechuga y cebolla", "precio"=>70, "category_id"=>'19'],
            ["titulo"=>"FILET MIGÑON", "descripcion"=>"Lomito a la plancha con tocino cubierto con salsa de champiñones, arroz chaufa y papa frita", "precio"=>70, "category_id"=>'19'],
            ["titulo"=>"MILANEZA DE POLLO", "descripcion"=>"Milaneza con ensalada, arroz y papa frita", "precio"=>55, "category_id"=>'19'],
            ["titulo"=>"MILANEZA NAPOLITANA", "descripcion"=>"Milaneza con jamon y queso acompañado de aceitunas verdes, legumbres y papa frita", "precio"=>60, "category_id"=>'19'],
            ["titulo"=>"SILPANCHO", "descripcion"=>"Filete de lomito apanado papas fritas en rodajas, huevo frito, arroz y exquisita ensalada", "precio"=>60, "category_id"=>'19'],
            ["titulo"=>"SUPER BROCHETA MIXTA", "descripcion"=>"Carne de res y pollo con pimenton, cebolla en trozos acompañado de arroz y papa frita", "precio"=>60, "category_id"=>'19'],
            ["titulo"=>"LAZAÑA", "descripcion"=>"Exquisita pasta al estilo Italiano", "precio"=>0, "category_id"=>'19'],
            ["titulo"=>"ALITAS PICANTES", "descripcion"=>"Servidas con salsa picante, papas fritas y aros de cebolla", "precio"=>3, "category_id"=>'19'],

            ["titulo"=>"CESAR", "descripcion"=>"Deliciosa lechuga, anchoas, queso, crutones y aderezo", "precio"=>0, "category_id"=>'20'],
            ["titulo"=>"JARDINERA DE POLLO", "descripcion"=>"Variedad de legumbres con trocitos de pollo", "precio"=>35, "category_id"=>'20'],
            ["titulo"=>"CHEFF", "descripcion"=>"Variedad de legumbres, huevo, queso, jamones y salsa deliciosa", "precio"=>0, "category_id"=>'20'],
            ["titulo"=>"JARDINERA", "descripcion"=>"Variedad de legumbres frescas de la temporada y jamon", "precio"=>30, "category_id"=>'20'],
            ["titulo"=>"JARDINERA CON ATUN", "descripcion"=>"Variedad de legumbres frescas de la temporada y atun", "precio"=>35, "category_id"=>'20'],

            ["titulo"=>"SANDWICH DE POLLO", "descripcion"=>"Filete de pollo con lechuga, tomate, pepinillos al vinagre y papa frita", "precio"=>30, "category_id"=>'21'],
            ["titulo"=>"SANDWICH MIXTO", "descripcion"=>"Jamon y queso con lechuga, tomate pepinillo y papa frita", "precio"=>26, "category_id"=>'21'],
            ["titulo"=>"SANDWICH DE LOMITO", "descripcion"=>"Jugoso filete de res con lechuga, cebolla, tomate en pan baguette acompañado de papa frita", "precio"=>30, "category_id"=>'21'],
            ["titulo"=>"SANDWICH DE LOMITO CON HUEVO", "descripcion"=>"Jugoso filete de res con huevo, lechuga, cebolla, tomate en pan baguette acompañado de papa frita", "precio"=>34, "category_id"=>'21'],
            ["titulo"=>"SANDWICH DE PHILADELFIA", "descripcion"=>"Jugoso filete de res en tiritas con queso, tocino, champiñon, cebolla en pan baguette acompañado de papa frita", "precio"=>35, "category_id"=>'21'],
            ["titulo"=>"SANDWICH DE PAVITA", "descripcion"=>"Pechuga de pollo desmenuzada con mayoneza, pepinillo, lechuga, tomate, cebolla acompañado de papa frita", "precio"=>0, "category_id"=>'21'],
            ["titulo"=>"SANDWICH DE CLUB", "descripcion"=>"Pechuga de pollo con jamon, queso, huevo, tocino, lechuga, tomate, cebolla y pepinillo acompañado de papa frita", "precio"=>35, "category_id"=>'21'],
            ["titulo"=>"SANDWICH DE HUEVO", "descripcion"=>"Dos huevos fritos, lechuga, cebolla, tomate y pepinillo acompañado de papa frita", "precio"=>17, "category_id"=>'21'],
        ]);

        Product::insert([

            // Combos
            ["titulo"=>"COMBO 1","descripcion"=>"1 Hamburguesa simple + Papas fritas + 1 jugo o gaseosa","precio"=>0,"category_id"=>'17'],
            ["titulo"=>"COMBO 2","descripcion"=>"1 Hamburguesa + Queso o Huevo o Hot Dog + Papas fritas + 1 jugo o gaseosa","precio"=>0,"category_id"=>'17'],
            ["titulo"=>"COMBO 3","descripcion"=>"1 Hamburguesa con Jamon o Tocino + Papas fritas + 1 jugo o gaseosa","precio"=>0,"category_id"=>'17'],
            ["titulo"=>"COMBO 4","descripcion"=>"1 Hamburguesa Doble + Papas fritas + 1 jugo o gaseosa","precio"=>0,"category_id"=>'17'],
            ["titulo"=>"COMBO 5","descripcion"=>"1 Hamburguesa Doble + Queso o Huevo o Hot Dog + Papas fritas + 1 jugo o gaseosa","precio"=>0,"category_id"=>'17'],
            ["titulo"=>"COMBO 6","descripcion"=>"1 Hamburguesa Doble con jamon o Tocino + Papas fritas + 1 jugo o gaseosa","precio"=>0,"category_id"=>'17'],
            ["titulo"=>"SUPER COMBO","descripcion"=>"1 Hamburguesa Doble con Queso, Huevo, Hot Dog, Jamon y Tocino + Papas fritas + 1 jugo o gaseosa","precio"=>0,"category_id"=>'17'],

            ["titulo"=>"COMBO 1","descripcion"=>"Hamburguesa simple acompañado de Papas fritas y buffet de ensaladas + jugo o soda","precio"=>23,"category_id"=>'18'],
            ["titulo"=>"COMBO 2","descripcion"=>"Hamburguesa con (queso, huevo o hot dog) acompañado de Papas fritas y buffet de ensaladas + jugo o soda","precio"=>25,"category_id"=>'18'],
            ["titulo"=>"COMBO 3","descripcion"=>"Hamburguesa con jamon o tocino acompañado de Papas fritas y buffet de ensaladas + jugo o soda","precio"=>28,"category_id"=>'18'],
            ["titulo"=>"COMBO 4","descripcion"=>"Hamburguesa doble acompañado de Papas fritas y buffet de ensaladas + jugo o soda","precio"=>32,"category_id"=>'18'],
            ["titulo"=>"COMBO 5","descripcion"=>"Hamburguesa doble (queso, huevo o hot dog) acompañado de Papas fritas y buffet de ensaladas + jugo o soda","precio"=>34,"category_id"=>'18'],
            ["titulo"=>"COMBO 6","descripcion"=>"Hamburguesa doble (Jamon o tocino) acompañado de Papas fritas y buffet de ensaladas + jugo o soda","precio"=>36,"category_id"=>'18'],

            // Productos
            ["titulo"=>"SUPER PIQUE","descripcion"=>"Lomo y chorizo cortado en trozos, huevo duro, queso, papa frita, tomate, lechuga y cebolla","precio"=>85,"category_id"=>'19'],
            ["titulo"=>"SUPER MEDIO PIQUE","descripcion"=>"Lomo y chorizo cortado en trozos, huevo duro, queso, papa frita, tomate, lechuga y cebolla","precio"=>70,"category_id"=>'19'],
            ["titulo"=>"FILET MIGÑON","descripcion"=>"Lomito a la plancha con tocino cubierto con salsa de champiñones, arroz chaufa y papa frita","precio"=>70,"category_id"=>'19'],
            ["titulo"=>"MILANEZA DE POLLO","descripcion"=>"Milaneza con ensalada, arroz y papa frita","precio"=>55,"category_id"=>'19'],
            ["titulo"=>"MILANEZA NAPOLITANA","descripcion"=>"Milaneza con jamon y queso acompañado de aceitunas verdes, legumbres y papa frita","precio"=>60,"category_id"=>'19'],
            ["titulo"=>"SILPANCHO","descripcion"=>"Filete de lomito apanado papas fritas en rodajas, huevo frito, arroz y exquisita ensalada","precio"=>60,"category_id"=>'19'],
            ["titulo"=>"SUPER BROCHETA MIXTA","descripcion"=>"Carne de res y pollo con pimenton, cebolla en trozos acompañado de arroz y papa frita","precio"=>60,"category_id"=>'19'],
            ["titulo"=>"LAZAÑA","descripcion"=>"Exquisita pasta al estilo Italiano","precio"=>0,"category_id"=>'19'],
            ["titulo"=>"ALITAS PICANTES","descripcion"=>"Servidas con salsa picante, papas fritas y aros de cebolla","precio"=>3,"category_id"=>'19'],

            ["titulo"=>"CESAR","descripcion"=>"Deliciosa lechuga, anchoas, queso, crutones y aderezo","precio"=>0,"category_id"=>'20'],
            ["titulo"=>"JARDINERA DE POLLO","descripcion"=>"Variedad de legumbres con trocitos de pollo","precio"=>35,"category_id"=>'20'],
            ["titulo"=>"CHEFF","descripcion"=>"Variedad de legumbres, huevo, queso, jamones y salsa deliciosa","precio"=>0,"category_id"=>'20'],
            ["titulo"=>"JARDINERA","descripcion"=>"Variedad de legumbres frescas de la temporada y jamon","precio"=>30,"category_id"=>'20'],
            ["titulo"=>"JARDINERA CON ATUN","descripcion"=>"Variedad de legumbres frescas de la temporada y atun","precio"=>35,"category_id"=>'20'],

            ["titulo"=>"SANDWICH DE POLLO","descripcion"=>"Filete de pollo con lechuga, tomate, pepinillos al vinagre y papa frita","precio"=>30,"category_id"=>'21'],
            ["titulo"=>"SANDWICH MIXTO","descripcion"=>"Jamon y queso con lechuga, tomate pepinillo y papa frita","precio"=>26,"category_id"=>'21'],
            ["titulo"=>"SANDWICH DE LOMITO","descripcion"=>"Jugoso filete de res con lechuga, cebolla, tomate en pan baguette acompañado de papa frita","precio"=>30,"category_id"=>'21'],
            ["titulo"=>"SANDWICH DE LOMITO CON HUEVO","descripcion"=>"Jugoso filete de res con huevo, lechuga, cebolla, tomate en pan baguette acompañado de papa frita","precio"=>34,"category_id"=>'21'],
            ["titulo"=>"SANDWICH DE PHILADELFIA","descripcion"=>"Jugoso filete de res en tiritas con queso, tocino, champiñon, cebolla en pan baguette acompañado de papa frita","precio"=>35,"category_id"=>'21'],
            ["titulo"=>"SANDWICH DE PAVITA","descripcion"=>"Pechuga de pollo desmenuzada con mayoneza, pepinillo, lechuga, tomate, cebolla acompañado de papa frita","precio"=>0,"category_id"=>'21'],
            ["titulo"=>"SANDWICH DE CLUB","descripcion"=>"Pechuga de pollo con jamon, queso, huevo, tocino, lechuga, tomate, cebolla y pepinillo acompañado de papa frita","precio"=>35,"category_id"=>'21'],
            ["titulo"=>"SANDWICH DE HUEVO","descripcion"=>"Dos huevos fritos, lechuga, cebolla, tomate y pepinillo acompañado de papa frita","precio"=>17,"category_id"=>'21'],

            ["titulo"=>"ALFAFOR CON MANJAR","descripcion"=>"","precio"=>7,"category_id"=>'22'],
            ["titulo"=>"ALFAFOR CON CREMA","descripcion"=>"","precio"=>7,"category_id"=>'22'],
            ["titulo"=>"BROWNIE","descripcion"=>"","precio"=>7,"category_id"=>'22'],
            ["titulo"=>"NAPOLEON","descripcion"=>"","precio"=>7,"category_id"=>'22'],
            ["titulo"=>"CANELON","descripcion"=>"","precio"=>7,"category_id"=>'22'],
            ["titulo"=>"DONUTS","descripcion"=>"","precio"=>7,"category_id"=>'22'],
            ["titulo"=>"ECLER","descripcion"=>"","precio"=>7,"category_id"=>'22'],
            ["titulo"=>"BOMBITA","descripcion"=>"","precio"=>7,"category_id"=>'22'],
            ["titulo"=>"LENGUA DE SUEGRA","descripcion"=>"","precio"=>6,"category_id"=>'22'],
            ["titulo"=>"GOLOSO","descripcion"=>"","precio"=>7,"category_id"=>'22'],
            ["titulo"=>"TARTALETA DE FRUTAS","descripcion"=>"","precio"=>7,"category_id"=>'22'],
            ["titulo"=>"TARTALETA DE MANJAR","descripcion"=>"","precio"=>7,"category_id"=>'22'],
            ["titulo"=>"TARTA","descripcion"=>"","precio"=>7,"category_id"=>'22'],
            ["titulo"=>"GELATINA","descripcion"=>"","precio"=>7,"category_id"=>'22'],
            ["titulo"=>"TARTA DE FRUTAS","descripcion"=>"","precio"=>7,"category_id"=>'22'],

            ["titulo"=>"AGUA MINERAL","descripcion"=>"Botella de 1.5L","precio"=>5,"category_id"=>'23'],
            ["titulo"=>"AGUA MINERAL PEQUEÑA","descripcion"=>"Botella de 500ml","precio"=>3,"category_id"=>'23'],
            ["titulo"=>"GASEOSA","descripcion"=>"Botella de 1.5L","precio"=>6,"category_id"=>'23'],
            ["titulo"=>"JUGO NATURAL","descripcion"=>"Botella de 500ml","precio"=>7,"category_id"=>'23'],
            ["titulo"=>"JUGO NATURAL GRANDE","descripcion"=>"Botella de 1L","precio"=>12,"category_id"=>'23'],
            ["titulo"=>"CERVEZA","descripcion"=>"Botella de 1L","precio"=>15,"category_id"=>'23'],

            ["titulo"=>"MOTORIZADO","descripcion"=>"Entrega dentro del área","precio"=>15,"category_id"=>'24'],
            ["titulo"=>"ENVIO FUERA DEL AREA","descripcion"=>"Envío a otras áreas","precio"=>30,"category_id"=>'24'],
            ["titulo"=>"SALA DE JUEGOS","descripcion"=>"","precio"=>15,"category_id"=>'24'],

        ]);
    }
}
