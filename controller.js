app.get('/breadth-first-search/:value', async function(req, res) {
    const value = parseInt(req.params.value);
    
    // Find the starting node
    const startingNode = await db.collection('binarytree').findOne({ value: value });
    
    if (!startingNode) {
      res.status(404).send('Node not found');
      return;
    }
    
    const queue = [startingNode];
    const result = [];
    
    // Perform breadth-first search
    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(currentNode.value);
      
      if (currentNode.leftChild) {
        queue.push(await db.collection('binarytree').findOne({ _id: currentNode.leftChild }));
      }
      
      if (currentNode.rightChild) {
        queue.push(await db.collection('binarytree').findOne({ _id: currentNode.rightChild }));
      }
    }
    
    res.send(result);
  });
  