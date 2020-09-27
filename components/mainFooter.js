import Footer from 'rc-footer';
import React from 'react';

import 'rc-footer/assets/index.css';

function MainFooter() {
  return (
    <Footer
      columns={[
        {
          title: '❤️ Redes sociais',
          openExternal: true,
          items: [{
            title: 'Facebook',
            url: 'https://facebook.com'
          },
          {
            title: 'Instagram',
            url: 'https://instagram.com'
          }]
        },
        {
          title: 'Contatos',
          openExternal: true,
          items: [{
            title: 'E-mail',
            url: 'https://facebook.com'
          },
          {
            title: 'Whatsapp',
            url: 'https://instagram.com'
          }]
        },
      ]}
      bottom="Made with ❤️ by SweetDreams"
    />
  );
}

export default MainFooter;