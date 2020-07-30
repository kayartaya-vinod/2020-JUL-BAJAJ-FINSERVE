module.exports = (req, resp, next) => {
    // no use of 'req' here
    // add HTTP response headers 'Access-Control-Allow-Origin', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Headers'
    resp.setHeader('Access-Control-Allow-Origin', '*');
    // resp.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    // resp.setHeader('Access-Control-Allow-Credentials', 'true');
    // resp.setHeader('Access-Control-Allow-Headers', '*');
    // pass the control to the next available middleware or the request hendler
    next();
};