import fetch from 'node-fetch';

async function testGithubPhotos() {
  try {
    const url = 'https://raw.githubusercontent.com/khwilo/unsplash-images-json/master/photos.json';
    console.log('Fetching raw photos.json from Github:', url);
    const res = await fetch(url);
    console.log('Status:', res.status);
    if (res.status === 200) {
      const data = await res.json() as any[];
      console.log('Total items fetched:', data.length);
      if (data.length > 0) {
        console.log('Sample item:', data[0]);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

testGithubPhotos();
