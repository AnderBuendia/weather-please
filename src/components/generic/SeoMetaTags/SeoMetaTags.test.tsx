import { render } from '@Lib/utils/test.utils';
import SeoMetaTags from '@Components/generic/SeoMetaTags';

describe('<SeoMetaTags>', () => {
  const props = {
    title: 'Home',
    description: 'What is the weather like?',
  };

  it('renders component', () => {
    const { container } = render(<SeoMetaTags {...props} />);
    expect(container).toBeTruthy();
  });

  it('renders robots with noindex component', () => {
    const customProps = {
      ...props,
      noindex: true,
    };

    render(<SeoMetaTags {...customProps} />);
    const expected = '<meta name="robots" content="noindex" />';
    expect(expected).toBeTruthy();
  });

  it('renders canonical url with a custom url', () => {
    const customProps = {
      ...props,
      url: 'https://www.weatherplease.com',
    };

    render(<SeoMetaTags {...customProps} />);
    const expected = '<link rel="canonical" href="https://www.weatherplease.com" />';
    expect(expected).toBeTruthy();
  });
});
