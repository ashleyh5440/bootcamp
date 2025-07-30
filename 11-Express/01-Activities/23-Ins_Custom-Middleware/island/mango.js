/**
 * Mango is orange
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
// req = request object
// res = response object
// next = next callback function (it will run the next route)
function doMangoStuff(req, res, next) {
  req.mango = "Orange";

  next();
}

module.exports = {
  doMangoStuff
}