export default function friendsPlugin(context, options) {
    return {
      name: 'docusaurus-friends-plugin',
      async contentLoaded({content, actions}) {
        const {createData, addRoute} = actions;
        // Create friends.json
        const friends = ['Yangshun', 'Sebastien'];
        const friendsJsonPath = await createData(
          'friends.json',
          JSON.stringify(friends),
        );
  
        // Add the '/friends' routes, and ensure it receives the friends props
        addRoute({
          path: '/friends',
          component: '@site/src/components/Friends.js',
          modules: {
            // propName -> JSON file path
            friends: friendsJsonPath,
          },
          exact: true,
        });
      },
    };
  }