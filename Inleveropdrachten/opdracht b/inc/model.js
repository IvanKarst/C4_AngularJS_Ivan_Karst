const app = angular.module('myApp', [])

app.factory('cars', function () {
	return {
		cars: [
			{
				kenteken: 'AB-123-CD',
				kleur: 'Rood',
				merk: 'Toyota',
				aantal_deuren: '3',
				prijs: 15000
			},
			{
				kenteken: 'XY-987-ZW',
				kleur: 'Blauw',
				merk: 'Honda',
				aantal_deuren: '5',
				prijs: 20000
			},
			{
				kenteken: 'GH-456-JK',
				kleur: 'Zwart',
				merk: 'Ford',
				aantal_deuren: '3',
				prijs: 18000
			},
			{
				kenteken: 'MN-789-OP',
				kleur: 'Groen',
				merk: 'Chevrolet',
				aantal_deuren: '5',
				prijs: 22000
			},
			{
				kenteken: 'IJ-654-UV',
				kleur: 'Zilver',
				merk: 'Nissan',
				aantal_deuren: '3',
				prijs: 19000
			}
		]
	};
});