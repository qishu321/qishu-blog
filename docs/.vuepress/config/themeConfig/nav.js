// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '运维',
    link: '/devops/',
    items: [
      { text: 'Docker相关', link: '/devops/docker/' },
      { text: 'Kubernetes相关', link: '/devops/kubernetes/' },
      { text: '监控相关', link: '/devops/monitoring/' },
    ]
  },
  {
    text: '编程',
    link: '/backend/',
    items: [
      { text: 'go每日一库', link: '/pages/c232253e/' }, // go-daily
      { text: 'go基础知识', link: '/pages/9a7ee40fc232253e/' }, //go-learn
      // 如需更多二级目录继续添加
    ]
  },
  { text: '更多', link: '/more/' },
  { text: '关于我', link: '/about/' },
  { text: '留言板', link: '/message-board/' },
]

