import { PERSONAL_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
            Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
