import { StripeProvider } from 'react-stripe-elements';

const stripeConfig = {
  apiKey: 'pk_test_51O3Z7PSIbaKsbedCfgdUOKuuSWnyImmNVcDbMgHGyCZCPj6JswnywRlV6Cfn8n7fAEad95aLkso1rZlTX1ZHRaHJ00mo996mJT',
};

export default StripeProvider(stripeConfig);
