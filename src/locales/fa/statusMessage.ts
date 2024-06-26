export default deepFreeze({
  statusMessage: {
    200: 'درخواست با موفقیت انجام شد',
    201: 'درخواست شما با مموفقیت ثبت شد',
    202: 'درخواست شما ثبت شد و در حال بررسی می باشد',
    204: 'موردی یافت نشد',

    400: 'مدل ارسال شده نامعتبر است',
    401: 'توکن ورود شما نامعتبر است',
    403: 'شما اجازه دسترسی به این صفحه را ندارید',
    404: 'موردی یافت نشد!',
    405: 'شما اجازه این عملیات را ندارید',
    406: 'درخواست فرستاده شده قابل قبول نیست',
    408: 'پاسخی از سرور دریافت نشد',
    413: 'محتوای ارسالی بیش از حد مجاز هست',
    414: 'طول آدرس بیش از حد مجاز هست',
    415: 'نوع فایل پشتیبانی نمیشود',

    500: 'اوه، متاسفانه مشکلی پیش آمده است!',
    501: 'سرور پشتیبانی نمی کند از چیزی که ارسال شده است',
    503: 'سرور از دسترسی خارج شده است',
    504: 'مدت زمان درخواست شما به پایان رسیده است',
    505: 'نسخه HTTP پشتیبانی نمی شود !'
  }
})
