import { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    // Update Title
    if (title) {
      document.title = title.includes('Velvet') 
        ? title 
        : `${title} | Velvet Artisanal Chocolatier`;
    }

    // Update Meta Description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

export default SEO;
