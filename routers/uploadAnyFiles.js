const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const fs = require('fs');
const path = require("path");
const uploadAnyFiles = express.Router()

uploadAnyFiles.post('/file', upload.single('file'), function(req, res) {
    fs.readFile(req.file.path, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        // Обработка данных
        console.log(data);
        // Дополнительная обработка...

        // // Запись данных в файл
        // fs.writeFile('путь_к_файлу', 'новые_данные', 'utf8', (err) => {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //
        //     console.log('Данные успешно записаны в файл');
        // });
    });

    fs.unlink(req.file.path, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Файл успешно удален')
    });

    res.send({'response': 'ok'});
});

uploadAnyFiles.post('/test/post', function(req, res) {
    console.log(req.body);

    res.send({'response': req.body})
})

module.exports = uploadAnyFiles;