import { describe, it, expect } from 'vitest';

describe('Saint Seiya Cards - Tests Unitaires Frontend', () => {
  const saintSeiyaHeroes = [
    { id: 3, name: 'Pégase Seiya', rarity: 'SR', level: 80, stars: 6, plus: 11, image: '/cards/pegase.png' },
    { id: 4, name: 'Lion Aiolia', rarity: 'SSR', level: 80, stars: 6, plus: 11, image: '/cards/aiolia.png' },
    { id: 5, name: 'Camus', rarity: 'SSR', level: 70, stars: 6, plus: 10, image: '/cards/camus.png' },
    { id: 6, name: 'Phénix Ikki', rarity: 'SR', level: 60, stars: 6, plus: 7, image: '/cards/ikki.png' },
    { id: 7, name: 'Mermaid Thetis', rarity: 'SSR', level: 80, stars: 7, plus: 15, image: '/cards/mermaid.png' },
    { id: 9, name: 'Saori Kido', rarity: 'SR', level: 50, stars: 5, plus: 10, image: '/cards/saori.png' },
    { id: 10, name: 'Siren Sorrento', rarity: 'SR', level: 65, stars: 6, plus: 7, image: '/cards/siren.png' },
    { id: 11, name: 'Lizard Misty', rarity: 'SSR', level: 70, stars: 6, plus: 12, image: '/cards/lizard.png' },
  ];

  it('filtre les héros par nom de chevalier (ex: Seiya)', () => {
    const query = 'Seiya';
    const filtered = saintSeiyaHeroes.filter(hero =>
      hero.name.toLowerCase().includes(query.toLowerCase())
    );
    expect(filtered).toHaveLength(1);
    expect(filtered[0].name).toBe('Pégase Seiya');
    expect(filtered[0].rarity).toBe('SR');
  });

  it('filtre les héros par rareté (ex: SSR pour les Chevaliers d\'Or et puissants)', () => {
    const rarity = 'SSR';
    const ssrHeroes = saintSeiyaHeroes.filter(hero => hero.rarity === rarity);
    expect(ssrHeroes).toHaveLength(4);
    const names = ssrHeroes.map(h => h.name);
    expect(names).toContain('Lion Aiolia');
    expect(names).toContain('Camus');
  });

  it('gère le cumul filtre texte et rareté (ex: Camus + SSR)', () => {
    const query = 'camus';
    const rarity = 'SSR';
    const filtered = saintSeiyaHeroes.filter(hero => {
      const matchName = hero.name.toLowerCase().includes(query.toLowerCase());
      const matchRarity = rarity === '' || hero.rarity === rarity;
      return matchName && matchRarity;
    });
    expect(filtered).toHaveLength(1);
    expect(filtered[0].name).toBe('Camus');
  });

  it('renvoie l\'ensemble des 8 héros si aucun filtre n\'est actif', () => {
    const query = '';
    const rarity = '';
    const filtered = saintSeiyaHeroes.filter(hero => {
      const matchName = hero.name.toLowerCase().includes(query.toLowerCase());
      const matchRarity = rarity === '' || hero.rarity === rarity;
      return matchName && matchRarity;
    });
    expect(filtered).toHaveLength(8);
  });
});
