import { render, screen } from '@testing-library/react';
import Item from "../interfaces/item";
import Topic from '../components/Topic';

const topic: Item = {
  id: '1234',
  name: "test name",
  stargazerCount: 1
};

describe("ListTopics", () => {
  test('renders without crashing', () => {
    const wrapper = render(<Topic item={topic} setSearch={jest.fn()} />);
    expect(wrapper).not.toBe(null);
  });
  test('renders topic name and stargazer count', () => {
    const wrapper = render(<Topic item={topic} setSearch={jest.fn()} />);
    const name = wrapper.getByTestId('item-name');
    const stargazerCount = wrapper.getByTestId('item-count');
    expect(name.textContent).toBe(topic.name);
    expect(stargazerCount.textContent).toContain(topic.stargazerCount);
  });
})
