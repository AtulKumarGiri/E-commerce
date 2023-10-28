import React from 'react'

function CancellationRefund() {
  return (
    <>
      <div className="container-fluid py-4 m-0 p-0 bg-light">
        <div className="container py-3 bg-white">
          <h4 className="text-center">Order Cancellation and Return Policy</h4>
          <div className="cancellation-policy mt-4 mb-2 px-3">
            <h4 className="text-center">Cancellation Policy</h4>
            <p>The customer can choose to cancel an order any time before it's dispatched. The order cannot be canceled once it’s out for delivery. However, the customer may choose to reject it at the doorstep.</p>

            <p>The time window for cancellation varies based on different categories and the order cannot be canceled once the specified time has passed.</p>

            <p>In some cases, the customer may not be allowed to cancel the order for free, post the specified time and a cancellation fee will be charged. The details about the time window mentioned on the product page or order confirmation page will be considered final.</p>

            <p>In case of any cancellation from the seller due to unforeseen circumstances, a full refund will be initiated for prepaid orders.</p>

            <p> Flipkart reserves the right to accept the cancellation of any order. Flipkart also reserves the right to waive off or modify the time window or cancellation fee from time to time.</p>
          </div>

          <div className="return-policy mt-4 mb-2 px-3">
            <h4 className="text-center">Return Policy</h4>
            <p>Returns is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement and/ or refund is offered by the respective sellers to you. All products listed under a particular category may not have the same returns policy. For all products, the returns/replacement policy provided on the product page shall prevail over the general returns policy.</p>
            <p>In certain cases where the seller is unable to process a replacement for any reason whatsoever, a refund will be given.</p>
            <p>In cases where a product accessory is found missing/damaged/defective, the seller may either process a replacement of the particular accessory or issue an eGV for an amount equivalent to the price of the accessory, at the seller’s discretion.</p>

            <p>During open box deliveries, while accepting your order, if you received a different or a damaged product, you will be given a refund (on the spot refunds for cash-on-delivery orders). Once you have accepted an open box delivery, no return request will be processed, except for manufacturing defects. In such cases, these category-specific replacement/return general conditions will be applicable. Click here to know more about Open Box Delivery.</p>

            <p>For products where installation is provided by Flipkart's service partners, do not open the product packaging by yourself. Flipkart authorised personnel shall help in unboxing and installation of the product.</p>

            <p>For Furniture, any product-related issues will be checked by authorised service personnel (free of cost) and attempted to be resolved by replacing the faulty/ defective part of the product. Full replacement will be provided only in cases where the service personnel opines that replacing the faulty/defective part will not resolve the issue.'</p>

            <p>Flipkart holds the right to restrict the number of returns created per order unit, post the evaluation of the product/order defect is undertaken by Flipkart’s authorized representative.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CancellationRefund