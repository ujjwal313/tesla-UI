import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCog,
  faFan,
  faKey,
  faLock,
  faToolbox,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu";

const CarItem = () => {
  const [isLocked, setIsLocked] = useState(false);

  const handleLock = () => {
    setIsLocked(!isLocked);
  };
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.6}>
          <FontAwesomeIcon icon={faCog} size={24} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>BatMobile</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <FontAwesomeIcon icon={faToolbox} size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.batterySection}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 KM</Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
      <ScrollView>
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlButton}>
              <FontAwesomeIcon icon={faFan} size={24} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlButton}>
              <FontAwesomeIcon icon={faKey} size={24} style={styles.icon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLock}>
            <View style={styles.controlButton}>
              <FontAwesomeIcon
                icon={isLocked ? faLock : faUnlockAlt}
                size={24}
                style={styles.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Menu />
      </ScrollView>
    </View>
  );
};

export default CarItem;
