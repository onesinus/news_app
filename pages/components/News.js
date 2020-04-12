import { Table } from "react-bootstrap";


const News = ({category, data}) => (
    <>
        <h3 style={{ textAlign: 'center' }}>
            {
                `${category} news`
            }
        </h3>
        {
            data && data.length < 1 && <div style={{ textAlign: 'center' }}>Getting news...</div>
        }
        {
            data && data.length > 0 &&
            <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Source</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Published At</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((d, idx) => (
                        <tr key={idx}>
                            <td>{idx+1}</td>      
                            <td>{d.source.name}</td>
                            <td>{d.author}</td>
                            <td>{d.title}</td>
                            <td>{d.publishedAt}</td>
                            <td>
                                <a target="_blank" href={d.url}>Open News</a>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        }
    </>
)

export default News;