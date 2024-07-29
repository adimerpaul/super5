<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Imagick\Driver;
class ProductController extends Controller{
    function store(Request $request){
        $product = Product::create($request->all());
        return Product::with(['category','subCategory'])->find($product->id);
    }
    function uploadProduct(Request $request, $id){
        $validated = $request->validate([
            'file' => 'required|image',
        ]);

        $name = time().'_'.$validated['file']->getClientOriginalName();

        $field = $request->field;

        $validated['file']->move(public_path('images'), $name);

        $manager = new ImageManager(new Driver());
        $image = $manager->read('images/'.$name);
        $image->scale(height: 600);
        $image->save('images/'.$name);

        if ($id!='null'){
            $product = Product::find($id);
            $product->$field = $name;
            $product->save();

            return Product::with('category','subCategory')->find($id);
        }else{
            return [
                'name' => $name,
                'esImagen' => true,
                'field' => $field
            ];
        }


    }
    function index(){
        $products = Product::with('category', 'subCategory')->get();
        foreach ($products as $product){
            // Convierte el título a minúsculas
            $product->titulo = strtolower($product->titulo);

            // Reemplaza imágenes faltantes con 'default.jpg'
            $images = ['imagen1', 'imagen2', 'imagen3', 'imagen4'];
            foreach ($images as $image) {
                $imagePath = public_path('images/' . $product->$image);
                error_log($imagePath);
                if ($product->$image == null || !file_exists($imagePath)) {
                    $product->$image = 'default.jpg';
                }
            }
        }
        return $products;
    }
    function show($id){
        return Product::with('category','subCategory')->find($id);
    }
    function  update(Request $request, $id){
        $product = Product::find($id);
        $product->update($request->all());
        return $product;
    }
    function destroy($id){
        Product::destroy($id);
        return $id;
    }
}
