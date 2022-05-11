module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '650f483a649e42e05fe04768e147b3e5'),
  },
});
