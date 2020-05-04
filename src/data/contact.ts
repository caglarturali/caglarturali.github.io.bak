import { ContactItem, Page } from '../models';

export const contact: Page<ContactItem> = {
  name: 'contact',
  desc: 'Feel free to contact me',
  content: [
    {
      name: 'Telegram',
      url: 'https://t.me/caglarturali',
      icon: ['fab', 'telegram-plane'],
      isMain: true,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/caglarturali',
      icon: ['fab', 'github'],
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/caglarturali',
      icon: ['fab', 'linkedin'],
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/caglarturali/',
      icon: ['fab', 'instagram'],
    },
    {
      name: 'goodreads',
      url: 'https://www.goodreads.com/caglarturali',
      icon: ['fab', 'goodreads'],
    },
  ],
};
