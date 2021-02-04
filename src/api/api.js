import axios from 'axios';

const baseUrl = 'https://hn.algolia.com/api/v1/';

export const fetchPosts = async (page, tags, query, sortBy, time) => {
    const url = `${baseUrl}${
        sortBy === 'date' ? 'search_by_date' : 'search'
    }?hitsPerPage=30&query=${query}&page=${page}&tags=${tags}${
        time > 0 ? '&numericFilters=created_at_i>' + time : ''
    }`;
    const data = await (await axios.get(url)).data.hits;
    // console.log(data);
    // console.log(url);
    return data;
};
