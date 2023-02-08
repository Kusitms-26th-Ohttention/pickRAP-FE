export const getSrcByType = (content: Scrap | Category | RevisitAnalysis) => {
  if (content.scrap_type === null) return '';
  switch (content.scrap_type.toLowerCase()) {
    case 'link':
      return content.preview_url;
    case 'image':
    case 'video':
    case 'pdf':
      return content.file_url;
    default:
      return content.preview_url;
  }
};

export const getValidURL = (url: string) => {
  try {
    return new URL(url);
  } catch (err) {
    return '';
  }
};
