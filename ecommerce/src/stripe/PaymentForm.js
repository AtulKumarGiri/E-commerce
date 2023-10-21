import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class PaymentForm extends Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const { stripe, handlePayment } = this.props;

    try {
      const { token } = await stripe.createToken({ type: 'card' });
      if (token) {
        // Send the token to your server to complete the payment
        handlePayment(e, 'stripe');
      }
    } catch (error) {
      console.error(error);
      // Handle error, show an error message to the user
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Card details</label>
        <CardElement />
        <button type="submit" className="btn btn-primary">
          Pay Online
        </button>
      </form>
    );
  }
}

export default injectStripe(PaymentForm);
