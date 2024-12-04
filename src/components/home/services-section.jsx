const Services = () => {
  return (
    <>
      <div class="col-md-3 col-sm-6 mb-4">
        <div class="mb-3 text-center">
          <img src="headphone.png" className="headphone" />
          <h5 class="mt-3">Support 24 h</h5>
          <p>Dedicated Support</p>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 mb-4">
        <div class="mb-3 text-center">
          <img src="sheild.png" className="payment" />
          <h5 class="mt-3">Secure Payment</h5>
          <p>ensure your money is safe</p>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 mb-4">
        <div class="mb-3 text-center">
          <img src="refund.png" className="headphone" />
          <h5 class="mt-3">Refundable</h5>
          <p>Damage items can refund it</p>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 mb-4">
        <div class="mb-3 text-center">
          <img src="shipping.png" className="shipping" />
          <h5 class="mt-3">Free Delievery</h5>
          <p>Order over 40$</p>
        </div>
      </div>
    </>
  );
};

export default Services;
