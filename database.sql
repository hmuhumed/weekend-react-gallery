CREATE TABLE "gallery" (
"id "SERIAL PRIMARY KEY,
"path" VARCHAR(500000),
"description" VARCHAR(500) NOT NULL,
"likes" INT DEFAULT 0 
);

INSERT INTO "gallery"('path', 'description', 'likes')
VALUES ('images/React-cat-pic.jpeg' , 'Photo of a beautiful Cat posing for the camera.', 0),
('images/React-Horse-Pic.jpeg', 'Photo of a Horse jumping with a snow background', 0),
('images/React-Lion-Pic.jpeg', 'Photo of a Lion in 4D!', 0),
('images/React-Bear-Pic.jpeg', 'Photo of a Bear roaring in 4D!!', 0);
