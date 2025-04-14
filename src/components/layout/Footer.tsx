import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} 的場 陵. All Rights Reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            {/* あなたのGitHubプロフィールURLに修正 */}
            <a
              href="https://github.com/ryomatoba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-accent dark:hover:text-primary-accent transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
             {/* あなたのLinkedInプロフィールURLに修正 (なければ削除) */}
            <a
              href="https://www.linkedin.com/in/ryo-matoba-a49197360" // あなたのLinkedIn URLに置き換える
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-accent dark:hover:text-primary-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}