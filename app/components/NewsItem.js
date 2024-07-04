export default function NewsItem({ title, description, url }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-md mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-2">{description}</p>
      <a href={url} className="text-blue-500 hover:underline">
        Read more
      </a>
    </div>
  );
}
