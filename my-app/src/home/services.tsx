async function fetchMemeData(): Promise<Meme[]> {
  const response = await fetch("https://api.example.com/memes");
  const data = await response.json();
  return data as Meme[];
}

interface Meme {
  id: number;
  title: string;
  url: string;
  caption: string;
}

export { fetchMemeData };
