app.put('/planets/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      await db.none('UPDATE planets SET name=$2 WHERE id=$1', [id, name]);
      res.json({ message: 'Pianeta aggiornato con successo' });
    } catch (error) {
      res.status(500).json({ error: 'Errore nell\'aggiornamento del pianeta' });
    }
  });

  app.post('/planets/:id/image', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const filePath = req.file ? req.file.path : null;
  
    if (!filePath) {
      return res.status(400).json({ error: 'Nessun file caricato' });
    }
  
    try {
      await db.none('UPDATE planets SET image=$2 WHERE id=$1', [id, filePath]);
      res.json({ message: 'Immagine caricata con successo', filePath });
    } catch (error) {
      res.status(500).json({ error: 'Errore nel salvataggio dell\'immagine' });
    }
  });
  