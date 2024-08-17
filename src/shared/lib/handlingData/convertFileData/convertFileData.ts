export function convertFileData(file: FileList | null): string | null {
  if (!file) return null;

  let result = '';

  const FR = new FileReader();

  FR.readAsDataURL(file[0]);

  FR.onload = () => {
    result = FR.result as string;
  };

  return result;
}
