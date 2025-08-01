

const validateImageUrl = (url) => {
  return new Promise((resolve) => {
    if (!url) return resolve(false);

    const img = new Image();
    img.src = url;

    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};

export default validateImageUrl;
