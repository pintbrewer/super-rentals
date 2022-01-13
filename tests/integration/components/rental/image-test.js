import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders the given image', async function (assert) {
    await render(hbs`
    <Rental::Image
    src="/assets/images/teaching-tomster.png"
    alt="Teaching Tomster"
  />
`);
    assert
      .dom('.image img')
      .exists()
      .hasAttribute('src', '/assets/images/teaching-tomster.png')
      .hasAttribute('alt', 'Teaching Tomster');
  });
  test('clicking on the component toggles size', async function (assert) {
    // Make sure exeists
    //make sure is not large
    // has text View Larger
    // on click is large
    // has text View Smaller
    // on click is not large
    // has text View Larger
    setupRenderingTest(hooks);
    await render(hbs`
      <Rental::Image
      src="/assets/images/teaching-tomster.png"
      alt="Teaching Tomster"
      />
    `);
    assert.dom('button.image').exists();
    assert.dom('.image').doesNotHaveClass('large')
    assert.dom('.image').hasText('View Larger');
    await click('button.image');
    assert.dom('.image').hasClass('large');
    assert.dom('.image').hasText('View Smaller')
    await click('button.image');
    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image').hasText('View Larger');
  });
});
