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
  getAllMessageReplies : environment.apiURL + '/meta/messages-and-replies/get-message-and-reply-list',
  saveMessageReplies : environment.apiURL + '/meta/messages-and-replies/create-message-and-reply',
  updateMessageReplies : environment.apiURL + '/meta/messages-and-replies/update-message-and-reply/',
  deleteMessageReplies : environment.apiURL + '/meta/messages-and-replies/delete-message-and-reply/',

  // Template
  saveTemplate : environment.apiURL + '/meta/message-template/create-message-template',
  getAllTemplate : environment.apiURL + '/meta/message-template/get-all-message-templates',
  deleteTemplate : environment.apiURL +'/meta/message-template/delete-message-template/',
  uploadMedia: environment.apiURL + '/meta/media/upload',

  // Flows
  getAllFlows : environment.apiURL + '/meta/flows/get-all-flows',

  // Chat
  getAllConversation : environment.apiURL + '/conversations/get-all-conversations',
  getSingleConversation : environment.apiURL +'/messages/get-user-messages',
  sendMessage: environment.apiURL + '/messages/send-reply',
  updateCustomerName: environment.apiURL + '/conversations/update-conversation/',
  addCustomerName: environment.apiURL + '/conversations/create-conversation',

  // Quick Replies
  saveQuickReplies : environment.apiURL + '/meta/quick-replies/create-quick-reply',
  getAllQuickReplies : environment.apiURL + '/meta/quick-replies/get-quick-replies', 
  getAllQuickRepliesForList : environment.apiURL + '/meta/quick-replies/get-quick-replies-list', 
  deleteQuickReplies : environment.apiURL + '/meta/quick-replies/delete-quick-reply/',
  sendQuickReplies : environment.apiURL + '/meta/quick-replies/send-quick-reply',
  getSingleQuickReply : environment.apiURL + '/meta/quick-replies/get-single-quick-reply/',
  updateSaveQuickReply : environment.apiURL + '/meta/quick-replies/update-quick-reply/',

  // start message
  saveStartMessage : environment.apiURL + '/messages/star/',

  // Save Label
  saveLabel : environment.apiURL + '/labels/create-label',
  getAllLabel : environment.apiURL + '/labels/get-labels',
  getSingleLabel : environment.apiURL + '/labels/get-single-label/',
  updateLabel :  environment.apiURL + '/labels/update-label/',
  deleteLabel : environment.apiURL + '/labels/delete-label/',
  getLabelList : environment.apiURL + '/labels/get-labels-list',
  setLabel : environment.apiURL + '/labels/set-label',
  removeLabel : environment.apiURL + '/labels/remove-label',

  // Actions
  saveAction : environment.apiURL + '/meta/actions/create-action',
  getAllAction : environment.apiURL + '/meta/actions/get-actions',
  getSingleAction : environment.apiURL + '/meta/actions/get-single-action/',
  updateAction : environment.apiURL + '/meta/actions/update-action/',
  deleteAction : environment.apiURL + '/meta/actions/delete-action/',
  getActionList : environment.apiURL + '/meta/actions/get-actions-list',
  setAction : environment.apiURL + '/meta/actions/set-action',
  removeAction : environment.apiURL + '/meta/actions/remove-action/',
  
};
