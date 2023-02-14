import { Viewer } from '../model/types';

const getViewerSchema = (data: Viewer): Viewer => ({
    id: data.id,
    phone: data.phone,
    name: data.name,
    nickname: data.nickname,
    avatar: data.avatar,
    birth: data.birth,
    email: data.email,
    is_online: data.is_online,
    last_active: data.last_active,
});

export default getViewerSchema;
