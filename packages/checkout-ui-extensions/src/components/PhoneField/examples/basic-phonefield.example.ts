import {extend, PhoneField} from '@shopify/checkout-ui-extensions';

extend('Checkout::Feature::Render', (root) => {
  const textfield = root.createComponent(PhoneField, {
    label: 'Phone',
  });

  root.appendChild(textfield);
});