
module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        'research paper': {
          field: 'slug',
          references: 'title'
        },
        'case-study': {
          field: 'slug',
          references: 'title'
        },
        'news-article': {
          field: 'slug',
          references: 'title'
        },
        'event': {
          field: 'slug',
          references: 'title'
        },
        'podcast': {
          field: 'slug',
          references: 'title'
        }
      },
    },
  },
  email: {
    config: {
      provider: env('EMAIL_PROVIDER'),
      providerOptions: {
        host: env('EMAIL_SMTP_HOST', 'smtp.example.com'),
        port: env('EMAIL_SMTP_PORT', 587),
        auth: {
          user: env('EMAIL_SMTP_USERNAME'),
          pass: env('EMAIL_SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_ADDRESS_FROM'),
        defaultReplyTo: env('EMAIL_ADDRESS_REPLY'),
      },
    },
  },
});
