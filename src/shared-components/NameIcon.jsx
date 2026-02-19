export default function NameIcon({ name = 'U' }) {
  return (
    <div className="flex items-center justify-center font-bold w-full h-full">
      {name
        ?.split(' ')
        .map((word) => word.charAt(0))
        .join('')
        .toUpperCase()}
    </div>
  );
}
