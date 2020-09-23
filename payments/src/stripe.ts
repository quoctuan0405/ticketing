// kubectl create secret generic stripe-secret --from-literal STRIPE_KEY=pk_test_VgCeS0nRkVdyoMuIa7ea9oks00gFCqctML

import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_KEY!, {
    apiVersion: '2020-08-27'
});