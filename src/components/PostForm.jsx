import { Button, Form, Input, message } from 'antd';
import { useSetRecoilState } from 'recoil';
import { postsState } from '../recoil/atoms';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api/posts';

export default function PostForm() {
  const setPosts = useSetRecoilState(postsState);
  const [form] = Form.useForm();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (post) =>
      api.post('/items/posts', post),
    onSuccess: (res) => {
      setPosts((prev) => [res.data, ...prev]);
      message.success('Post created!');
      form.resetFields();
      queryClient.invalidateQueries(['posts']);
    },
  });

  const onFinish = (values) => {
    mutation.mutate({ title: values.title, body: values.body, userId: 1 });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: '0 auto' }}
    >
      <Form.Item label="Title" name="title" rules={[{ required: true }]}>
        <Input placeholder="Enter post title" />
      </Form.Item>
      <Form.Item label="Body" name="body" rules={[{ required: true }]}>
        <Input.TextArea rows={4} placeholder="Enter post content" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={mutation.isLoading}>
          Create Post
        </Button>
      </Form.Item>
    </Form>
  );
}
