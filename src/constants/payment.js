import union from '@/assets/icons/card/unionpay.svg';
import visa from '@/assets/icons/card/visa.svg';
import mastercard from '@/assets/icons/card/mastercard.svg';
import amex from '@/assets/icons/card/amex.svg';
import generic from '@/assets/icons/card/generic.svg';
const CARD_IMAGE_BRAND = {
  UNIONPAY: union,
  VISA: visa,
  MASTERCARD: mastercard,
  'AMERICAN EXPRESS': amex,
  DEFAULT: generic
};

const CARD_TYPE_REGEX = {
  UnionPay: /^(62|88)\d+$/,
  Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  MasterCard: /^5[1-5][0-9]{14}$/,
  'American Express': /^3[47][0-9]{13}$/,
  Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  JCB: /^(?:2131|1800|35\d{3})\d{11}$/
};

const DEFAULT_CARD = {
  id: null,
  brand: '',
  exp_month: 0,
  exp_year: 0,
  country: '',
  funding: '',
  last4: '',
  fingerprint: ''
};

export { CARD_IMAGE_BRAND, CARD_TYPE_REGEX, DEFAULT_CARD };