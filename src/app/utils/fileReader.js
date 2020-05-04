const readFile = (data) => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(data);
    fileReader.onload = (blob) => {
      resolve(blob);
    };
  });
};

export default readFile;
