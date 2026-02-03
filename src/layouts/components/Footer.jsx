export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="py-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} VTS. All Rights Reserved.
      </div>
    </footer>
  );
}
