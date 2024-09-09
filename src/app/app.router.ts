import { environment } from "../environments/environment.prod";

export const url = {
  login: environment.apiURL + "/users/auth/login",

  // Whatsapp Business
  tokenWebHook: environment.apiURL + '/meta/whatsapp-business/create-webhook-verify-token',
  getToken: environment.apiURL + '/meta/whatsapp-business/get-whatsapp-business-details',
  addBusinessDetails : environment.apiURL + '/meta/whatsapp-business/add-whatsapp-business-details',
  updateBusinessDetails : environment.apiURL + '/meta/whatsapp-business/update-whatsapp-business-details',

  // Product
  addCategory:environment.apiURL + '/meta/chatbot/whatsapp-product-category/create-whatsapp-product-category',
  getCategory:environment.apiURL + '/meta/chatbot/whatsapp-product-category/get-all-whatsapp-product-categories',
  getProduct:environment.apiURL + '/meta/chatbot/whatsapp-product/get-all-whatsapp-product-images',
  deleteProduct:environment.apiURL + '/meta/chatbot/whatsapp-product/delete-whatsapp-product-image/',

  addProduct:environment.apiURL + '/meta/chatbot/whatsapp-product/add-whatsapp-product-images',
  editProduct:environment.apiURL + '/meta/chatbot/whatsapp-product/update-whatsapp-product/',
  getSingleProduct: environment.apiURL + '/meta/chatbot/whatsapp-product/get-single-whatsapp-product-image/',

  getMessageReplies : environment.apiURL + '/meta/chatbot/message-and-reply/get-all-message-and-reply',
  saveMessageReplies : environment.apiURL + '/meta/chatbot/message-and-reply/create-message-and-reply'

};
