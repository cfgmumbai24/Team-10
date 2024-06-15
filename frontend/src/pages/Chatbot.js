import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, FormControl, InputLabel, Link } from '@mui/material';

const queries = {
    register: {
        label: "संस्थेसोबत नोंदणी करा",
        link: "/user_registration",
    },
    scholarships: {
        label: "शिष्यवृत्त्यांबद्दल माहिती",
        link: "/scholarships",
    },
    jobs: {
        label: "नोकरी/इंटर्नशिपबद्दल माहिती",
        link: "/jobs",
    },
    loans: {
        label: "कर्जाबद्दल माहिती",
        link: "/loans",
    }
};

const Chatbot = () => {
    const [selectedQuery, setSelectedQuery] = useState('');

    const handleChange = (event) => {
        setSelectedQuery(event.target.value);
    };

    return (
        <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 1, maxWidth: 400, margin: 'auto' }}>
            <Typography variant="h5" gutterBottom>चॅटबॉट</Typography>
            <FormControl fullWidth>
                <InputLabel>तुमचा प्रश्न निवडा</InputLabel>
                <Select
                    value={selectedQuery}
                    onChange={handleChange}
                    label="तुमचा प्रश्न निवडा"
                >
                    {Object.entries(queries).map(([key, { label }]) => (
                        <MenuItem key={key} value={key}>{label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            {selectedQuery && (
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="body1">
                        कृपया येथे जा:
                        <Link href={queries[selectedQuery].link} target="_blank" rel="noopener" sx={{ marginLeft: 1 }}>
                            {queries[selectedQuery].label}
                        </Link>
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default Chatbot;
