import { createClient } from 'contentful';

const useContentful = () => {
  const client = createClient({
    space: 'yjnrxugnhvwu',
    accessToken: 'qIcENWNQUi9tOlz1kI5073aBeNDnvJPcT9wCOkvn7OQ',
  });

  const getConfig = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'configuration',
        select: 'fields',
      });

      const sanitisedEntries = { ...entries.items[0].fields };

      return sanitisedEntries;
    } catch (error) {
      console.log(`Error fetching config: ${error}`);
    }
  };

  const getChatRooms = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'chatRoom',
        select: 'fields',
      });

      const sanitisedEntries = entries.items.map((item) => {
        return { ...item.fields };
      });

      return sanitisedEntries;
    } catch (error) {
      console.log(`Error fetching chat rooms: ${error}`);
    }
  };

  const getLatestContent = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'latestContent',
        select: 'fields',
      });

      const sanitisedEntries = { ...entries.items[0].fields };

      return sanitisedEntries;
    } catch (error) {
      console.log(`Error fetching latest content: ${error}`);
    }
  };

  return { getConfig, getChatRooms, getLatestContent };
};

export default useContentful;
