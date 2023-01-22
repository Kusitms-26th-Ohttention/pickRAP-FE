export const getSrcByType = (content: Scrap | Category) => {
  if (content.scrap_type === null) return '';
  switch (content.scrap_type.toLowerCase()) {
    case 'link':
      return content.url_preview;
    case 'image':
    case 'video':
    case 'pdf':
      return content.file_url;
    default:
      return content.url_preview;
  }
};

export const getValidURL = (url: string) => {
  try {
    return new URL(url);
  } catch (err) {
    return '';
  }
};
