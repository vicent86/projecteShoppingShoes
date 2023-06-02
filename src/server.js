import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import  path  from "path";

//Connectem amb MongoDb
mongoose.connect('mongodb://127.0.0.1:27017/Shopping-Shoes-vue-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Manejador de evento para el evento "connected"
mongoose.connection.on('connected', () => {
    console.log('Conexión exitosa a MongoDB');
});
  
// Manejador de evento para el evento "error"
mongoose.connection.on('error', (error) => {
    console.error('Error al conectar a MongoDB', error);
});

//Definim el esquema
const ProductSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
    nombre: String,
    precio: String,
    descripcion: String,
    imagen: String,
    PuntacionMedia: String,
});

// const UserSchema = new mongoose.Schema({
//   _id: {
//     type: mongoose.Schema.Types.ObjectId,
//     auto: true,
//   },
//     cartItems:Array,
// });

const RegistroSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
    nombre: String,
    correo: String,
    password: String,
    cartItems: Array,
});

//Definim el model
const Producto = mongoose.model('Producto', ProductSchema);
const Usuario = mongoose.model('Usuarios', RegistroSchema);
//const Registro = mongoose.model('Registros', RegistroSchema);


const app = express();
app.use(bodyParser.json());
app.use('/assets', express.static(path.join(__dirname, '../assets')));

app.get('/api/productos', async (req,res) => {
    try{
        const productos = await Producto.find({});
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos'});
    }
});

app.get('/api/usuarios/:usuarioId/carrito', async (req, res) => {
    try {
      const { usuarioId } = req.params;
      const { productoId } = req.params;
      const usuario = await Usuario.findOne({ id: usuarioId }).select('id cartItems').lean();
      if (usuario) {
        usuario.cartItems.push(productoId);
        const cartItemsIds = usuario.cartItems;
        const cartItems = await Producto.find({ id: { $in: cartItemsIds } });
        res.status(200).json(cartItems);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los productos del carrito' });
    }
});
  
  
app.get('/api/productos/:productoId', async (req,res) => {
  const { productoId } = req.params;
  try {
    const producto = await Producto.findOne({ id: productoId});
    console.log(producto);
    if (producto) {
        res.status(200).json(producto);
    } else {
        res.status(404).json({
            message: 'No se encontro el producto'
        });
    }
  } catch (error) {
    res.status(500).json({
      error: 'Error al obtener el producto'
    });
  }

});

app.post('/api/usuarios/:usuarioId/carrito/', async (req, res) => {
  const { usuarioId, productoId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productoId)) {
    return res.status(400).json({ error: 'productoId no válido' });
  }

  try {
    // Verificar si el usuario existe
    const usuario = await Usuario.findById(usuarioId);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verificar si el producto existe
    const producto = await Producto.findById(productoId);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Actualizar el carrito del usuario
    usuario.cartItems.push(productoId);
    await usuario.save();

    // Obtener los productos del carrito
    const cartItems = await Producto.find({ _id: { $in: usuario.cartItems } });

    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error al agregar el producto al carrito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.post('/api/registros', async (req, res) => {
  const { nombre, correo, password } = req.body;
  try {
    const usuario = new Usuario( { nombre, correo, password, cartItems : [] });
    const usuarioGuardado = await usuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el registro' });
  }
      
});

app.post('/api/login', async (req, res) => {
  const { correo, password } = req.body;
  try{
    const result = await db.collection('usuarios').findOne({
      correo: correo,
      password: password,
    });

    if (result) {
      // Las credenciales son válidas, el usuario y contraseña coinciden en el mismo documento
      console.log('Credenciales válidas');
    } else {
      // Las credenciales no son válidas, el usuario y contraseña no coinciden en el mismo documento
      console.log('usuario no registrado');
    }

  }catch(error) {
    res.status(500).json( { error: 'Error de inicio de sesión '});
  }

});

app.delete('/api/usuarios/:usuarioId/carrito/:productoId', async (req, res) => {
    const { productoId } = req.params;
    const { usuarioId } = req.params;
    const usuario = await Usuario.findOne({ id: id });
    
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
  
    await Usuario.updateOne({ id: usuarioId }, {
      $pull: { cartItems: productoId },
    });
  
    const cartItemsIds = usuario.cartItems;
    const cartItems = await Producto.find({ id: { $in: cartItemsIds } });
    
    res.status(200).json(cartItems);
});
  
  
  
  
app.listen(8000, () => {
    console.log('El servidor está escuchando el puerto indicado!');
});