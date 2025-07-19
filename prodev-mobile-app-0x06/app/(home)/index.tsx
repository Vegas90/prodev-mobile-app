// Component that renders a list of property cards
import PropertyListing from "../../components/PropertyListing";
import "./globals.css";

// Import custom styles from your styling file
import { styles } from "../../styles/_homeStyle";

// Icon from Expo's icon library
import { Feather } from "@expo/vector-icons";

// Core React Native components
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from "react-native";

// Sample filters and data constants
import { FILTERS, SAMPLE_DATA } from "../../constants/data";

// Main functional component for the Home screen
const Home = () => {
  return (
    <View style={styles.container}>
      
      {/* ======= SEARCH SECTION ======= */}
      <View style={styles.searchGroup}>
        <View style={styles.searchFormGroup}>
          <View style={styles.searchControlGroup}>
            <Text style={styles.searchFormText}>Where to?</Text>

            {/* Search input field for location/date/guests */}
            <TextInput
              style={{ ...styles.searchControl, ...styles.searchFormText }}
              placeholder="Location . Date . Add guest"
            />
          </View>

          {/* Search button with magnifying glass icon */}
          <View style={styles.searchButton}>
            <Feather name="search" size={24} color="white" />
          </View>
        </View>
      </View>

      {/* ======= FILTER SCROLL SECTION ======= */}
      <View
        style={{
          height: 72,
          backgroundColor: "white",
        }}
      >
        {/* Horizontal scroll view for filter categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterGroup}>
            {/* Render each filter item */}
            {FILTERS.map((filter, index) => (
              <View style={styles.filterContainer} key={index}>
                {/* Image/icon representing the filter category */}
                <Image
                  style={{
                    flex: 1,
                  }}
                  source={require("@/assets/images/mansion.png")} // Placeholder icon/image
                  resizeMode="contain"
                />

                {/* Label for the filter */}
                <Text>{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* ======= PROPERTY LISTING SECTION ======= */}
      <ScrollView style={styles.listingContainer}>
        {/* Renders property cards from sample data */}
        <PropertyListing listings={SAMPLE_DATA} />

        {/* "Show More" button for pagination */}
        <View style={styles.paginationContainer}>
          <TouchableHighlight style={styles.showMoreButton}>
            <Text style={styles.showMoreButtonText}>Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

// Export the Home screen as the default export
export default Home;
