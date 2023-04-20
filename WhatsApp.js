   var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?47835';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var options = {
  "enabled":true,
  "chatButtonSetting":{
      "backgroundColor":"#ff0000",
      "ctaText":"FREE NETFLIX",
      "borderRadius":"20",
      "marginLeft":"0",
      "marginBottom":"50",
      "marginRight":"50",
      "position":"right"
  },
  "brandSetting":{
      "brandName":"FREE NETFLIX",
      "brandSubTitle":"Typically replies within a 12hr",
      "brandImg":"https://i.postimg.cc/wxNWxtMY/rounded-corners-removebg-preview.png",
      "welcomeText":"Hi there! Welcome to Free Netflix\nHow can I help you?",
      "messageText":"Hi , I am Free Netflix User and I . . .",
      "backgroundColor":"#000000",
      "ctaText":"Chat Now",
      "borderRadius":"10",
      "autoShow":false,
      "phoneNumber":"918307056141"
  }
};
    s.onload = function() {
        CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
