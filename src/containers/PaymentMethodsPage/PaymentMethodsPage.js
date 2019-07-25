import React from 'react';
import { bool } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { ensureCurrentUser } from '../../util/data';
import { propTypes } from '../../util/types';
import { createStripeCustomer } from '../../ducks/paymentMethods.duck';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import {
  IconClose,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
  Page,
  UserNav,
} from '../../components';
import { TopbarContainer } from '..';
import { PaymentMethodsForm } from '../../forms';
import { createStripeSetupIntent, loadData } from './PaymentMethodsPage.duck.js';

import css from './PaymentMethodsPage.css';

export const PaymentMethodsPageComponent = props => {
  const {
    currentUser,
    scrollingDisabled,
    intl,
    onCreateSetupIntent,
    onCreateStripeCustomer,
  } = props;

  const tabs = [
    {
      text: <FormattedMessage id="PaymentMethodsPage.contactDetailsTabTitle" />,
      selected: false,
      linkProps: {
        name: 'ContactDetailsPage',
      },
    },
    {
      text: <FormattedMessage id="PaymentMethodsPage.passwordTabTitle" />,
      selected: false,
      linkProps: {
        name: 'PasswordChangePage',
      },
    },
    {
      text: <FormattedMessage id="PaymentMethodsPage.paymentsTabTitle" />,
      selected: false,
      linkProps: {
        name: 'PayoutPreferencesPage',
      },
    },
    {
      text: <FormattedMessage id="PaymentMethodsPage.paymentMethodsTabTitle" />,
      selected: true,
      linkProps: {
        name: 'PaymentMethodsPage',
      },
    },
  ];

  const title = intl.formatMessage({ id: 'PaymentMethodsPage.title' });

  const ensuredCurrentUser = ensureCurrentUser(currentUser);
  const currentUserLoaded = !!ensuredCurrentUser.id;

  // Get first and last name of the current user and use it in the StripePaymentForm to autofill the name field
  const userName = currentUserLoaded
    ? `${ensuredCurrentUser.attributes.profile.firstName} ${
        ensuredCurrentUser.attributes.profile.lastName
      }`
    : null;

  const initalValuesForStripePayment = { name: userName, country: 'FI' };

  const handleSubmit = params => {
    const { stripe, card, formValues } = params;
    onCreateSetupIntent().then(setupIntent => {
      stripe
        .handleCardSetup(setupIntent.attributes.clientSecret, card, {
          payment_method_data: {
            billing_details: { name: formValues.name },
          },
        })
        .then(result => {
          if (result.error) {
            console.log('handleCardSetup failed', result.error);
          } else {
            console.log('Success', result);
            console.log('currentUser', currentUser);

            if (!currentUser.stripeCustormer) {
              onCreateStripeCustomer(result);
            }

            // TODO save payment method
          }
        });
    });
  };

  const savedPaymentMethod = false; //TODO
  const handleRemovePaymentMethod = () => null; //TODO

  const paymentMethodPlaceholder = intl.formatMessage(
    { id: 'PaymentMethodsPage.savedPaymentMethodPlaceholder' },
    { lastFour: '1234' }
  );

  return (
    <Page title={title} scrollingDisabled={scrollingDisabled}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer
            currentPage="PaymentMethodsPage"
            desktopClassName={css.desktopTopbar}
            mobileClassName={css.mobileTopbar}
          />
          <UserNav selectedPageName="PaymentMethodsPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.title}>
              <FormattedMessage id="PaymentMethodsPage.heading" />
            </h1>
            {!savedPaymentMethod ? (
              <PaymentMethodsForm
                className={css.paymentForm}
                formId="PaymentMethodsForm"
                initialValues={initalValuesForStripePayment}
                onSubmit={handleSubmit} //TODO
              />
            ) : (
              <div onClick={handleRemovePaymentMethod} style={{ cursor: 'pointer' }}>
                <div className={css.savedPaymentMethod}>
                  <span className={css.savedPaymentMethodTitle}>
                    <FormattedMessage id="PaymentMethodsPage.savedPaymentMethodTitle" />
                  </span>
                  <p>{paymentMethodPlaceholder}</p>
                </div>
                <div className={css.savedPaymentMethodDelete}>
                  <IconClose rootClassName={css.closeIcon} size="small" />
                  <FormattedMessage id="PaymentMethodsPage.deletePaymentMethod" />
                </div>
              </div>
            )}
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  );
};

PaymentMethodsPageComponent.defaultProps = {
  currentUser: null,
  createStripeAccountError: null,
};

PaymentMethodsPageComponent.propTypes = {
  currentUser: propTypes.currentUser,
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const { currentUser } = state.user;
  return {
    currentUser,
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onCreateSetupIntent: params => dispatch(createStripeSetupIntent(params)),
  onCreateStripeCustomer: params => dispatch(createStripeCustomer(params)),
});

const PaymentMethodsPage = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(PaymentMethodsPageComponent);

PaymentMethodsPage.loadData = loadData;

export default PaymentMethodsPage;
