import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it, vi } from 'vitest';
import NuxtPwaUpdatePrompt from '~/components/NuxtPwaUpdatePrompt.vue';

describe('NuxtPwaUpdatePrompt', () => {
  const mountComponent = async (needRefresh = false) => {
    const updateServiceWorker = vi.fn().mockResolvedValue(undefined);
    const nuxtApp = useNuxtApp();
    nuxtApp.$pwa = {
      needRefresh,
      updateServiceWorker,
    } as any;
    return mountSuspended(NuxtPwaUpdatePrompt);
  };

  it('renders prompt when PWA needs refresh', async () => {
    const component = await mountComponent(true);
    expect(component.html()).toContain('New content available');
  });

  it('calls updateServiceWorker when reload clicked', async () => {
    const component = await mountComponent(true);
    await component.get('button').trigger('click');
    expect(useNuxtApp().$pwa?.updateServiceWorker).toHaveBeenCalledWith(true);
  });
});
