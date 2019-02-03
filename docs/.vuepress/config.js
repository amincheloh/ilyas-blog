module.exports = {
  title: 'Ilyas Blog',
  description: 'บล็อกบันทึกความรู้ของอิลยาส',
  head: [['script', {}, `
    window.onload = function () {
      var content = document.querySelector('.content')
      var p = content.querySelectorAll('p');
      for (var i = 0; i < p.length; i++) {
        p[i].setAttribute('dir', 'auto');
      }
      var blockquote = content.querySelectorAll('blockquote');
      for (var i = 0; i < blockquote.length; i++) {
        blockquote[i].setAttribute('dir', 'auto');
      }  
    }
  `]],
  themeConfig: {
    nav: [
      {
        text: 'หนังสือ',
        items: [
          {
            text: 'หนังสือ อัลเกาะวาอิด อัลอัรบะอ์ (กฎ 4 ประการ)',
            items: [
              { text: 'บทนำ', link: '/aqeedah/4-principles-shaikh-fawzan/0-introduction' },
              { text: 'กฎข้อที่ 1', link: '/aqeedah/4-principles-shaikh-fawzan/1' },
              { text: 'กฎข้อที่ 2', link: '/aqeedah/4-principles-shaikh-fawzan/2' },
              { text: 'กฎข้อที่ 3', link: '/aqeedah/4-principles-shaikh-fawzan/3' },
              { text: 'กฎข้อที่ 4', link: '/aqeedah/4-principles-shaikh-fawzan/4' },
            ],
          },
        ],
      },
    ],
  },
}
