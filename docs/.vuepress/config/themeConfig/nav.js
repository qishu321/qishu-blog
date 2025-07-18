// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '运维',
    link: '/devops/',
    items: [
      { text: '监控', link: '/devops/monitoring/' },
      { text: '容器', link: '/devops/docker/' },
      // 如需更多二级目录继续添加
    ]
  },
  {
    text: '编程',
    link: '/backend/',
    items: [
      { text: 'go基础知识', link: '/backend/go-learn/' },
      { text: 'go每日一库', link: '/backend/go-daily/' },
      // 如需更多二级目录继续添加
    ]
  },
  { text: '更多', link: '/more/' },
  { text: '关于我', link: '/about/' },
  { text: '留言板', link: '/message-board/' },
]
