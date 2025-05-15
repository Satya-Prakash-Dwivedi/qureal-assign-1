import { useRecoilValue } from 'recoil';
import { postsState } from '../recoil/atoms';
import { List, Card, Empty } from 'antd';
import { api } from '../api/posts';
import { useQuery } from '@tanstack/react-query';

export default function PostList() {
    const { data } = useQuery({
        queryKey: ['posts'],
        queryFn: () => api.get('/items/posts').then(res => res.data.data),
    });

    return (
        <div style={{ maxWidth: 800, margin: '2rem auto' }}>
            <h2>Created Posts</h2>
            {!data || data.length === 0 ? (
                <Empty description="No posts created yet." />
            ) : (
                <List
                    dataSource={data}
                    renderItem={(post) => (
                        <List.Item>
                            <Card title={post.title}>{post.body}</Card>
                        </List.Item>
                    )}
                />
            )}
        </div>
    );
}
