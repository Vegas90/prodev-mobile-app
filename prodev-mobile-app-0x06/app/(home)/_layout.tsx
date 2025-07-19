// Importing icons from various icon libraries
import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";

// Import the Tabs component from Expo Router
// This provides a tab-based navigation system like in mobile apps
import { Tabs } from "expo-router";

// This component acts as the root layout for the tab navigation system
// It wraps the screens inside <Tabs> and applies shared settings
const HomeRootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        // This sets the color for the active tab icon (when selected)
        tabBarActiveTintColor: '#34967C',

        // Hides the header bar globally unless overridden on a specific screen
        headerShown: false,
      }}
    >

      {/* Tab Screen: Home (index.tsx) */}
      <Tabs.Screen
        name="index" // Corresponds to app/index.tsx
        options={{
          title: 'Home', // Label shown under the icon in the tab bar
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />

      {/* Tab Screen: Search (search.tsx) */}
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: true, // Overrides global setting to show header on this screen
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />

      {/* Tab Screen: Saved (saved.tsx) */}
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <EvilIcons name="heart" size={27} color={color} />
          ),
        }}
      />

      {/* Tab Screen: Inbox (inbox.tsx) */}
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubbles-outline" size={24} color={color} />
          ),
        }}
      />

      {/* Tab Screen: Profile (profile.tsx) */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" size={24} color={color} />
          ),
        }}
      />

    </Tabs>
  );
};

// Export this layout to be used as the default layout for this route group
export default HomeRootLayout;
