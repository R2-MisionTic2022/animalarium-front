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
import { ItemListAPI, ItemRegisterAPI } from '../../../services/ProductsAPI'
import { useState } from 'react'
import { useEffect } from 'react'
import { Box, Button, Grid, Modal, styled, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'


const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

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

    const [open, setOpen] = useState(false);

    const handlerArticleUpdate = (_id, referencia, title, description, url, stock, price, categoria, typePet, status) => {
        ItemRegisterAPI.articleUpdate(_id, referencia, title, description, url, stock, price, categoria, typePet, status)
            .then(res => {
                if (res !== false) {
                    //setOpenAlert(true)
                    //setAlertState(alertState.success)
                    //setMsj(alertsMjs.updateArticleMjs)
                } else {
                    //console.log("Login Fail")
                    console.log(res)
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const [values, setValues] = useState({
        id: articulos._id,
        referencia: articulos.referencia,
        title: articulos.title,
        description: articulos.description,
        url: articulos.url,
        stock: articulos.stock,
        price: articulos.price,
        categoria: articulos.categoria,
        typePet: articulos.typePet,
        status: articulos.status
    })

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const alertsMjs = {
    updateArticleMjs: 'El artículo fué actualizado correctamente',
    updateArticleAlert: 'El articulo que intenta registrar ya se encuentra ingresado',
    }


    return (
        <>
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
                                        onClick={e => setOpen(true)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" color="secondary"
                                    //onClick={(e) => { handleClickOpen() }}
                                    >
                                    <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={700} heigth={400} bgcolor="white" p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center" p={2}>
                        Editar artículo
                    </Typography>
                    <form>
                    <Grid container spacing={7}>
                        <Grid item xs={12} sm={6}>
                        <TextField p={2} fullWidth label='Referencia'
                            placeholder="referencia"
                            defaultValue={articulos.referencia}
                            onChange={handleChange('referencia')}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField p={2} fullWidth label='title'
                            placeholder="title"
                            defaultValue={articulos.title}
                            onChange={handleChange('title')}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField p={2} fullWidth label='description'
                            placeholder="description"
                            defaultValue={articulos.description}
                            onChange={handleChange('description')}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField p={2} fullWidth label='url'
                            placeholder="url"
                            defaultValue={articulos.url}
                            onChange={handleChange('url')}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField p={2} fullWidth label='stock'
                                placeholder="stock"
                                defaultValue={articulos.stock}
                                onChange={handleChange('stock')}
                            />
                        </Grid>
                         <Grid item xs={12} sm={6}>
                            <TextField p={2} fullWidth label='price'
                                placeholder="price"
                                defaultValue={articulos.price}
                                onChange={handleChange('price')}
                            />
                        </Grid>
                         <Grid item xs={12} sm={6}>
                            <TextField p={2} fullWidth label='Categoria'
                                placeholder="categoria"
                                defaultValue={articulos.categoria}
                                onChange={handleChange('categoria')}
                            />
                        </Grid>
                         <Grid item xs={12} sm={6}>
                            <TextField p={2} fullWidth label='TypePet'
                                placeholder="typePet"
                                defaultValue={articulos.typePet}
                                onChange={handleChange('typePet')}
                            />
                        </Grid>
                         <Grid item xs={12} sm={6}>
                            <TextField p={2} fullWidth label='status'
                                placeholder="status"
                                defaultValue={articulos.status}
                                onChange={handleChange('status')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='contained' sx={{ marginRight: 3.5 }} p={2}
                                onClick={(e) => {
                                    handlerArticleUpdate(
                                        articulos._id,
                                        values.referencia,
                                        values.title,
                                        values.description,
                                        values.url,
                                        values.stock,
                                        values.price,
                                        values.categoria,
                                        values.typePet,
                                        values.status,
                                    )
                                }}>
                                Editar
                            </Button>
                        </Grid>
                        </Grid>
                    </form>

                </Box>
            </StyledModal>
        </>
    )
}

export default TableArticle
