import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


const projectsData = [
  {
    id: '1',
    title: 'Projeto 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '2',
    title: 'Projeto 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '3',
    title: 'Projeto 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: '4',
    title: 'Projeto 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

type ProjectItemProps = {
  title: string;
  description: string;
};

const ProjectItem = ({ title, description }: ProjectItemProps) => (
  <View style={styles.projectCard}>
    <Text style={styles.projectTitle}>{title}</Text>
    <Text style={styles.projectDescription}>{description}</Text>
  </View>
);

export default function ProjectsScreen() {
  return (
    <FlatList
      style={styles.container}
      data={projectsData}
      renderItem={({ item }) => <ProjectItem title={item.title} description={item.description} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <Text style={styles.header}>Nossos Principais Projetos</Text>
      }
      contentContainerStyle={{ padding: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  projectDescription: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
    color: '#555',
  },
});

