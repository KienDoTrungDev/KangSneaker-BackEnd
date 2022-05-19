module.exports = {
  // kích thược tối đa của request
  MAX_SIZE_JSON_REQUEST: '25mb',

  // số lượng của mã xác thực
  NUMBER_VERIFY_CODE: 6,

  // thời gian tồn tại của mã xác thực
  VERIFY_CODE_TIME_MILLISECONDS: 10 * 60 * 1000,

  // số lần đăng nhập sai tối đa
  MAX_FAILED_LOGIN_TIMES: 5,

  // thời gian sống mặc định cho jwt
  JWT_EXPIRES_TIME: 3 * 24 * 3600, //3 days (by sec)

  // thời hạn hiệu lực cho token
  COOKIE_EXPIRES_TIME: 10 * 24 * 3600 * 1000, //10 days

  // thời hạn hiệu lực cho refresh token
  JWT_REFRESH_EXPIRES_TIME: 6 * 30 * 24 * 3600, //6 months

  PRODUCT_TYPES_VN: [
    { type: 0, label: 'Giày thể thao' },
    { type: 1, label: 'Giày boots' },
    { type: 2, label: 'Giày cao gót' },
    { type: 3, label: 'Giày da nam' },
    { type: 4, label: 'Tất chân' },
    { type: 5, label: 'Dây giày' },
    { type: 6, label: 'Dung dịch vệ sinh giày' },

  ],

  // Loại sản phẩm
  PRODUCT_TYPES: {
    SNEAKER: 0,
    BOOTS: 1,
    HIGHHEELS: 2,
    LEATHER: 3,
    SOCKS: 4,
    SHOESLACE: 5,
    CLEAN: 6,
  },
};
