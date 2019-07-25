import { storableError } from '../util/errors';
import * as log from '../util/log';

// ================ Action types ================ //

export const CREATE_STRIPE_CUSTOMER_REQUEST = 'app/stripe/CREATE_STRIPE_CUSTOMER_REQUEST';
export const CREATE_STRIPE_CUSTOMER_SUCCESS = 'app/stripe/CREATE_STRIPE_CUSTOMER_SUCCESS';
export const CREATE_STRIPE_CUSTOMER_ERROR = 'app/stripe/CREATE_STRIPE_CUSTOMER_ERROR';

// ================ Reducer ================ //

const initialState = {
  createStripeCustomerInProgress: null,
  createStripeCustomerError: null,
  stripeCustomer: null,
};

export default function payoutMethodsPageReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_STRIPE_CUSTOMER_REQUEST:
      return { ...state, createStripeCustomerError: null, createStripeCustomerInProgress: true };
    case CREATE_STRIPE_CUSTOMER_SUCCESS:
      return {
        ...state,
        createStripeCustomerInProgress: false,
        stripeCustomer: payload,
        stripeCustomerFetched: true,
      };
    case CREATE_STRIPE_CUSTOMER_ERROR:
      console.error(payload);
      return {
        ...state,
        createStripeCustomerError: payload,
        createStripeCustomerInProgress: false,
      };
    default:
      return state;
  }
}

// ================ Action creators ================ //

export const stripeCustomerCreateRequest = () => ({ type: CREATE_STRIPE_CUSTOMER_REQUEST });

export const stripeCustomerCreateSuccess = stripeCustomer => ({
  type: CREATE_STRIPE_CUSTOMER_SUCCESS,
  payload: stripeCustomer,
});

export const stripeCustomerCreateError = e => ({
  type: CREATE_STRIPE_CUSTOMER_ERROR,
  payload: e,
  error: true,
});

// ================ Thunks ================ //

export const createStripeCustomer = params => (dispatch, getState, sdk) => {
  const stripePaymentMethodId = params.setupIntent.payment_method;
  console.log('stripePaymentMethodId', stripePaymentMethodId);

  dispatch(stripeCustomerCreateRequest());
  return sdk.stripeCustomer
    .create(stripePaymentMethodId, {
      expand: true,
      include: ['defaultPaymentMethod'],
    })
    .then(response => {
      const stripeCustomer = response.data.data;
      dispatch(stripeCustomerCreateSuccess(stripeCustomer));
      return stripeCustomer;
    })
    .catch(e => {
      log.error(e, 'create-stripe-user-failed');
      dispatch(stripeCustomerCreateError(storableError(e)));
    });
};
