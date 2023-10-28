import React from 'react'

function Faq() {
  return (
    <>
      <div className="container-fluid bg-light px-5 py-4 faq">
        <h6>Acommerce Help Center | 24x7 Customer Care Support</h6>
        <p>The Acommerce Help Centre page lists out various types of issues that you may have encountered so that there can be quick resolution and you can go back to shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with returns (and refunds), and much more. The Acommerce Help Centre also lists out more information that you may need regarding Acommerce Plus, payment, shopping, and more. The page has various filters listed out on the left-hand side so that you can get your queries solved quickly, efficiently, and without a hassle. You can get the Acommerce Help Centre number or even access Acommerce Help Centre support if you need professional help regarding various topics. The support executive will ensure speedy assistance so that your shopping experience is positive and enjoyable. You can even inform your loved ones of the support page so that they can properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable deals online.</p>

        <div className="container bg-white p-3 pb-5">
          <h4 className='mt-2 mb-4'>Frequently Asked Questions</h4>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>What should I do if my order is approved but hasn't been shipped yet?</strong>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Sellers usually ship orders 1-2 business days before the delivery date so that they reach you on time. In case your order hasn't been shipped within this time please contact our Customer Support so that we can look into it.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong>I've still not received the refund in my bank account.</strong>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  If you have received a mail from us confirming your refund request, it means that the refund has been initiated. You can also contact your bank with the refund reference (ARN)/UTR number you would have received for an update on the status of your refund.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <strong>Can I get the refund for the item to any other mode if I have paid using the Bajaj Finserv payment option?</strong>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                No, the refund for an order placed using the Bajaj Finserv payment mode can only be done to the bank account linked to the Bajaj Finserv EMI Network Card.
                </div>
              </div>
            </div>
          </div>
        </div>

        <h6>Acommerce Help Center | Get All Shopping Solutions Here</h6>
        <p>Once you place your order on any online shopping store, the next obvious thing to do is wait for your product to arrive. This wait can be quite anxiety-ridden if you do not get updates about your order or do not receive support post-delivery of your order. However, with the Acommerce Help Centre, your wait becomes exciting, and your shopping experience becomes joyful, thanks to all the support it provides related to your order. With websites, like Acommerce, the entire shopping experience has gone through a major change. Now, you can conveniently shop any time, from anywhere, and anything that you want. These websites are one-stop destinations for all your needs and requirements. From skincare products to home appliances and groceries to baby care essentials, everything is just a few clicks away. These websites provide you convenience, at the same time, a bitter experience can make online shopping a nightmare for many. To ensure that your shopping experience is delightful, the Acommerce Help centre support offers every assistance that you need. From reporting specific delivered product-related issues to letting you manage your orders, the Acommerce Helpcentre has solutions to all your worries related to your orders. Furthermore, if you do not find a solution to your queries here, then you can use the Acommerce Help Centre number to get your issues solved. Keep reading to know more about Acommerce Help Centre and what all assistance you get here: </p>

        <h6>24x7 Customer Care Support</h6>
        <p>You can 24x7 Customer Care Support on the Acommerce Help Centre. Any query or issue that you may possibly have while shopping on Acommerce is taken care here. This page is easy to navigate, and you can get support almost immediately. Once you log onto your Acommerce account, this page shows you your recent orders and let you report any issue. By clicking on the specific order, you can raise your query. It also has a chat option to ensure that your queries and issues are taken care of. Similarly, there are other options on this page that are created to assist you and to make your shopping experience hassle-free. You can get support any time and get a satisfactory solution to your queries and issues within minutes. </p>

      </div>
    </>
  )
}

export default Faq