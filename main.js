const path = require('path');
const url = require('url');
const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const Customer = require('./models/Customer');
const Item = require('./models/Item');
const MenuModel = require('./models/Menu');
const Order = require('./models/Order');
const Owner = require('./models/Owner');
const Permission = require('./models/Permission');
const Reservation = require('./models/Reservation');
const Staff = require('./models/Staff');
const Table = require('./models/Table');

const connectDB = require('./config/db');

// Connect to database
connectDB();

let mainWindow;

let isDev = false;
isMac = process.platform === 'darwin' ? true : false;

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') {
  isDev = true;
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: isDev ? 1800 : 1800,
    height: 1200,
    show: false,
    icon: './assets/icons/icon.png',
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: true,
    },
  });

  let indexPath;

  if (isDev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true,
    });
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true,
    });
  }

  mainWindow.loadURL(indexPath);

  // Don't show until we are ready and loaded
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();

    // Open devtools if dev
    if (isDev) {
      const {
        default: installExtension,
        REACT_DEVELOPER_TOOLS,
      } = require('electron-devtools-installer');

      installExtension(REACT_DEVELOPER_TOOLS).catch((err) =>
        console.log('Error loading React DevTools: ', err)
      );
      mainWindow.webContents.openDevTools();
    }
  });

  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', () => {
  createMainWindow();

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);
});

const menu = [
  ...(isMac ? [{ role: 'appMenu' }] : []),
  {
    role: 'fileMenu',
  },
  {
    role: 'editMenu',
  },
  {
    label: 'Logs',
    submenu: [
      {
        label: 'Clear Logs',
        click: () => clearLogs(),
      },
    ],
  },
  ...(isDev
    ? [
        {
          label: 'Developer',
          submenu: [
            { role: 'reload' },
            { role: 'forcereload' },
            { type: 'separator' },
            { role: 'toggledevtools' },
          ],
        },
      ]
    : []),
];

// --- Customers --- //
ipcMain.on('customers:load', sendCustomers);

ipcMain.on('customers:add', async (e, item) => {
  try {
    await Customer.create(item);
    sendCustomers();
  } catch (error) {
    console.log(error);
  }
});

ipcMain.on('customers:delete', async (e, _id) => {
  try {
    await Customer.deleteOne({ _id });
    sendCustomers();
  } catch (error) {
    console.log(error);
  }
});

async function sendCustomers() {
  try {
    const customers = await Customer.find().sort({ created: 1 });
    mainWindow.webContents.send('customers:get', JSON.stringify(customers));
  } catch (error) {
    console.log(error);
  }
}

async function clearCustomers() {
  try {
    await Customer.deleteMany({});
    mainWindow.webContents.send('customers:clear');
  } catch (error) {
    console.log(error);
  }
}

// --- Items --- //
ipcMain.on('items:load', sendItems);

ipcMain.on('items:add', async (e, item) => {
  try {
    await Item.create(item);
    sendItems();
  } catch (error) {
    console.log(error);
  }
});

ipcMain.on('items:delete', async (e, _id) => {
  try {
    await Item.deleteOne({ _id });
    sendItems();
  } catch (error) {
    console.log(error);
  }
});

async function sendItems() {
  try {
    const items = await Item.find().sort({ created: 1 });
    mainWindow.webContents.send('items:get', JSON.stringify(items));
  } catch (error) {
    console.log(error);
  }
}

async function clearItems() {
  try {
    await Item.deleteMany({});
    mainWindow.webContents.send('items:clear');
  } catch (error) {
    console.log(error);
  }
}

// --- Menu --- //
ipcMain.on('menus:load', sendMenus);

ipcMain.on('menus:add', async (e, item) => {
  try {
    await Menu.create(item);
    sendMenus();
  } catch (error) {
    console.log(error);
  }
});

ipcMain.on('menus:delete', async (e, _id) => {
  try {
    await Menu.deleteOne({ _id });
    sendMenus();
  } catch (error) {
    console.log(error);
  }
});

