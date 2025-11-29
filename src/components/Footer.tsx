import { PERSONAL_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=0e1633&w=300&t=tt&d=GEx1coJhAog0ap4l1im8ZlVFnl77SnLlPV5ojwomlik&co=0b4975&ct=cdd4d9&cmo=3acc3a&cmn=ff5353'></script>
        <p className="text-slate-600 text-xs mt-2">
            Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
