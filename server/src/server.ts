import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT ?? '5000';

app.listen(Number(PORT), () => {
  console.log(`[server] DevFlow API running on http://localhost:${PORT}`);
});