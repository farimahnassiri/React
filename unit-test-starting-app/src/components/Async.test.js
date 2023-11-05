import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    render(<Async/>);

    const listItemElemnet = await screen.findAllByRole('listitem');
    expect(listItemElemnet).not.toHaveLength(0);
  });
});