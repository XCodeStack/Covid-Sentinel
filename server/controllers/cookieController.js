const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  const id = res.locals.id;
  res.cookie('ssid', id, {
    secure: true,
    httpOnly: true,
    maxAge: 3600000, // cookie should last one hour
  });
  console.log(id);
  return next();
};

module.exports = cookieController;
