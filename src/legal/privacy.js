// Privacy Policy draft for Ombre.
//
// IMPORTANT: this is a starting draft, not legal advice. Before launch,
// confirm every statement below matches what Ombre actually does (marked
// CONFIRM), and have a lawyer review it.
//
// Structure: `text` paragraphs, then an optional `list`, then optional
// `more` paragraphs. The contact email becomes a link automatically.

export const privacy = {
  title: 'Privacy Policy',
  updated: '10 November 2026',
  intro:
    'This Privacy Policy explains how Ombre (“we”, “us”) collects, uses, shares, and protects your personal data when you visit our website or use our AI workspace (together, the “Service”). Please read it carefully. By using the Service, you agree to the practices described here.',
  sections: [
    {
      heading: 'Who we are',
      text: [
        'Ombre is an AI workspace that brings together General AI, specialized AI Mentors, and Projects.',
        'Under India’s Digital Personal Data Protection Act, 2023 (the “DPDP Act”), we are the “data fiduciary” for the personal data you give us. That means we decide why and how it is used.',
        'You can reach us at ombrementors@gmail.com.',
      ],
    },
    {
      heading: 'What we collect',
      text: ['We collect only what we need to run Ombre:'],
      list: [
        'Account details: what you give us when you create an account, such as your name and email address.',
        'Your content: your conversations with General AI and Mentors, the files you upload, and the material you keep in your Projects.',
        'Messages to us: anything you send when you contact us.',
        'Technical information: basic details such as your browser, device, and IP address, which may be collected automatically to keep the Service working and secure.',
      ],
      more: [
        'Please do not enter passwords, government ID numbers, or payment card details into conversations. Mentors can help with topics such as business, coding, productivity, and health, so share only what you are comfortable sharing.',
      ],
    },
    {
      heading: 'How we use your data',
      list: [
        'To provide the Service, including generating responses and carrying context across Mentors and Projects.',
        'To create and manage your account and keep it secure.',
        'To respond to your questions and requests.',
        'To find and fix problems, prevent misuse, and understand how the Service is used so we can improve it.',
        'To meet our legal obligations.',
      ],
      more: [
        // CONFIRM: that Ombre does not currently use content to train models,
        // and that Ombre does not sell personal data.
        'We use your data only for these purposes. If we ever want to use your content for something else, such as training AI models, we will ask for your permission first.',
        'We do not sell your personal data.',
      ],
    },
    {
      heading: 'AI providers and other service providers',
      text: [
        // CONFIRM: the providers used (and consider naming them here).
        'To generate responses, the content you send to General AI or a Mentor is processed by third-party AI model providers acting on our behalf. We also use providers for hosting, storage, sign-in, and email. These providers may use your data only to deliver their services to us, and they are required to protect it.',
      ],
    },
    {
      heading: 'When we share data',
      text: ['We share personal data only:'],
      list: [
        'With the providers described above.',
        'When the law requires it, such as a valid order from a court or authority.',
        'To protect the rights, safety, or security of our users, ourselves, or others.',
        'If Ombre is involved in a merger or sale. We will tell you, and your data will stay protected.',
        'With your consent.',
      ],
    },
    {
      heading: 'Security',
      text: [
        'We use reasonable technical and organisational measures to protect your data against loss, misuse, and unauthorised access. No system is completely secure, so we cannot promise absolute security.',
        'If a personal data breach affects you, we will tell you and the authorities as the law requires.',
      ],
    },
    {
      heading: 'How long we keep it',
      text: [
        // CONFIRM: retention and deletion practice.
        'We keep your data while your account is active and for as long as needed to provide the Service. When you ask us to delete your account, we will delete or anonymise your personal data within a reasonable time, unless the law requires us to keep some of it.',
      ],
    },
    {
      heading: 'Your rights',
      text: ['You have the right to:'],
      list: [
        'Ask for a summary of the personal data we hold about you and how it is used.',
        'Correct, complete, or update your data.',
        'Ask us to erase your data.',
        'Withdraw your consent at any time. This is as easy as giving it, and it does not affect what we did before you withdrew.',
        'Have a complaint heard and resolved.',
        'Name another person to exercise your rights if you die or cannot act for yourself.',
      ],
      more: [
        'Depending on where you live, you may have extra rights, such as asking us to move your data or to stop certain uses. We will respect them as the law requires.',
        'To use any of these rights, email ombrementors@gmail.com. We may need to confirm it is really you before we act.',
      ],
    },
    {
      heading: 'Cookies',
      text: [
        // CONFIRM: that the app uses cookies only for sign-in and settings.
        'This website uses only the storage it needs to work, and it does not use advertising cookies. The Ombre app may use cookies or similar tools to keep you signed in and remember your settings. If we add analytics tools, we will update this Policy.',
      ],
    },
    {
      heading: 'Children',
      text: [
        // CONFIRM: the minimum age.
        'Ombre is for people aged 18 and over. We do not knowingly collect personal data from anyone under 18. If you think a child has given us data, email us and we will delete it.',
      ],
    },
    {
      heading: 'Transfers outside India',
      text: [
        'Our providers may process data in other countries. We take steps to make sure your data stays protected wherever it goes, and we follow the rules on transfers that apply to us.',
      ],
    },
    {
      heading: 'Changes to this Policy',
      text: [
        'We may update this Policy. When we do, we will change the date at the top, and if the changes are important, we will tell you directly.',
      ],
    },
    {
      heading: 'Contact and complaints',
      text: [
        'For questions, requests, or complaints about your data, email ombrementors@gmail.com. We will respond within a reasonable time, and in any case within the time the law requires.',
      ],
    },
  ],
}
