const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE
// GET Route
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "gallery"`;

    pool.query(queryText).then(result => {
        // Sends back the results in an object
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error' , error)
        res.sendStatus(500);
    })
}); // END GET Route

// PUT Route


router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route



module.exports = router;