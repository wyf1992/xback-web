import copyToClipboard from 'copy-to-clipboard';
import { message } from 'antd';

export default (content: string, msg?: string) => {
  if (copyToClipboard(content)) {
    message.success(msg || 'Copied to clipboard');
  }
};
