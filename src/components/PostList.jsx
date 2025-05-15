import { useRecoilValue } from 'recoil';
import { postsState } from '../recoil/atoms';
import { List, Card, Empty } from 'antd';

export default function PostList() {
  const posts = useRecoilValue(postsState);

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto' }}>
      <h2>Created Posts</h2>
      {posts.length === 0 ? (
        <Empty description="No posts created yet." />
      ) : (
        <List
          dataSource={posts}
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
