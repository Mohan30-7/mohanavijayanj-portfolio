## Mohanavijayan J – Developer Portfolio

Modern single-page portfolio built with **React + Vite**, glassmorphism UI, scroll animations, particles background, and an EmailJS-powered contact form.

### Run the project

- **Install dependencies**:

```bash
cd d:\Portfolio
npm install
```

- **Start dev server**:

```bash
npm run dev
```

Open the printed `http://localhost:5173` URL in your browser.

### Configure EmailJS (contact form)

1. Go to [`https://www.emailjs.com`](https://www.emailjs.com) and create a free account.
2. Add an email service (e.g. Gmail) and note your **Service ID**.
3. Create an **Email Template** with fields: `user_name`, `user_email`, `message`. Note the **Template ID**.
4. Get your **Public Key** from the EmailJS dashboard.
5. In `src/components/Contact.jsx`, replace:

```js
'your_service_id',
'your_template_id',
formRef.current,
'your_public_key'
```

with your actual EmailJS values.

The form will then send submissions to `mohanavijayanj@gmail.com` (configure this inside your EmailJS template).

