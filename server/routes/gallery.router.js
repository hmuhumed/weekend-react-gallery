const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');


// DO NOT MODIFY THIS FILE FOR BASE MODE
// PUT Route
router.put('/like/:id', (req , res) => {
    console.log(req.params);
    const idToUpdate = req.params.id
    console.log(idToUpdate);
    const queryText = ` UPDATE "gallery" SET "likes" = "likes" + 1  WHERE "id"=$1;`
    pool.query(queryText, [idToUpdate])
    .then((result) => {
        console.log('Got the Update', result.rows);
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log('There is error', err);
        res.sendStatus(500);
    })
}); // END PUT Route


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

router.post('/fresh' , (req, res) => {
    const insertImage = req.body;
    const queryText = `INSERT INTO "gallery" ("path" , "description")
                        VALUES ($1, $2);
                        `;
    pool.query(queryText, [insertImage.path , insertImage.description])
    .then((response) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in POST server side' , error);
        res.sendStatus(500);
    });
});




module.exports = router;