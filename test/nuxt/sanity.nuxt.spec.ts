import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { defineComponent } from 'vue';

describe('Sanity Nuxt', () => {
  it('can mount a simple component', async () => {
    const Component = defineComponent({
      template: '<div>Hello</div>',
    });
    const component = await mountSuspended(Component);
    expect(component.text()).toBe('Hello');
  });
});
