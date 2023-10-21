<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Order;
use App\Models\Cart;

class CheckoutController extends Controller
{
    public function placeOrder(Request $request){
        
        if(auth('sanctum')->check()){

            $validator = Validator::make($request->all(), [
                'firstname'=>'required|max:191',
                'lastname'=>'required|max:191',
                'phone'=>'required|max:191',
                'email'=>'required|max:191',
                'address'=>'required|max:191',
                'city'=>'required|max:191',
                'state'=>'required|max:191',
                'zipcode'=>'required|max:191',
            ]);

            if($validator->fails()){
                return response()->json([
                    'status'=>422,
                    'errors'=>$validator->messages(),
                ]);
            }else{

                $order = new Order;
                $user_id = auth('sanctum')->user()->id;
                $order->user_id = $user_id;
                $order->firstname = $request->firstname;
                $order->lastname = $request->lastname;
                $order->phone = $request->phone;
                $order->email = $request->email;
                $order->address = $request->address;
                $order->city = $request->city;
                $order->state = $request->state;
                $order->zipcode = $request->zipcode;

                $order->payment_mode = $request->payment_mode;
                $order->tracking_no = 'acommerce'.rand(1111,9999);
                
                $order->save();

                $cart = Cart::where('user_id', $user_id)->get();
                
                $orderItems = [];
                foreach($cart as $item){
                    $orderItems[] = [
                        'product_id'=>$item->product_id,
                        'qty'=>$item->product_qty,
                        'price'=>$item->product->selling_price,
                    ];

                    $item->product->update([
                        'quantity'=>$item->product->quantity - $item->product_qty
                    ]);
                }   

                $order->orderitems()->createMany($orderItems);

                Cart::destroy($cart);

                return response()->json([
                    'status'=>200,
                    'message'=>'Order Placed Successfully',
                ]);
            }

            
        }else{
            return response()->json([
                'status'=>401,
                'message'=>'Login to Continue',
            ]);
        }
    }

    public function validateOrder(Request $request){
        if(auth('sanctum')->check()){

            $validator = Validator::make($request->all(), [
                'firstname'=>'required|max:191',
                'lastname'=>'required|max:191',
                'phone'=>'required|max:191',
                'email'=>'required|max:191',
                'address'=>'required|max:191',
                'city'=>'required|max:191',
                'state'=>'required|max:191',
                'zipcode'=>'required|max:191',
            ]);

            if($validator->fails()){
                return response()->json([
                    'status'=>422,
                    'errors'=>$validator->messages(),
                ]);
            }else{
                return response()->json([
                    'status'=>200,
                    'message'=>'Form Validated Successfully',
                ]);

            }
        }else{
            return response()->json([
                'status'=>401,
                'message'=>'Login to Continue',
            ]);
        }
    }
}
