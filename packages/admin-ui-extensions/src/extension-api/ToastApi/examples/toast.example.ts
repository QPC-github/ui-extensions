import {extend, Button} from '@shopify/admin-ui-extensions';

extend('Admin::Product::SubscriptionPlan::Add', (root, api) => {
  const {toast} = api;

  const button = root.createComponent(Button, {
    title: 'Pop toast',
    primary: true,
    onPress: () => toast.show('Toast popped!'),
  });
  root.appendChild(button);

  const errorButton = root.createComponent(Button, {
    title: 'Do something',
    onPress: () => toast.show('That didn’t work.', {error: true}),
  });
  root.appendChild(errorButton);

  root.mount();
});
