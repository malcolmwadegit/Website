const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Route for home page form submissions
router.post('/website', (req, res) => {
    saveFormData(req.body, 'home-page-data.json', res);
});

// Route for contact page form submissions
router.post('/website/contact-page', (req, res) => {
    saveFormData(req.body, 'contact-page-data.json', res);
});

// Function to save form data to a JSON file
function saveFormData(formData, filename, res) {
    const filePath = path.join(__dirname, `./data/${filename}`);

    try {
        // Read existing data from JSON file
        let existingData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        // If existing data is not an array, initialize it as an empty array
        if (!Array.isArray(existingData)) {
            existingData = [];
        }

        // Append new form data to existing data
        existingData.push(formData);

        // Convert data to JSON format
        const jsonData = JSON.stringify(existingData, null, 2);

        // Write updated data back to file
        fs.writeFileSync(filePath, jsonData);

        console.log('Data appended to JSON file successfully');
        res.json({ message: 'Form data received and saved successfully' });
    } catch (err) {
        console.error('Error writing to JSON file:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = router;
