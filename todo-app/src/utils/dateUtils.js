// utils/dateUtils.js
export const isExpired = (expiryDate) => {
  const now = new Date();
  const expiry = new Date(expiryDate);
  return expiry < now; // Check if the expiry date has passed
};

export const isExpiryApproaching = (expiryDate) => {
  const now = new Date();
  const expiry = new Date(expiryDate);
  const timeDifference = expiry - now;
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  return daysDifference <= 1 && !isExpired(expiryDate); // Notify if expiry is within 1 day AND not expired
};
