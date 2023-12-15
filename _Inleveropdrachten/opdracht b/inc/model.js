const app = angular.module('myApp', [])

app.factory('cars', function () {
	return {
		cars: [
			{
				kenteken: 'AB-12-CD',
				kleur: 'Rood',
				merk: 'Toyota',
				aantal_deuren: '3',
				prijs: 15000
			},
			{
				kenteken: 'X-789-YZ',
				kleur: 'Blauw',
				merk: 'Honda',
				aantal_deuren: '5',
				prijs: 20000
			},
			{
				kenteken: 'PQ-456-R',
				kleur: 'Zwart',
				merk: 'Ford',
				aantal_deuren: '3',
				prijs: 18000
			},
			{
				kenteken: 'JK-789-L',
				kleur: 'Groen',
				merk: 'Chevrolet',
				aantal_deuren: '5',
				prijs: 22000
			},
			{
				kenteken: 'Y-123-AB',
				kleur: 'Zilver',
				merk: 'Nissan',
				aantal_deuren: '3',
				prijs: 19000
			}
		]
	};
});