import { useState, useEffect } from 'react';
import { TopicQuery } from '../graphql/TopicQuery';
import { BaseClient } from '../Wrapper/ClientWrapper';

export const useTopics = (name, first = 10) => {
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    if (!name.length) {
      setTopic([]);
      return { topic };
    }

    BaseClient()
      .query(TopicQuery(name, first))
      .then((data) => {
        if (data.data.topic) {
          setTopic(data.data.topic.relatedTopics);
        } else {
          setTopic([]);
        }
      });
    // eslint-disable-next-line
  }, [name]);
  return { topic };
};