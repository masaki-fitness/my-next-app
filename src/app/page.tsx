import Image from "next/image";
import { ProgressCircle } from '../components/ProgressCircle';
import { EarningsDisplay } from '../components/EarningsDisplay';
import { AppCard } from '../components/AppCard';
import { Profile } from '../components/Profile';
import { BlogSection } from '../components/BlogSection';

// ダミーデータ
const completedApps = 5;
const currentEarnings = 100000;
const earningsHistory = [
  { month: '2025/4', amount: 20000 },
  { month: '2025/5', amount: 35000 },
  { month: '2025/6', amount: 50000 },
  { month: '2025/7', amount: 70000 },
  { month: '2025/8', amount: 85000 },
  { month: '2025/9', amount: 100000 },
];

const apps = [
  {
    icon: '/app-icons/app1.png',
    name: 'アプリ1',
    description: 'アプリ1の説明文がここに入ります。',
    link: '#'
  },
  // 他のアプリを追加
];

const blogPosts = [
  {
    title: '開発5個目完了！',
    date: '2025年9月10日',
    content: '5個目のアプリが完成しました。今回の開発で学んだことを共有します...'
  },
  // 他の投稿を追加
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          100個のアプリを自己開発して月収１００万円への挑戦します
        </h1>

        {/* 進捗セクション */}
        <section id="progress" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">アプリ開発進捗</h2>
            <div className="flex justify-center">
              <ProgressCircle completed={completedApps} total={100} />
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">収益状況</h2>
            <EarningsDisplay
              currentEarnings={currentEarnings}
              earningsHistory={earningsHistory}
            />
          </div>
        </section>

        {/* アプリリスト */}
        <section id="apps" className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">開発したアプリ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}
          </div>
        </section>

        {/* プロフィール */}
        <section id="profile">
          <Profile />
        </section>        {/* ブログセクション */}
        <section id="blog">
          <BlogSection posts={blogPosts} />
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© 2025 100個のアプリ開発チャレンジ</p>
        </div>
      </footer>
    </div>
  );
}
