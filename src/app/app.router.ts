import { environment } from "../environments/environment.prod";

export const url = {
  login: environment.apiURL + "/auth/login",

  // Whatsapp Business
  tokenWebHook: environment.apiURL + '/meta/webhook',
  getToken: environment.apiURL + '/meta/whatsapp-business/get-whatsapp-business-details',
  addBusinessDetails : environment.apiURL + '/meta/whatsapp-business/add-whatsapp-business-details',
  updateBusinessDetails : environment.apiURL + '/meta/whatsapp-business/update-whatsapp-business-details',

  // Product
  addProduct:environment.apiURL + '/meta/whatsapp-products/add-whatsapp-product',
  getProduct:environment.apiURL + '/meta/whatsapp-products/get-all-whatsapp-product',
  deleteProduct:environment.apiURL + '/meta/whatsapp-products/delete-whatsapp-product/',
  editProduct:environment.apiURL + '/meta/whatsapp-products/update-whatsapp-product/',
  getSingleProduct: environment.apiURL + '/meta/whatsapp-products/get-single-whatsapp-product/',

  // Category  
  addCategory:environment.apiURL + '/meta/whatsapp-product-categories/create-whatsapp-product-category',
  getCategory:environment.apiURL + '/meta/whatsapp-product-categories/get-all-whatsapp-product-categories',
  deleteCategory:environment.apiURL + '/meta/whatsapp-product-categories/delete-whatsapp-product-category/',

  // 
  getMessageReplies : environment.apiURL + '/meta/messages-and-replies/get-all-message-and-reply',
  saveMessageReplies : environment.apiURL + '/meta/messages-and-replies/create-message-and-reply'

};
