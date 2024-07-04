import Dashboard from "./components/Dashboard";
import NewsItem from "./components/NewsItem";

// Dummy news data
const newsData = [
  {
    title: "News Item 1",
    description: "This is a description for news item 1.",
    url: "#",
  },
  {
    title: "News Item 2",
    description: "This is a description for news item 2.",
    url: "#",
  },
  {
    title: "News Item 3",
    description: "This is a description for news item 3.",
    url: "#",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-grow min-h-screen">
      <Dashboard />
      <div className="flex-grow p-4 bg-gray-100 text-black">
        <h1 className="text-center text-3xl font-bold mb-4">
          Welcome to DevGram
        </h1>
        {newsData.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
}
