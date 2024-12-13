import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom"; // Make sure this hook is imported

const OrderSuccess = () => {
  const [successDetails, setSuccessDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams(); // Extract query parameters

  useEffect(() => {
    const sessionId = searchParams.get("sessionId"); // Get sessionId from the URL

    console.log('sessionId', sessionId);

    console.log(sessionId); // Log sessionId for debugging
    if (!sessionId) {
      setError("Session ID is missing in the URL.");
      setLoading(false);
      return;
    }

    const fetchSuccessDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PORT}/api/ordersuccess/success?sessionId=${sessionId}`
        );
        setSuccessDetails(response.data);
        console.log('Success Data', data);
      } catch (err) {
        setError("Failed to fetch success details.");
      } finally {
        setLoading(false);
      }
    };

    fetchSuccessDetails();
  }, [searchParams]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="success-page">
      <h2>Order Success!</h2>
      <p>
        Your order has been placed successfully. Thank you for your purchase!
      </p>
      {successDetails && (
        <div>
          <h3>Order Details:</h3>
          <p>Order ID: {successDetails._id}</p>
          <p>Total: Rs {successDetails.totalAmount}</p>
        </div>
      )}
    </div>
    
  );
};

export default OrderSuccess;
