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

const createData = (_id, referencia, title, description, url, stock, price, categoria, typePet, status) => {
    return { _id, referencia, title, description, url, stock, price, categoria, typePet, status }
}

const rows = [
    createData(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
    createData(11, 12, 13, 14, 15, 16, 17, 18, 19, 20)
]

const TableArticle = () => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align='right'>Referencia</TableCell>
                        <TableCell align='right'>Nombre</TableCell>
                        <TableCell align='right'>Descripción</TableCell>
                        <TableCell align='right'>URL</TableCell>
                        <TableCell align='right'>Stock</TableCell>
                        <TableCell align='right'>Precio</TableCell>
                        <TableCell align='right'>Categoria</TableCell>
                        <TableCell align='right'>Tipo Mascota</TableCell>
                        <TableCell align='right'>Estado</TableCell>
                        <TableCell align='right'>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow
                            key={row._id}
                            sx={{
                                '&:last-of-type td, &:last-of-type th': {
                                    border: 0
                                }
                            }}
                        >
                            <TableCell component='th' scope='row'>
                                {row._id}
                            </TableCell>
                            <TableCell align='right'>{row.referencia}</TableCell>
                            <TableCell align='right'>{row.title}</TableCell>
                            <TableCell align='right'>{row.description}</TableCell>
                            <TableCell align='right'>{row.url}</TableCell>
                            <TableCell align='right'>{row.stock}</TableCell>
                            <TableCell align='right'>{row.price}</TableCell>
                            <TableCell align='right'>{row.categoria}</TableCell>
                            <TableCell align='right'>{row.typePet}</TableCell>
                            <TableCell align='right'>{row.status}</TableCell>
                            <TableCell align='right'>
                            <IconButton aria-label="edit" color="secondary">
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




