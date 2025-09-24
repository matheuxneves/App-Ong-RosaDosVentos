import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const openLink = (url: string) => {
  Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
};

export default function ContactScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Entre em Contato</Text>
        <View style={styles.infoRow}>
          <FontAwesome name="map-marker" size={24} color="#007AFF" />
          <Text style={styles.infoText}>Local da ONG</Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome name="phone" size={24} color="#007AFF" />
          <Text style={styles.infoText}>Telefone da ONG</Text>
        </View>
        <View style={styles.infoRow}>
          <FontAwesome name="envelope" size={24} color="#007AFF" />
          <Text style={styles.infoText}>Email da ONG</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Siga-nos nas Redes Sociais</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => openLink('https://instagram.com')}>
            <FontAwesome name="instagram" size={40} color="#E1306C" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.donateButton} onPress={() => openLink('https://www.youtube.com/watch?v=MYwtZt3mBwA')}>
        <Text style={styles.donateButtonText}>Faça uma Doação</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  donateButton: {
    backgroundColor: '#28a745',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  donateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

