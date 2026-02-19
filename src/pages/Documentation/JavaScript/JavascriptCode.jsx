import CodeCard from '../CodeCard';

const data = [
  {
    title: 'Array Check (isArray)',
    code: `const value = [1, 2, 3];

Array.isArray(value);     // true
value instanceof Array;  // true

typeof value; // object
typeof null;  // object
typeof NaN;   // number`,
  },
  {
    title: 'Remove Duplicates',
    code: `const arr = [1,2,3,1,2,3,3,2,1,4];
const rmDup = [...new Set(arr)];

console.log(rmDup);`,
  },
  {
    title: 'Debounce Function',
    code: `function debounce(func, delay) {
  let timeInterval;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeInterval);
    timeInterval = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}`,
  },
  {
    title: 'String Palindrome Check',
    code: `function isPalindrome(str) {
  const rvStr = str.split('').reverse().join('');
  return str === rvStr;
}`,
  },
  {
    title: 'Deep Clone',
    code: `const deepClone = (obj) =>
  JSON.parse(JSON.stringify(obj));`,
  },
];

export default function JavascriptCode() {
  return (
    <>
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-8">
        <h1 className="text-3xl font-bold text-center text">
          JavaScript Interview Questions
        </h1>

        {data?.map((item, i) => (
          <section key={i}>
            <h2 className="text-xl font-semibold mb-2">
              {i + 1}. {item?.title}
            </h2>

            <div className="relative">
              <CodeCard data={{ title: `// ${item?.title}`, desc: item?.code }} />

              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
                <code>{item?.code}</code>
              </pre>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
