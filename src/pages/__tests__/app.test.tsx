import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '@Pages/App';

describe('<App>', () => {
  it('renders App page', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(getByText(/Hello from Home Page/i)).toBeDefined();
  });
});
