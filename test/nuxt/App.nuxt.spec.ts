import { describe, expect, it } from 'vitest';
import { renderSuspended } from '@nuxt/test-utils/runtime';
import { screen } from '@testing-library/vue';
import App from '~/app.vue';

describe('App root', () => {
  it('renders the default page and layout', async () => {
    await renderSuspended(App, {
      route: '/',
    });

    expect(screen.getByText('Hello World!')).toBeDefined();
    const layoutElement = document.querySelector('.relative.w-full');
    expect(layoutElement).not.toBeNull();
  });
});
