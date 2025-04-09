// src/data/projects.js
export const projects = [
    {
      id: 'project1',
      title: 'ECサイトリニューアル',
      category: 'web-development',
      tags: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
      thumbnail: '/assets/images/project1-thumb.jpg', // 画像パスは実際の配置に合わせてください
      images: [
        '/assets/images/project1-1.jpg',
        '/assets/images/project1-2.jpg',
        '/assets/images/project1-3.jpg'
      ],
      shortDescription: 'アパレルブランドのECサイトを、デザインとUXを改善してリニューアル。売上20%向上に貢献。',
      description: `このプロジェクトでは、アパレルブランドのECサイトのリニューアルを担当しました。
      既存サイトのユーザビリティの問題を分析し、モダンなデザインと直感的なユーザーインターフェースを実装しました。
      商品検索機能の改善、レスポンシブデザインの強化、決済プロセスの最適化により、コンバージョン率が15%向上し、
      月間売上が約20%増加するという成果を達成しました。`,
      role: 'フロントエンドエンジニア（チーム4名中の1人）',
      responsibilities: [
        'React/Reduxを用いたフロントエンド開発',
        'UIコンポーネントの設計と実装',
        '商品検索・フィルタリング機能の実装',
        'レスポンシブデザインの実装'
      ],
      technologies: [
        'React', 'Redux', 'Node.js', 'Express', 'MongoDB',
        'Styled Components', 'Stripe API', 'Jest', 'GitHub Actions'
      ],
      challenges: `最も苦労したのは、多様な商品バリエーション（サイズ、色、素材など）を扱うための
      柔軟なデータモデルの設計でした。また、既存システムからのデータ移行も課題でしたが、
      段階的な移行戦略を立てることで対応しました。`,
      results: `リニューアル後、サイトの訪問者数が30%増加、平均滞在時間が2倍に延び、
      カート放棄率が25%減少しました。また、モバイルからの購入が45%増加しました。`,
      demoUrl: 'https://example.com/demo1',
      repoUrl: 'https://github.com/yourusername/project1',
      date: '2023年4月 - 2023年7月'
    },
    // 他のプロジェクトデータもここに追加
  ];