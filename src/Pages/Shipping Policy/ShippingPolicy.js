import React from 'react';
import  "./ShippingPolicy.css";

const ShippingPolicy = () => {
  return (
    <div className="main_section">
    <div className="refundpolicy_container">
        <div className="refundpolicy_title">
            <h1>Shipping policy</h1>
        </div>
        <div className="refundpolicy_body">
        <div className="refundpolicy_body_content">
            <ul>
                <li>
                    <span>
                    <strong>Free Shipping</strong> on all orders over the value of <strong>Rs.2000</strong>.
                    </span>
                </li>
                <li>
                    <span>
                    We charge <strong>Rs.200</strong> for shipping on all orders under the value of <strong>Rs.2000</strong>.
                    </span>
                </li>
                <li>
                    <span>Orders placed by 12:00 pm (Pakistan Standard Time) will be shipped the same day via Registered Courier Service. Orders received after 12:00 pm will be dispatched the next day.</span>
                </li>
                <li>
                    <span>
                    Orders received on Sundays and on Pakistan's National Holidays will be processed and shipped on the next working day.
                    </span>
                </li>
                <li>
                    <span>
                    Delivery time is between <strong>4 to 7 working days</strong> (No delivery on Sundays). However delivery can take up to 7 working days during the busy shopping season or our mega sales events.
                    </span>
                </li>
                <li>
                    <span>
                    We will deliver to the home or office address indicated by you when you place an order.
                    </span>
                </li>
                <li>
                    <span>
                    We cannot deliver to PO boxes. All deliveries must be signed for upon receipt. We will try at least twice to deliver your order at the address indicated by you.
                    </span>
                </li>
                <li>
                    <span>
                    If you have any questions you can contact us at <strong>0302-2994444, 0304-4428888</strong> or email us at <strong>support@radstore.pk</strong>.
                    </span>
                </li>
            </ul>
        </div>
        </div>
    </div>
    </div>
  )
}

export default ShippingPolicy
