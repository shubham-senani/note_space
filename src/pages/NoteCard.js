import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent'
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles';
import { blue, purple, yellow, green, red } from '@mui/material/colors';

const useStyles = makeStyles({
    avatar:{
        backgroundColor: (note)=>{
            if(note.categroy === "work"){
                return yellow[700]
            }
            if(note.categroy === 'money'){
                return green[700]
            }
            if(note.categroy === 'todos'){
                return purple[700]
            }
            if(note.categroy === 'reminder'){
                return red[700]
            }
            return blue[500]
        }
    }
})
export default function NoteCard({note, handleDelete}) {
    const classes = useStyles(note)
  return (
    <div>
      <Card>
      <CardHeader
        avatar ={
            <Avatar className={classes.avatar}>
                {note.category[0].toUpperCase()}
                </Avatar>
        }
        action={
          <IconButton
           onClick={()=>{handleDelete(note.id)}}
          >
            <Delete/>
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.details}
        </Typography>
      </CardContent>
      </Card>
    </div>
  )
}
