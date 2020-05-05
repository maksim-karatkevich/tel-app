import TdClient from 'tdweb/dist/tdweb';
import packageJson from '../../../package.json';

class TelegramController {
  init = () => {
    const options = {
      logVerbosityLevel: 1,
      jsLogVerbosityLevel: 3,
      mode: 'wasm',
      prefix: 'tdlib',
      readOnly: false,
      isBackground: false,
      useDatabase: false,
    };

    this.client = new TdClient(options);
  };

  send = (request) => {
    if (!this.client) {
      console.log('init client', request);
      return;
    }
    // eslint-disable-next-line consistent-return
    return this.client.send(request);
  };

  sendTdParameters = async () => {
    const apiId = '1267500';
    const apiHash = 'e04551ce1dad0809f4e200335b9d46d1';
    const { version } = packageJson;

    this.send({
      '@type': 'setTdlibParameters',
      parameters: {
        '@type': 'tdParameters',
        use_test_dc: false,
        api_id: apiId,
        api_hash: apiHash,
        system_language_code: navigator.language || 'en',
        device_model: 'Chrome',
        system_version: 'Mac',
        application_version: version,
        use_secret_chats: false,
        use_message_database: true,
        use_file_database: false,
        database_directory: '/db',
        files_directory: '/',
      },
    });
  };
}

const controller = new TelegramController();

export default controller;
