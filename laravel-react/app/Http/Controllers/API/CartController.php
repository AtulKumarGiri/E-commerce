<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Product;


class CartController extends Controller
{
    public function addToCart(Request $request){
        if(auth('sanctum')->check()){
            $user_id = auth('sanctum')->user()->id;
            $product_id = $request->product_id;
            $product_qty = $request->product_qty;

            $productCheck = Product::where('id', $product_id)->first();

            if($productCheck){

                if(Cart::where('product_id', $product_id)->where('user_id', $user_id)->exists()){
                    return response()->json([
                        'status'=>409,
                        'message'=>$productCheck->name.' Already Added to Cart',
                    ]);
                }else{
                    $cartitem = new Cart;
                    $cartitem->user_id = $user_id; 
                    $cartitem->product_id = $product_id; 
                    $cartitem->product_qty = $product_qty; 

                    $cartitem ->save();
                    
                    return response()->json([
                        'status'=>201,
                        'message'=>'Added to Cart',
                    ]);
                }
                
            }else{
                return response()->json([
                    'status'=>404,
                    'message'=>'Product not found',
                ]);
            }   
        }else{
            return response()->json([
                'status'=>401,
                'message'=>'Login to Add to Cart',
            ]);
        }
    }

    public function viewCart(){
        if(auth('sanctum')->check()){
            $user_id = auth('sanctum')->user()->id;
            $cartItems = Cart::where('user_id', $user_id)->get();
            return response()->json([
                'status'=>200,
                'cart'=>$cartItems,
            ]);
        }
        else{
            return response()->json([
                'status'=>401,
                'message'=>'Login to View to Cart',
            ]);
        }
    }

    public function updateQuantity($cart_id, $scope){
        if(auth('sanctum')->check()){
            $user_id = auth('sanctum')->user()->id;
            $cartItem = Cart::where('id', $cart_id)->where('user_id', $user_id)->first();
            if($scope == "inc"){
                if ($cartItem->product_qty < 10) {
                    $cartItem->product_qty += 1;
                } 
            }else  if($scope == "dec"){
                if ($cartItem->product_qty > 1) {
                    $cartItem->product_qty -= 1;
                }
            }
            $cartItem->update();
            return response()->json([
                'status'=>200,
                'message'=>'Quantity Updated',
            ]);

        }else{
            return response()->json([
                'status'=>401,
                'message'=>'Login to Continue',
            ]);
        }
    }

    public function deleteCartItem($cart_id){
        if(auth('sanctum')->check()){
            $user_id = auth('sanctum')->user()->id;
            $cartItem = Cart::where('id', $cart_id)->where('user_id', $user_id)->first();

            if($cartItem){
                $cartItem->delete();
                return response()->json([
                    'status'=>200,
                    'message'=>'Cart Item Removed Successfully',
                ]);
            }else{
                return response()->json([
                    'status'=>40,
                    'message'=>'Cart Item Not Found',
                ]); 
            }

        }
        else{
            return response()->json([
                'status'=>401,
                'message'=>'Login to Continue',
            ]);
        }
    }
}
