async function setupDb() {
    const createTableQuery = `
      DROP TABLE IF EXISTS planets;
      CREATE TABLE planets(
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        image TEXT
      );
    `;
    
    try {
      await db.none(createTableQuery);
      console.log('Tabella "planets" creata con successo!');
      await db.none('INSERT INTO planets (name) VALUES ($1)', ['Earth']);
      await db.none('INSERT INTO planets (name) VALUES ($1)', ['Mars']);
      await db.none('INSERT INTO planets (name) VALUES ($1)', ['Saturn']);
      console.log('Dati inseriti con successo!');
    } catch (error) {
      console.error('Errore nella creazione della tabella o nell\'inserimento dei dati:', error);
    }
  }  