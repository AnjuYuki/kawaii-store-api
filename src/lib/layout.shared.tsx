import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from './i18n';
import { uiTranslations } from 'fumadocs-ui/i18n';

export const i18nUI = i18n
  .translations()
  .extend(uiTranslations())
  .add('ui', {
    ja: {
      displayName: 'Japanese',
      search: '検索',
    },
    en: {
      displayName: 'English',
    },
  });

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Kawaii Store API',
    },
  };
}