async function sendMenus() {
  try {
    const menus = await Menu.find().sort({ created: 1 });
    mainWindow.webContents.send('menus:get', JSON.stringify(menus));
  } catch (error) {
    console.log(error);
  }
}

async function clearMenus() {
  try {
    await Menu.deleteMany({});
    mainWindow.webContents.send('menus:clear');
  } catch (error) {
    console.log(error);
  }
}

// --- Orders --- //
ipcMain.on('orders:load', sendOrders);

ipcMain.on('orders:add', async (e, item) => {
  try {
    await Order.create(item);
    sendOrders();
  } catch (error) {
    console.log(error);
  }
});

ipcMain.on('orders:delete', async (e, _id) => {
  try {
    await Order.deleteOne({ _id });
    sendOrders();
  } catch (error) {
    console.log(error);
  }
});

async function sendOrders() {
  try {
    const orders = await Order.find().sort({ created: 1 });
    mainWindow.webContents.send('orders:get', JSON.stringify(orders));
  } catch (error) {
    console.log(error);
  }
}

async function clearOrders() {
  try {
    await Order.deleteMany({});
    mainWindow.webContents.send('orders:clear');
  } catch (error) {
    console.log(error);
  }
}

// --- Owner --- //
ipcMain.on('owner:load', sendOwner);

async function sendOwner(_id) {
  try {
    const owner = await Owner.findOne({ _id }).sort({ created: 1 });
    mainWindow.webContents.send('owner:get', JSON.stringify(owner));
  } catch (error) {
    console.log(error);
  }
}

// --- Staff --- //
ipcMain.on('staff:load', sendStaff);

async function sendStaff(_id) {
  try {
    const staff = await Staff.findOne({ _id }).sort({ created: 1 });
    mainWindow.webContents.send('staff:get', JSON.stringify(staff));
  } catch (error) {
    console.log(error);
  }
}

// --- Permission --- //
ipcMain.on('permission:add', async (e, permission) => {
  try {
    await Permission.create(permission);
    sendPermission();
  } catch (error) {
    console.log(error);
  }
});

async function sendPermission() {
  try {
    const permission = await Permission.find().sort({ created: 1 });
    mainWindow.webContents.send('permission:get', JSON.stringify(permission));
  } catch (error) {
    console.log(error);
  }
}

// --- Reservation --- //
ipcMain.on('reservations:load', sendReservations);

ipcMain.on('reservations:add', async (e, table) => {
  try {
    await Reservation.create(table);
    sendReservations();
  } catch (error) {
    console.log(error);
  }
});

ipcMain.on('reservations:delete', async (e, _id) => {
  try {
    await Reservation.deleteOne({ _id });
    sendReservations();
  } catch (error) {
    console.log(error);
  }
});

async function sendReservations() {
  try {
    const reservations = await Reservation.find().sort({ created: 1 });
    mainWindow.webContents.send('reservations:get', JSON.stringify(reservations));
  } catch (error) {
    console.log(error);
  }
}

async function clearReservations() {
  try {
    await Reservation.deleteMany({});
    mainWindow.webContents.send('reservations:clear');
  } catch (error) {
    console.log(error);
  }
}

// --- Table --- //
ipcMain.on('tables:load', sendTables);

ipcMain.on('tables:add', async (e, table) => {
  try {
    await Table.create(table);
    sendTables();
  } catch (error) {
    console.log(error);
  }
});

ipcMain.on('tables:delete', async (e, _id) => {
  try {
    await Table.deleteOne({ _id });
    sendTables();
  } catch (error) {
    console.log(error);
  }
});

async function sendTables() {
  try {
    const tables = await Table.find().sort({ created: 1 });
    mainWindow.webContents.send('tables:get', JSON.stringify(tables));
  } catch (error) {
    console.log(error);
  }
}

async function clearTables() {
  try {
    await Table.deleteMany({});
    mainWindow.webContents.send('tables:clear');
  } catch (error) {
    console.log(error);
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});

// Stop error
app.allowRendererProcessReuse = true;
