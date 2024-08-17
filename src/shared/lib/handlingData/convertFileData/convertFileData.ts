export function convertFileData(file: File): Promise<string> {
  const FR = new FileReader();
  FR.readAsDataURL(file);
  return new Promise((resolve) => {
    FR.onload = () => {
      resolve(FR.result as string);
    };
  });
}
