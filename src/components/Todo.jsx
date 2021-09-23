import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField'

function getLocalDate(){
    const lists = localStorage.getItem("TodoList");
      if(lists){
          return JSON.parse(lists);
      }else{ 
          return [];
}
};

function Todo() {
    const [Input, setInput] = useState('');
    const [Edit, setEdit] = useState('');
    const [Icon, setIcon] = useState(false);

    const [Items, setItems] = useState(getLocalDate());

    let add = () => {
        if (!Input) {
            alert("Please fill The data");
        }else if(Input && Icon){
            setItems(
                Items.map((element)=>
                {if(element.id === Edit){
                  return {...element, name: Input };
                }
                return element;
                })
            );
            setInput([]);
        setEdit(null);
        setIcon(false); 
        }
         else {
            const newInputData = {
                id: new Date().getTime().toString(),
                name: Input,
            };
            setItems([...Items, newInputData]);
            setInput('');
        }
        console.log(Items);
    }

    let del = (index) => {
        const deleted = Items.filter((element) => {
            return element.id !== index
        });
        setItems(deleted);
    };

    let edit =(index)=>{
        const update = Items.find((element)=>{
            return element.id === index
        });
        setInput(update.name);
        setEdit(index);
        setIcon(true);   
    }
useEffect(()=>{
localStorage.setItem("TodoList",JSON.stringify(Items))
},[Items]);

    return (
        
            <Box
              sx={{
                width: "100%",
                marginTop:"-10px",
                height: "92.7vh",
                textAlign:"center",
                bgcolor: 'primary.dark',
                '&:active': {
                  backgroundColor: 'primary.main',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            >
                <Box 
                sx={{
                    width: "50%",
                    
                    textAlign:"center",
                    margin:"10px auto",
                   
                  }} >
                    <TextField type="text"
                        style={{marginTop:"2%" ,backgroundColor:"red",
                        width: "50%",
                    }}
                        variant="standard"
                        // color="warning"
                        focused
                        placeholder="✍  Add item"
                        id="inp"
                        value={Input}
                        onChange={(event) => {
                            setInput(event.target.value)
                            console.log(Input);
                        }}
                        />
                        
                    
                    {
                        Icon ?(
                            // <button >edit</button>
                            <EditIcon fontSize="large" color="secondary" onClick={add}/>
                          ):(
                            // <button onClick={add}>add</button>
                            <AddCircleIcon fontSize="large" color="action"  style={{marginTop:"2%"}} onClick={add}/>


                          )
                    }

                    {
                        Items.map((element) => {
                            return <div key={element.id}>
                        <Box  component="h3"  sx={{ display: 'inline' }}>{element.name}
                        <DeleteIcon color="success" fontSize="large" onClick={() => del(element.id)} />
                        <EditIcon  color="secondary" fontSize="large"onClick={()=>edit(element.id)} />
                        
                        </Box>
                               
                            </div>

                        })
                    }
                    <br />
                     <Button style={{marginTop:"6%"}} variant="contained" color="success" onClick={()=>{setItems([]);}}>deleteAll</Button>
                </Box>
            </Box>
        
    );
}

export default Todo;