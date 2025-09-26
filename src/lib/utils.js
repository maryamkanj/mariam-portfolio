export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function openNewTab(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export async function postData(url = '', data = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error('Error posting data:', error);
    return { success: false, error };
  }
}

export function imagePath(filename) {
  return `/images/${filename}`;
}