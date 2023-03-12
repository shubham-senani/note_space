import React, { useState, } from "react";
import { useHistory } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Radio } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';

const Ctext = styled(TextField)`
margin: 10px;
`

const Btn = styled(Button)`
margin: 10px;
`

const FControl = styled(FormControl)`
margin: 10px;
`

export default function Create() {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [titleErr, setTitleErr] = useState(false)
    const [detailsErr, setDetailsErr] = useState(false)
    const [category, setCategory] = useState("todos");
    const handleSubmit = (e) => {
        e.preventDefault()
        setDetailsErr(false)
        setTitleErr(false)
        if (title === "") {
            setTitleErr(true)
        }
        if (details === "") {
            setDetailsErr(true)
        }
        if (title && details) {
            fetch('http://localhost:8000/Notes', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ title, details, category })
            })
                .then(() => history.push("/"))
        }
    }

    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                color="textSecondary"
                gutterBottom
            >
                Create Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                
                    <Ctext
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        label="Note Title"
                        color="primary"
                        variant="outlined"
                        fullWidth
                        required
                        error={titleErr}
                    />
                
                    <Ctext
                        onChange={(e) => {
                            setDetails(e.target.value);
                        }}
                        label="Details"
                        color="primary"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={5}
                        required
                        error={detailsErr}
                    />

                <FControl
                    fullWidth
                >
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => { setCategory(e.target.value) }}>
                        <FormControlLabel value="money" control={<Radio />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                        <FormControlLabel value="reminder" control={<Radio />} label="Reminder" />
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                    </RadioGroup>
                </FControl>

                <Btn
                    type="submit"
                    variant="contained"
                    color="secondary"
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Btn>
            </form>
        </Container>
    );
}
