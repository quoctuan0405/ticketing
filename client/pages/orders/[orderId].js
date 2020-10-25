import {useState, useEffect} from 'react';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';
import StripeCheckout from 'react-stripe-checkout';

const OrderShow = ({order, currentUser}) => {
    const [timeLeft, setTimeLeft] = useState(0);
    const {doRequest, errors} = useRequest({
        url: '/api/payments',
        method: 'post',
        body: {
            orderId: order.id
        },
        onSuccess: () => Router.push('/orders')
    });

    useEffect(() => {
        const findTimeLeft = () => {
            const msLeft = new Date(order.expiresAt) - new Date();
            setTimeLeft(Math.round(msLeft / 1000));
        };

        findTimeLeft();
        const timerId = setInterval(findTimeLeft, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [order]);

    if (timeLeft < 0) {
        return (
            <div>
                <h1>Order expired!</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>{timeLeft} seconds until order expires</h1>
            <StripeCheckout
                token={({id}) => doRequest({token: id})}
                stripeKey="pk_test_VgCeS0nRkVdyoMuIa7ea9oks00gFCqctML"
                amount={order.ticket.price * 100}
                email={currentUser.email}
            />
            {errors}
        </div>
    );
}

OrderShow.getInitialProps = async (context, client) => {
    const {orderId} = context.query;
    const {data} = await client.get(`/api/orders/${orderId}`);

    return {order: data};
}

export default OrderShow;