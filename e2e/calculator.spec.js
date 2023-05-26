import {test, expect } from '@playwright/test';

// test de l'addition
test('addition', async ({page}) => {
	//lancement de la page
	await page.goto('http://localhost:3000');
	//accès au premier input et ajout d'un nombre
	await page.getByLabel('Nombre 1').click();
	await page.getByLabel('Nombre 1').fill('12');
	//accès au deuxième input et ajout d'un nombre
	await page.getByLabel('Nombre 2').click();
	await page.getByLabel('Nombre 2').fill('45');
	//click sur le buton addition
	await page.getByRole('button', { name: '+'}).click();
	//vérif 45 + 12 = 57
	await expect(page.getByText('57')).toHaveText('57');
});

// plusieurs tests de l'appli
test.describe('Complet', () => {

	// Préparation 
	// https://playwright.dev/docs/writing-tests 
	// (lancement + remplissage champs 1 et 2)
	test.beforeEach();

	//addition 45 + 12 = 57

	// soustraction 45 - 12 = 33

	//multiplication 45 * 12 = 540

	// division 45 / 12 = 3.75 
});
