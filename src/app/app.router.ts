import { environment } from "../environments/environment.prod";

export const url = {
  login: environment.apiURL + "/users/auth/login",

  // Product
  addCategory:environment.apiURL + '/meta/chatbot/whatsapp-product-category/create-whatsapp-product-category',
  getCategory:environment.apiURL + '/meta/chatbot/whatsapp-product-category/get-all-whatsapp-product-categories',
  getProduct:environment.apiURL + '/meta/chatbot/whatsapp-product/get-all-whatsapp-product-images',
  deleteProduct:environment.apiURL + '/meta/chatbot/whatsapp-product/delete-whatsapp-product-image/',

  addProduct:environment.apiURL + '/meta/chatbot/whatsapp-product/add-whatsapp-product-images',
  editProduct:environment.apiURL + '/meta/chatbot/whatsapp-product/update-whatsapp-product/',
  getSingleProduct: environment.apiURL + '/meta/chatbot/whatsapp-product/get-single-whatsapp-product-image/'
};
