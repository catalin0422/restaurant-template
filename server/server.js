const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const ORDERS_FILE = path.join(__dirname, 'orders.json');

app.use(cors());
app.use(express.json());

function readOrders() {
  if (!fs.existsSync(ORDERS_FILE)) return [];
  try { return JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf8')); }
  catch { return []; }
}

function writeOrders(orders) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

// GET all orders
app.get('/api/orders', (req, res) => {
  res.json(readOrders());
});

// POST new order
app.post('/api/orders', (req, res) => {
  const { name, phone, address, notes, items, total } = req.body;
  if (!name || !phone || !address || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Date incomplete: name, phone, address și items sunt obligatorii.' });
  }
  const orders = readOrders();
  const order = {
    id: Date.now(),
    name,
    phone,
    address,
    notes: notes || '',
    items,
    total,
    status: 'nouă',
    createdAt: new Date().toISOString(),
  };
  orders.unshift(order);
  writeOrders(orders);
  res.status(201).json(order);
});

// PATCH order status
app.patch('/api/orders/:id/status', (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;
  const validStatuses = ['nouă', 'în proces', 'livrată'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: `Status invalid. Valori acceptate: ${validStatuses.join(', ')}` });
  }
  const orders = readOrders();
  const idx = orders.findIndex(o => o.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Comanda nu a fost găsită.' });
  orders[idx].status = status;
  writeOrders(orders);
  res.json(orders[idx]);
});

app.listen(PORT, () => {
  console.log(`La Forno server → http://localhost:${PORT}`);
});
