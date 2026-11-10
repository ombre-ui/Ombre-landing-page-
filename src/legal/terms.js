// Terms of Use draft for Ombre.
//
// IMPORTANT: this is a starting draft, not legal advice. Before launch,
// confirm the statements marked CONFIRM, and have a lawyer review it.
//
// Structure: `text` paragraphs, then an optional `list`, then optional
// `more` paragraphs. The contact email becomes a link automatically.

export const terms = {
  title: 'Terms of Use',
  updated: '10 November 2026',
  intro:
    'These Terms of Use (“Terms”) are the agreement between you and Ombre (“we”, “us”) for your use of our website and AI workspace (the “Service”). By creating an account or using the Service, you agree to these Terms. If you do not agree, please do not use Ombre.',
  sections: [
    {
      heading: 'The Service',
      text: [
        'Ombre is an AI workspace that combines General AI, specialized AI Mentors, and Projects. We may add, change, or remove features as the product evolves.',
      ],
    },
    {
      heading: 'Your account',
      text: [
        // CONFIRM: the minimum age.
        'You must be at least 18 to use Ombre. Give accurate information when you sign up, keep your sign-in details safe, and tell us right away if you think someone else has used your account. You are responsible for activity on your account.',
      ],
    },
    {
      heading: 'Acceptable use',
      text: ['You agree not to:'],
      list: [
        'Break the law or help others do so.',
        'Harm, harass, or exploit others.',
        'Create or spread malware, or try to break into or disrupt the Service or its security.',
        'Copy, scrape, reverse engineer, or resell the Service, except as the law allows.',
        'Upload content you do not have the right to use, or that infringes someone else’s rights.',
        'Pretend to be another person, or use Ombre to deceive people.',
      ],
      more: [
        'We may remove content or suspend access if these rules are broken.',
      ],
    },
    {
      heading: 'Your content',
      text: [
        'You keep ownership of the conversations, files, and other content you add to Ombre (“Your Content”). You give us a limited permission to host, process, and display Your Content only as needed to run the Service for you, including sending it to the AI providers that generate responses.',
        'You are responsible for Your Content and for having the right to use it.',
      ],
    },
    {
      heading: 'AI responses and professional advice',
      text: [
        'AI can make mistakes. Responses may be inaccurate, incomplete, or out of date, so please check anything important before you rely on it.',
        'Mentors, including those in areas such as business, coding, and health, offer general information and support. They are not a substitute for advice from a qualified professional, such as a doctor, lawyer, or financial adviser. In a medical emergency, contact your local emergency services.',
        'You are responsible for how you use the responses you receive.',
      ],
    },
    {
      heading: 'Our property',
      text: [
        'Ombre, including its name, logo, software, and design, belongs to us or our licensors. We give you a personal, non-exclusive, non-transferable right to use the Service under these Terms. Nothing in these Terms transfers any of our rights to you.',
      ],
    },
    {
      heading: 'Third-party services',
      text: [
        'Ombre relies on third-party services, such as AI model, hosting, and sign-in providers. We are not responsible for problems caused by third-party services outside our control.',
      ],
    },
    {
      heading: 'Changes, suspension, and ending',
      text: [
        'We may change, pause, or end the Service, or suspend an account, for example if these Terms are broken, to protect the Service or its users, or if the law requires. You can stop using Ombre at any time, and you can ask us to delete your account by emailing ombrementors@gmail.com.',
      ],
    },
    {
      heading: 'Disclaimers',
      text: [
        'To the fullest extent the law allows, the Service is provided “as is” and “as available”, without promises that it will be uninterrupted, error-free, or suited to a particular purpose.',
      ],
    },
    {
      heading: 'Limit of liability',
      text: [
        'To the fullest extent the law allows, we are not liable for indirect, incidental, or consequential losses, or for lost profits, data, or opportunities arising from your use of the Service.',
        'Our total liability for any claim is limited to the amount you paid us for the Service in the twelve months before the claim. Nothing in these Terms limits liability that cannot be limited by law.',
      ],
    },
    {
      heading: 'Paid plans',
      text: [
        'If we introduce paid plans, additional terms covering prices and payments will apply.',
      ],
    },
    {
      heading: 'Governing law',
      text: [
        // CONFIRM: the governing law and the courts (a lawyer can name a
        // specific city for the courts).
        'These Terms are governed by the laws of India. Courts in India will have jurisdiction over any dispute, subject to any rights you have under the law where you live.',
      ],
    },
    {
      heading: 'Changes to these Terms',
      text: [
        'We may update these Terms. When we do, we will change the date at the top, and if the changes are important, we will tell you. Continuing to use Ombre after changes means you accept them.',
      ],
    },
    {
      heading: 'Contact',
      text: ['Questions about these Terms: ombrementors@gmail.com.'],
    },
  ],
}
