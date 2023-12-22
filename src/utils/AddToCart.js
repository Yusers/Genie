import React from 'react';
import { toast } from 'react-toastify';

export const AddToCart = ({ api, imageUrl, title, price, material, fit, quantity }) => {
  fetch(api, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ imageUrl, title, price, material, fit, quantity }),
  }).then(function (res) {
    if (res) {
      toast.success('Create blog success');
    }
  });
  return <div>AddToCart</div>;
};
