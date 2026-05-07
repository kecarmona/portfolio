export default function TopBar() {
  return (
    <div className="bg-rose text-white text-xs py-2 px-6 flex justify-between items-center">
      <div className="flex gap-6">
        <span>📞 +1-866-786-7981</span>
        <span>📍 123 Baker Street, Sweet City</span>
      </div>
      <div className="flex gap-3 text-white">
        <a href="#" className="hover:text-rose-light transition-colors">f</a>
        <a href="#" className="hover:text-rose-light transition-colors">𝕏</a>
        <a href="#" className="hover:text-rose-light transition-colors">▶</a>
        <a href="#" className="hover:text-rose-light transition-colors">📷</a>
      </div>
    </div>
  );
}
