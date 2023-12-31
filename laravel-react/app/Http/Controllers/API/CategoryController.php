<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\Validator;


class CategoryController extends Controller
{
    public function allCategory(){
        $category = Category::where('status', '0')->get();
        return response()->json([
            'status'=> 200,
            'category'=>$category,
        ]);
    }

    public function index(){
        $category = Category::all();
        return response()->json([
            'status'=> 200,
            'category'=>$category,
        ]);
    }

    public function edit($id){
        $category = Category::find($id);

        if($category){
            return response()->json([
                'status'=>200,
                'category'=>$category,
            ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'No category id found',
            ]);
        }
    }


    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'meta_title'=>'required|max:191',
            'slug'=>'required|max:191',
            'name'=>'required|max:191',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>400,
                'errors'=> $validator->messages(),
            ]);
        }

        $category = new Category;
        $category->meta_title = $request->input('meta_title');
        $category->meta_keyword = $request->input('meta_keyword');
        $category->meta_description = $request->input('meta_description');
        $category->slug = $request->input('slug');
        $category->name = $request->input('name');
        $category->description = $request->input('description');
        $category->status = $request->input('status') == true ? '1':'0';

        $category->save();

        return response()->json([
            'status'=>200,
            'message'=>'Category Added Successfully.',
        ]);

    }

    public function update(Request $request, $id){
        $validator = Validator::make($request->all(), [
            'meta_title'=>'required|max:191',
            'slug'=>'required|max:191',
            'name'=>'required|max:191',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors'=> $validator->messages(),
            ]);
        }

        $category = Category::find($id);

        if($category){

            $category->meta_title = $request->input('meta_title');
            $category->meta_keyword = $request->input('meta_keyword');
            $category->meta_description = $request->input('meta_description');
            $category->slug = $request->input('slug');
            $category->name = $request->input('name');
            $category->description = $request->input('description');
            $category->status = $request->input('status') == true ? '1':'0';
            
            $category->update();
            
            return response()->json([
                'status'=>200,
                'message'=>'Category Updated Successfully.',
            ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'No Category ID Found',
            ]);
        }
    }

    public function destroy($id){
        $category = Category::find($id);
        if($category){
            $category->delete(); 
            return response()->json([
                'status'=>200,
                'message'=>'Category deleted Successfully',
            ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'No Category ID Found',
            ]);
        }
    }
}
