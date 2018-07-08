import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

export default class Card extends Component {
	render() {
		const { data, fetching } = this.props;
		const { name, image, types, description } = data;

		return (
			<View style={styles.card}>
				{fetching ? (
					<ActivityIndicator size="large" color="#0000ff" />
				) : (
					<View style={styles.cardContent}>
						<View style={styles.imageContainer}>
							<Image
								style={styles.cardImage}
								source={{ uri: image }}
								resizeMode={'cover'}
							/>
						</View>
						<View style={styles.titleContainer}>
							<Text style={styles.title}>{name}</Text>
						</View>
						<View style={styles.typesContainer}>
							{this.renderTypes(types)}
						</View>
						<View style={styles.descriptionContainer}>
							<Text style={styles.description}>
								{description}
							</Text>
						</View>
					</View>
				)}
			</View>
		);
	}

	renderTypes = (types) => {
		return types.map(({ type }) => {
			// before it was: type and not ({ type })
			return (
				<View style={[styles[type.name], styles.type]} key={type.name}>
					<Text style={styles.typeText}>{type.name}</Text>
				</View>
			);
		});
	};
}

const styles = {
	card: {
		flex: 1,
		alignItems: 'center',
		marginTop: 50,
	},
	cardContent: {
		alignItems: 'center',
	},
	cardImage: {
		width: 120,
		height: 120,
	},
	titleContainer: {
		padding: 10,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	typesContainer: {
		flexDirection: 'row',
	},
	type: {
		padding: 5,
		width: 100,
		alignItems: 'center',
	},
	typeText: {
		color: '#fff',
	},
	normal: {
		backgroundColor: '#8a8a59',
	},
	fire: {
		backgroundColor: '#f08030',
	},
	water: {
		backgroundColor: '#6890f0',
	},
	electric: {
		backgroundColor: '#f8d030',
	},
	grass: {
		backgroundColor: '#78c850',
	},
	ice: {
		backgroundColor: '#98d8d8',
	},
	fighting: {
		backgroundColor: '#c03028',
	},
	poison: {
		backgroundColor: '#a040a0',
	},
	ground: {
		backgroundColor: '#e0c068',
	},
	flying: {
		backgroundColor: '#a890f0',
	},
	psychic: {
		backgroundColor: '#f85888',
	},
	bug: {
		backgroundColor: '#a8b820',
	},
	rock: {
		backgroundColor: '#b8a038',
	},
	ghost: {
		backgroundColor: '#705898',
	},
	dragon: {
		backgroundColor: '#7038f8',
	},
	dark: {
		backgroundColor: '#705848',
	},
	steel: {
		backgroundColor: '#b8b8d0',
	},
	fairy: {
		backgroundColor: '#e898e8',
	},
	descriptionContainer: {
		padding: 20,
	},
	description: {
		color: '#3e3e3e',
	},
};
