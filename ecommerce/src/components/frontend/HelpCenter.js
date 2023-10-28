import React from 'react';

const HelpCenter = () => {
  // Define your sections and articles here (you can use objects or an array of data)
  const sections = [
    {
      title: 'Getting Started',
      articles: [
        {
          title: 'Creating an Account',
          content: 'Learn how to create an account on our website.',
        },
        {
          title: 'Placing an Order',
          content: 'Find out how to place an order and make a payment.',
        },
      ],
    },
    {
      title: 'Shipping & Delivery',
      articles: [
        {
          title: 'Tracking Your Order',
          content: 'Learn how to track your order status.',
        },
        {
          title: 'Delivery Times',
          content: 'Get information on estimated delivery times.',
        },
      ],
    },
    // Add more sections and articles as needed
  ];

  return (
      <>
        <div className="container-fluid py-3 bg-light">
          <div className="container mb-5 py-3 px-4 bg-white privacy">
            <h4 className="text-center">Help Center</h4>

            {sections.map((section, index) => (
              <div key={index}>
                <h5>{section.title}</h5>
                <ul>
                  {section.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <h6>{article.title}</h6>
                      <p>{article.content}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </>
  );
};

export default HelpCenter;
