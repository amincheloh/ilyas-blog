module.exports = {
  title: 'Ilyas Blog',
  description: 'บล็อกบันทึกความรู้ของอิลยาส',
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
  plugins: [
    '@vuepress/plugin-last-updated',
  ],
}
