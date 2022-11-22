import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ItemListAPI } from '../../../services/ProductsAPI'
import { useState } from 'react'
import { useEffect } from 'react'


const TableArticle = () => {

    const [articulos, setArticulos] = useState([]);
        
    const handleItemList = async () => {
        try {
          await ItemListAPI.itemList()
            .then(res => {
              setArticulos(res);
            })
        } catch (e) {
          console.log(e)
          console.log("Algo está fallando y no se que será")
        }
      }
    
      useEffect(() => {
        handleItemList()
    
      }, []);


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align='left'>Referencia</TableCell>
                        <TableCell align='left'>Nombre</TableCell>
                        <TableCell align='left'>Descripción</TableCell>
                        <TableCell align='left'>URL</TableCell>
                        <TableCell align='left'>Stock</TableCell>
                        <TableCell align='left'>Precio</TableCell>
                        <TableCell align='left'>Categoria</TableCell>
                        <TableCell align='left'>Tipo Mascota</TableCell>
                        <TableCell align='left'>Estado</TableCell>
                        <TableCell align='left'>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {articulos.map(row => (
                        <TableRow
                            key={articulos._id}
                            sx={{
                                '&:last-of-type td, &:last-of-type th': {
                                    border: 0
                                }
                            }}
                        >
                            <TableCell component='th' scope='row'>
                                {row._id}
                            </TableCell>
                            <TableCell align='left'>{row.referencia}</TableCell>
                            <TableCell align='left'>{row.title}</TableCell>
                            <TableCell align='left'>{row.description}</TableCell>
                            <TableCell align='left'>{row.url}</TableCell>
                            <TableCell align='left'>{row.stock}</TableCell>
                            <TableCell align='left'>{row.price}</TableCell>
                            <TableCell align='left'>{row.categoria}</TableCell>
                            <TableCell align='left'>{row.typePet}</TableCell>
                            <TableCell align='left'>{row.status}</TableCell>
                            <TableCell align='right'>
                                <IconButton aria-label="edit" color="secondary"
                                >
                                <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete" color="secondary">
                                <DeleteIcon />
                               </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableArticle
