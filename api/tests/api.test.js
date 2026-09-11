const { test, describe, before, after } = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../app');
const sequelize = require('../config/database');
const Card = require('../models/cards.model');
const { seedDatabase, initialCards } = require('../seeders/initialCards');

describe('API Cards Integration Tests - Saint Seiya', () => {
  before(async () => {
    // 1. Réinitialise les tables (supporte SQLite en local ou PostgreSQL en CI)
    await sequelize.sync({ force: true });

    // 2. Peuple la base avec les héros Saint Seiya issus de SQLite
    await seedDatabase(Card);
  });

  after(async () => {
    await sequelize.close();
  });

  test('Vérification DB : les données Saint-Seiya de SQLite sont bien présentes dans PostgreSQL', async () => {
    const response = await request(app).get('/cards');

    // NOTE POUR L'EXERCICE DE DÉBOGAGE :
    // Pour simuler un test en échec dans GitHub Actions, modifiez 200 par 404 ou 500
    assert.equal(response.status, 200);
    assert.ok(Array.isArray(response.body));

    // Vérifie qu'on retrouve bien les 8 héros Saint Seiya initiaux
    assert.equal(response.body.length, initialCards.length);

    // Vérifie la présence de Pégase Seiya et Lion Aiolia
    const seiya = response.body.find(c => c.name === 'Pégase Seiya');
    assert.ok(seiya, 'Pégase Seiya doit être présent dans la base');
    assert.equal(seiya.rarity, 'SR');
    assert.equal(seiya.level, 80);

    const aiolia = response.body.find(c => c.name === 'Lion Aiolia');
    assert.ok(aiolia, 'Lion Aiolia doit être présent dans la base');
    assert.equal(aiolia.rarity, 'SSR');
  });

  test('POST /cards - Ajoute un nouveau chevalier (Dragon Shiryu)', async () => {
    const newHero = {
      name: 'Dragon Shiryu',
      rarity: 'SR',
      level: 75,
      stars: 6,
      plus: 9,
      image: '/cards/shiryu.png'
    };

    const response = await request(app)
      .post('/cards')
      .send(newHero)
      .set('Accept', 'application/json');

    assert.equal(response.status, 200);
    assert.equal(response.body.success, true);
    assert.equal(response.body.data.name, 'Dragon Shiryu');
  });

  test('GET /cards - retourne maintenant 9 cartes dont le nouveau chevalier', async () => {
    const response = await request(app).get('/cards');

    assert.equal(response.status, 200);
    assert.equal(response.body.length, initialCards.length + 1);
    const shiryu = response.body.find(c => c.name === 'Dragon Shiryu');
    assert.ok(shiryu);
  });
});
