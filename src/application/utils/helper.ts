export const getSrcByType = (content: Scrap | Category) => {
  switch (content.scrap_type.toLowerCase()) {
    case 'link':
      return content.url_preview;
    case 'image':
    default:
      return content.file_url;
  }
};
