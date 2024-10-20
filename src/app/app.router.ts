import { environment } from "../environments/environment.prod";

export const url = {
  login: environment.apiURL + "/auth/login",

  // Whatsapp Business
  tokenWebHook: environment.apiURL + '/meta/whatsapp-business/create-webhook-verify-token',
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
  saveMessageReplies : environment.apiURL + '/meta/messages-and-replies/create-message-and-reply',
  deleteMessageReplies : environment.apiURL + '/meta/messages-and-replies/delete-message-and-reply/',

  // Template
  saveTemplate : environment.apiURL + '/meta/message-template/create-message-template',
  getAllTemplate : environment.apiURL + '/meta/message-template/get-all-message-templates',
  deleteTemplate : environment.apiURL +'/meta/message-template/delete-message-template/',

  // Flows
  getAllFlows : environment.apiURL + '/meta/flows/get-all-flows',

  // Chat
  getAllConversation : environment.apiURL + '/conversations/get-all-conversations',
  getSingleConversation : environment.apiURL +'/messages/get-user-messages'
};
