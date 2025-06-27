import axios from 'axios';

const accessCode = 'YOUR_ACCESS_CODE'; // Replace this with actual code

export async function Log(stack, level, pkg, message) {
  const url = 'http://20.244.56.144/evaluation-service/logs';

  const data = { stack, level, package: pkg, message };

  try {
    const res = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessCode}`
      }
    });
    console.log('✅ Log:', res.data);
  } catch (err) {
    console.error('❌ Log error:', err.message);
  }
}
