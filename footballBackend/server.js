const express = require('express');
const connectDB = require('./dbConnection');
const FootballData = require('./footballSchema');

const app = express();
const PORT = 3000;

app.use(express.json());
connectDB();

app.get('/', (req, res) => {
    res.send('Server is running');
});

// Get all teams
app.get('/api/teams', async (req, res) => {
    try {
        const teams = await FootballData.find();
        res.json(teams);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// Get a specific team by name
app.get('/api/teams/:teamName', async (req, res) => {
    try {
        const teamName = req.params.teamName.trim();
        console.log('Team name from request:', teamName);

        const teams = await FootballData.find({ team: new RegExp('^' + teamName + '$', 'i') }); // Match regardless of year
        console.log('Query result:', teams);

        if (teams.length === 0) {
            return res.status(404).json({ message: `Team '${teamName}' not found` });
        }
        res.json(teams);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});




// Add a new team
app.post('/api/teams', async (req, res) => {
    try {
        const { team } = req.body;
        const existingTeam = await FootballData.findOne({ team: new RegExp('^' + team + '$', 'i') });
        if (existingTeam) {
            return res.status(400).json({ message: `Team '${team}' already exists.` });
        }
        const newTeam = new FootballData(req.body);
        const savedTeam = await newTeam.save();
        res.status(201).json(savedTeam);
    } catch (err) {
        res.status(400).json({ message: 'Error adding team', error: err.message });
    }
});

// Update a team
app.put('/api/teams/:teamName', async (req, res) => {
    try {
        const teamName = req.params.teamName.trim();
        const updatedTeam = await FootballData.findOneAndUpdate(
            { team: new RegExp('^' + teamName + '$', 'i') },
            req.body,
            { new: true }
        );
        if (!updatedTeam) {
            return res.status(404).json({ message: `Team '${teamName}' not found` });
        }
        res.json(updatedTeam);
    } catch (err) {
        res.status(400).json({ message: 'Error updating team', error: err.message });
    }
});

// Delete a team
app.delete('/api/teams/:teamName', async (req, res) => {
    try {
        const teamName = req.params.teamName.trim();
        const deletedTeam = await FootballData.findOneAndDelete({ team: new RegExp('^' + teamName + '$', 'i') });
        if (!deletedTeam) {
            return res.status(404).json({ message: `Team '${teamName}' not found` });
        }
        res.json({ message: `Team '${teamName}' deleted successfully` });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting team', error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
