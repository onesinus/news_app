import Header from './layouts/Header';
import News from './components/News';
import { useEffect, useState } from 'react';

import newsapi from "../helpers/newsApi";

const Technology = () => {
    const [data, setData] = useState([]);

    const mergeNewsData = (responses) => {
        const arrNews = [];
        responses.map(response => {
            arrNews.push(...response.articles);
        });

        return arrNews;
    }

    useEffect(() => {
        let unmounted = false;

        if (!unmounted) {            
            const arrPromiseNews = [];
            ['sg', 'id', 'us'].map(country => {
                arrPromiseNews.push(
                    newsapi.v2.topHeadlines({
                        category: 'technology',
                        country,
                        pageSize: 8,
                        page: 1
                    })
                )
            });
    
            Promise.all(arrPromiseNews)
                .then(responses => {
                    if (responses[0].status === "ok") {
                        setData(mergeNewsData(responses))
                    }
                })
                .catch(err => {
                    console.log(`Something error ${err}`);
                })
        }

        return () => {
            unmounted = true;
        }
    }, []);

    return (
        <>
            <Header />
            <News 
                category="Technology"
                data={data}
            />
        </>
    );
}

export default Technology;