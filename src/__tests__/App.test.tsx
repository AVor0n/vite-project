import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from '../App';

describe('Компонент App', () => {
  test('Работает увеличение счетчика при клике', async () => {
    render(<App />);
    const btn = screen.getByRole('button', { name: 'count is 0' });
    await userEvent.click(btn);
    expect(btn).toHaveTextContent('count is 1');
  });
});
