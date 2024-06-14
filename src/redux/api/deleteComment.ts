import { AxiosResponse } from 'axios';

import api from './api';

const deleteComment = (commentId: number): Promise<AxiosResponse<string>> =>
  api.delete<string>(`comments/${commentId}`);

export default deleteComment;
