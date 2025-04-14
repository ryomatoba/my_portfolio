import hackathonThumbnail from '/public/images/hackathon_thumbnail.png';
import portfolioSiteThumb from '/public/images/portfolio-site-thumb.png';


// プロジェクトデータの型定義
export interface Project {
    id: string;
    title: string;
    description: string; // カード用
    image?: string;
    tags: string[];
    // 詳細ページ用
    longDescription?: string;
    features?: string[];
    problem?: string;
    solution?: string;
    techStackDetails?: string[];
    architectureDiagramUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
  }
  
  // プロジェクトデータの配列をエクスポート
  export const projectsData: Project[] = [ // 変数名を projectsData に変更（任意）
    {
      id: 'tsundoku-app',
      title: 'ツンドク娘 (ハッカソン)',
      description: '本のJANコードから「ツンドク娘」を召喚！会話やクイズで楽しく積読解消をサポート。AWS活用。',
      image: hackathonThumbnail,
      tags: ['チーム開発', 'AWS', 'サーバーレス', 'React', '最優秀賞'],
      githubUrl: 'https://github.com/study-basic/team-book-battler',
      longDescription: '「積読を楽しく解消したい」という課題に対し、本のJANコードを読み取るとキャラクター（ツンドク娘）が現れ、その本に関するインタラクション（会話、クイズ、バトル）ができるWebアプリケーションを開発しました。チーム4名（私以外は現役エンジニア）で1ヶ月という短期間でアイデアから実装、発表まで完遂し、ハッカソンで最優秀賞を受賞しました。',
      features: ['JANコード読み取りによる書籍情報取得', 'キャラクターとの対話機能', '書籍に関するクイズ・バトル機能', '積読リスト管理'],
      problem: '一般的な読書管理アプリは存在するが、「積読」の解消に特化し、かつゲーム性を持たせたものは少ない。',
      solution: 'キャラクターとのインタラクションを通じて、積読本への関心を高め、楽しみながら読書を促す体験を提供。',
      techStackDetails: ['AWS Lambda (Python)', 'Amazon DynamoDB', 'Amazon API Gateway', 'React', 'JavaScript'],
    },
    {
       id: 'intern-dx-app',
       title: 'DX事業部向けWebアプリ (インターン)',
       description: '対話形式でSEOに配慮した高品質な記事を段階的に生成。時間短縮と品質向上を実現する企業向けツール。',
       image: undefined, // Set back to undefined as the image file is missing
       tags: ['企業向け', 'GCP', 'Docker', 'CI/CD', 'フルスタック', 'AI活用', '業務効率化', 'SEO',],
       longDescription: `就業型インターンとして、企業向けのAIを活用した記事生成支援ツールを開発しました。記事作成にかかる時間と労力を削減し、SEOに強く品質の高いコンテンツ生成を支援することを目的としています。ユーザーは対話形式でAIとやり取りしながら、キーワード選定、構成案作成、本文執筆、画像生成といった記事作成プロセスを段階的に進めることができます。このツールにより、コンテンツマーケティング業務の効率化と質的向上に貢献します。`,
       features: ['ユーザー認証', 'データ登録・編集・削除機能', '業務データ可視化ダッシュボード', '外部API連携'],
       problem: '高品質でSEOに配慮した記事コンテンツの作成には、専門知識と多くの時間が必要であり、特にリソースが限られる場合に大きな負担となる。また、アイデア出しや構成作成の段階で停滞しやすい。', 
       solution: 'AIとの対話形式インターフェースを提供し、ユーザーの入力や選択に基づいてAIが段階的に記事を生成することで、専門知識が少ないユーザーでも効率的に高品質な記事を作成可能にする。SEO要素もプロンプトに組み込み、自然な形で対策を行う。', 
       techStackDetails: ['大規模言語モデルAPI (OpenAI API, Google Gemini APIなど)','GCP(Cloud Run, SQL, Storage, Firebase Auth)', 'Docker', 'GitHub Actions (CI/CD)', 'React', 'Python/Flask', 'MySQL'],
    },
    {
       id: 'portfolio-site',
       title: 'ポートフォリオサイト ',
       description: 'React, TypeScript, Tailwind CSSで構築した自身のポートフォリオサイト。レスポンシブ、ダークモード対応。',
       image: portfolioSiteThumb,
       tags: ['個人開発', 'React', 'TypeScript', 'TailwindCSS', 'Netlify'],
       githubUrl: 'https://github.com/ryomatoba/my_portfolio',
       longDescription: '自身のスキルや制作実績を紹介するために、React, TypeScript, Tailwind CSSを用いて開発したポートフォリオサイトです。Framer Motionによるアニメーション、ダークモード切り替え機能、レスポンシブデザインを実装し、github actions, github pagesでCI/CD構築しています。',
       features: ['プロジェクト紹介', 'スキル一覧表示', 'プロフィール表示', 'お問い合わせフォーム連携(予定)', 'ダークモード対応', 'レスポンシブデザイン', 'アニメーション効果'],
       techStackDetails: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'react-router-dom', 'react-icons', 'Netlify'],
    },
  ];
