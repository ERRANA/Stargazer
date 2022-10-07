import { useCallback } from 'react';
import Item from '../../interfaces/item';
import { TopicItem } from './styles';

interface Props {
  item: Item
  setSearch: Function
}

const Topic = ({ item, setSearch }: Props) => {

  // Click handler for topic item
  const handleClickDiv = useCallback(() => {
    setSearch(item.name);
  }, [setSearch, item.name]);

  return (
    <TopicItem>
      <p onClick={handleClickDiv} data-testid="item-name">{item.name}</p>
      <span data-testid="item-count">{item.stargazerCount} {`⭐`}</span>
    </TopicItem>
  );
};

export default Topic;