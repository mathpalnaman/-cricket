import { articles } from "../data/mockData";

export default function Trending() {
  const size = articles.length;
  const featuredArticle = articles[size - 1];
  const smallerArticles = articles.slice(size - 4, size - 1);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.toLocaleString('en-GB', { day: '2-digit' });
    const month = date.toLocaleString('en-GB', { month: 'short' });
    return { day, month };
  };

  return (
    <div className="p-6">
      <div className="text-5xl font-bold mb-8">TRENDING NOW</div>

      <button className="relative mb-8 h-96 overflow-hidden rounded-lg group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url('${featuredArticle.image}')` }}
        ></div>

        <div className="relative z-10 h-full bg-black bg-opacity-50 flex flex-col justify-center p-6 text-white">
          <div className="mb-4 text-center">
            {(() => {
              const { day, month } = formatDate(featuredArticle.date);
              return (
                <div>
                  <span className="block text-6xl font-bold">{day}</span>
                  <span className="block text-lg font-medium">{month}</span>
                </div>
              );
            })()}
          </div>
          <h2 className="text-4xl font-bold mb-2">{featuredArticle.title}</h2>
          <p className="text-lg">{featuredArticle.content}</p>
        </div>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {smallerArticles.map((article, index) => (
          <button key={index} className="relative h-96 overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url('${article.image}')` }}
            ></div>

            <div className="relative z-10 h-full bg-black bg-opacity-50 flex flex-col justify-center p-6 text-white">
              <div className="mb-4 text-center">
                {(() => {
                  const { day, month } = formatDate(article.date);
                  return (
                    <div>
                      <span className="block text-6xl font-bold">{day}</span>
                      <span className="block text-lg font-medium">{month}</span>
                    </div>
                  );
                })()}
              </div>
              <h2 className="text-4xl font-bold mb-2">{article.title}</h2>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
