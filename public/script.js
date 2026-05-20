async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    document.getElementById('data-result').textContent =
      `${data.message} (${data.timestamp})`;
  } catch (error) {
    document.getElementById('data-result').textContent = 'Error fetching data';
    console.error('Error:', error);
  }
}

async function sendMessage() {
  const input = document.getElementById('message-input');
  const text = input.value.trim();

  if (!text) {
    alert('Please enter a message');
    return;
  }

  try {
    const response = await fetch('/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });
    const data = await response.json();
    document.getElementById('message-result').textContent = data.response;
    input.value = '';
  } catch (error) {
    document.getElementById('message-result').textContent = 'Error sending message';
    console.error('Error:', error);
  }
}
