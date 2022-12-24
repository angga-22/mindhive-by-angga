import { CARD_IMAGE_BRAND, CARD_TYPE_REGEX } from "@/constants/payment";

function detectCardType(number) {
  for (const key in CARD_TYPE_REGEX) {
    if (CARD_TYPE_REGEX[key].test(number.replace(/ /g, ''))) {
      return key;
    }
  }
  return 'Unknown';
}

function getCardImage(brand) {
  return CARD_IMAGE_BRAND[brand.toUpperCase()] || CARD_IMAGE_BRAND.DEFAULT;
}

export const stripe = {
  detectCardType,
  getCardImage,
};
