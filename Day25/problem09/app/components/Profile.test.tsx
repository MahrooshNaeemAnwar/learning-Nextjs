import { render } from '@testing-library/react';
import Profile from './Profile';

describe('Profile', () => {
  it('matches snapshot', () => {
    const { container } = render(<Profile name="Mahroosh" email="test@test.com" />);
    expect(container).toMatchSnapshot();
  });
});
