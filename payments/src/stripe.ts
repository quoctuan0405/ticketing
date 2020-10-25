// kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=sk_test_JKL9X3aIWsxVquII48Y2uRn700Vk5UBMbH

import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_KEY!, {
    apiVersion: '2020-08-27'
});