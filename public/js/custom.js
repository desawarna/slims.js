/**
 * @Author: Waris Agung Widodo <ido>
 * @Date:   2017-07-11T14:34:40+07:00
 * @Email:  ido.alit@gmail.com
 * @Filename: custom.js
 * @Last modified by:   user
 * @Last modified time: 2017-10-04T16:36:32+07:00
 */

'use strict';

 $('.ui.dropdown').dropdown();
 // $('.menu .category').popup({
 //   inline: true,
 //   hoverable: true,
 //   position: 'bottom left',
 //   delay: {
 //     show: 200,
 //     hide: 300
 //   }
 // });

 $('.ui.sidebar').sidebar({
     context: $('.bottom.segment')
   })
   .sidebar('attach events', '.menu .item.toggle');
